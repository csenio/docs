import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import useClipboard from "../hooks/useClipboard";

export const liveEditorStyle = {
  fontSize: 14,
  overflowX: "auto",
  fontFamily: "Menlo,monospace",
  borderRadius: 10,
  outline: "none"
};

export const liveErrorStyle = {
  fontFamily: "Menlo, monospace",
  fontSize: 14,
  padding: "1em",
  overflowX: "auto",
  color: "black",
  backgroundColor: "rgba(255,0,0,0.15)",
  borderRadius: 10
};

const LivePreviewStyles = styled.div`
  border: 1px solid rgb(226, 232, 240);
  margin: 32px 0;
  padding: 12px;
  border-radius: 5px;
`;

const LiveEditorWrapper = styled.div`
  position: relative;
  margin: 32px 0;
  border-radius: 10px;
  background: rgb(1, 22, 39);
`;

const CopyButton = styled.button`
  border-radius: 4px;
  background: #20e6d8;
  color: #111;
  padding: 4px;
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 12px;
  font-weight: 600;
`;

const LiveEditorText = styled.div`
  color: #ccc;
  user-select: none;
  font-weight: 600;
  font-size: 12px;
  display: block;
  user-select: none;
  text-align: center;
  text-transform: uppercase;
  padding-top: 8px;
`;

export default function LiveSnippet({ children }) {
  const [editorCode, setEditorCode] = useState(children.props.children.trim());

  const { onCopy, hasCopied } = useClipboard(editorCode);

  const handleCodeChange = newCode => setEditorCode(newCode.trim());

  if (children.props.live) {
    return (
      <LiveProvider
        theme={darkTheme}
        noInline={!children.props.inline}
        scope={{ styled }}
        code={editorCode}
      >
        <LivePreview Component={LivePreviewStyles} />

        <LiveEditorWrapper>
          <LiveEditorText>editable example</LiveEditorText>
          <LiveEditor
            onChange={handleCodeChange}
            padding={20}
            style={liveEditorStyle}
          />
          <CopyButton onClick={onCopy}>
            {hasCopied ? "copied" : "copy"}
          </CopyButton>
        </LiveEditorWrapper>

        <LiveError style={liveErrorStyle} />
      </LiveProvider>
    );
  } else {
    return (
      <LiveProvider
        disabled
        theme={darkTheme}
        noInline={!children.props.inline}
        scope={{ styled }}
        code={editorCode}
      >
        <LiveEditorWrapper>
          <LiveEditor
            onChange={handleCodeChange}
            padding={20}
            style={liveEditorStyle}
          />
          <CopyButton onClick={onCopy}>
            {hasCopied ? "copied" : "copy"}
          </CopyButton>
        </LiveEditorWrapper>
      </LiveProvider>
    );
  }
}
