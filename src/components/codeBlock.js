import React, {useState} from 'react'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import darkTheme from 'prism-react-renderer/themes/nightOwl'
import useClipboard from '../hooks/useClipboard'
import {
  liveEditorStyle,
  liveErrorStyle,
  LivePreviewStyles,
  LiveEditorWrapper,
  CopyButton,
  LiveEditorText,
} from './styles'
import scope from './scope'

export default function LiveSnippet({children}) {
  const [editorCode, setEditorCode] = useState(children.props.children.trim())
  const {onCopy, hasCopied} = useClipboard(editorCode)
  const handleCodeChange = newCode => setEditorCode(newCode.trim())

  const liveProviderProps = {
    theme: darkTheme,
    noInline: !children.props.inline,
    scope,
    code: editorCode,
  }

  if (children.props.live) {
    return (
      <LiveProvider {...liveProviderProps}>
        <LivePreview Component={LivePreviewStyles} />

        <LiveEditorWrapper>
          <LiveEditorText>editable example</LiveEditorText>
          <LiveEditor onChange={handleCodeChange} padding={20} style={liveEditorStyle} />
          <CopyButton onClick={onCopy}>{hasCopied ? 'copied' : 'copy'}</CopyButton>
        </LiveEditorWrapper>

        <LiveError style={liveErrorStyle} />
      </LiveProvider>
    )
  } else {
    return (
      <LiveProvider disabled {...liveProviderProps}>
        <LiveEditorWrapper>
          <LiveEditor onChange={handleCodeChange} padding={20} style={liveEditorStyle} />
          <CopyButton onClick={onCopy}>{hasCopied ? 'copied' : 'copy'}</CopyButton>
        </LiveEditorWrapper>
      </LiveProvider>
    )
  }
}
