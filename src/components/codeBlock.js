import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import useClipboard from "../hooks/useClipboard";

export const liveEditorStyle = {
  fontSize: 14,
  marginBottom: 32,
  marginTop: 32,
  overflowX: "auto",
  fontFamily: "Menlo,monospace",
  borderRadius: 10
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

function LiveSnippet({ children }) {
  const [editorCode, setEditorCode] = useState(children.props.children.trim());

  const { onCopy, hasCopied } = useClipboard(editorCode);

  const handleCodeChange = newCode => setEditorCode(newCode.trim());

  return (
    <LiveProvider
      theme={darkTheme}
      noInline={!children.props.inline}
      scope={{ styled }}
      code={editorCode}
    >
      <LivePreview Component={LivePreviewStyles} />

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

      <LiveError style={liveErrorStyle} />
    </LiveProvider>
  );
}

const SyntaxHighlighter = ({ children }) => {
  const className = children.props.className || "language-jsx";
  const language = className.split("-")[1];

  return (
    <Highlight
      {...defaultProps}
      theme={darkTheme}
      code={children.props.children.trim()}
      language={language || "jsx"}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default function CodeBlock(props) {
  if (props.children.props.live) {
    return <LiveSnippet {...props} />;
  } else {
    return <SyntaxHighlighter {...props} />;
  }
}
