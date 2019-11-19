import React from 'react'
import {MDXProvider} from '@mdx-js/react'

import Layout from './layout'
import Seo from './seo'
import CodeBlock from './codeBlock'
import TemplateStyles from '../styles/templateStyles'

export default ({children, pageContext}) => (
  <Layout>
    <Seo title={pageContext.frontmatter.title} />
    <TemplateStyles>
      <MDXProvider components={{pre: CodeBlock}}>{children}</MDXProvider>
    </TemplateStyles>
  </Layout>
)
