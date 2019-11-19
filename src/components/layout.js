import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "../styles/preflight.css";

const Page = styled.div`
  width: 100%;
`;

const SideNav = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid rgb(226, 232, 240);
  padding: 24px;
`;

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: 300px;
  display: inline-block;
`;

const NavLink = styled(Link).attrs({
  activeClassName: "active"
})`
  font-size: 14px;
  color: rgb(45, 55, 72);

  &:hover {
    transform: translate3d(0, 5px, 0);
  }
  &.active {
    font-weight: bold;
  }
  transition: transform 0.2s;
`;

const NavTitle = styled.h2`
  font-weight: bold;
  color: #444;
`;

const Layout = ({ children }) => (
  <Page>
    <SideNav>
      <NavLink to="/getting-started">Getting Started</NavLink>
    </SideNav>
    <Content>{children}</Content>
  </Page>
);

export default Layout;
