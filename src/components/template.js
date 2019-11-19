import React from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";

import Layout from "./layout";
import Seo from "./seo";
import CodeBlock from "./codeBlock";
import TemplateStyles from "../styles/templateStyles";

const components = {
  pre: CodeBlock
};

export default function template({ children, pageContext }) {
  const { title } = pageContext.frontmatter;

  return (
    <Layout>
      <Seo title={title} />
      <TemplateStyles>
        <MDXProvider components={components}>{children}</MDXProvider>
      </TemplateStyles>
    </Layout>
  );
}
