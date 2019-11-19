import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "../styles/preflight.css";

const Page = styled.div`
  width: 100%;
`;

const SideBar = styled.nav`
  width: 300px;
  height: 100vh;
  background: red;
  position: fixed;
  left: 0;
  top: 0;
`;

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: 300px;
  display: inline-block;
`;

const Layout = ({ children }) => (
  <Page>
    <SideBar>
      <Link to="/getting-started">Getting Started</Link>
    </SideBar>
    <Content>{children}</Content>
  </Page>
);

export default Layout;
