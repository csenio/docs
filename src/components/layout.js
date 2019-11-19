import React from 'react'
import '../styles/preflight.css'
import {Page, SideNav, LinkGroup, NavLink, NavTitle, Content} from './styles'

const Layout = ({children}) => (
  <Page>
    <SideNav>
      <LinkGroup>
        <NavLink to="/getting-started">Getting Started</NavLink>
      </LinkGroup>
      <LinkGroup>
        <NavTitle>Components</NavTitle>
        <NavLink to="/select">Select</NavLink>
      </LinkGroup>
    </SideNav>
    <Content>{children}</Content>
  </Page>
)

export default Layout
