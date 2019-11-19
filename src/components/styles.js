import {Link} from 'gatsby'
import styled from 'styled-components'
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nav

export const Page = styled.div`
  width: 100%;
`

export const SideNav = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid rgb(226, 232, 240);
  padding: 24px;
  padding-top: 80px;
`

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: 300px;
  display: inline-block;
`

export const NavLink = styled(Link).attrs({
  activeClassName: 'active',
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
`

export const NavTitle = styled.h2`
  font-weight: bold;
  color: #bbb;
  margin-bottom: 4px;
  color: rgb(160, 174, 192);
  font-size: 12px;
  text-transform: uppercase;
`

export const LinkGroup = styled.div`
  margin-bottom: 24px;
`

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// codeBlock

export const liveEditorStyle = {
  fontSize: 14,
  overflowX: 'auto',
  fontFamily: 'Menlo,monospace',
  borderRadius: 10,
  outline: 'none',
}

export const liveErrorStyle = {
  fontFamily: 'Menlo, monospace',
  fontSize: 14,
  padding: '1em',
  overflowX: 'auto',
  color: 'black',
  backgroundColor: 'rgba(255,0,0,0.15)',
  borderRadius: 10,
}

export const LivePreviewStyles = styled.div`
  border: 1px solid rgb(226, 232, 240);
  margin: 32px 0;
  padding: 12px;
  border-radius: 5px;
`

export const LiveEditorWrapper = styled.div`
  position: relative;
  margin: 32px 0;
  border-radius: 10px;
  background: rgb(1, 22, 39);
`

export const CopyButton = styled.button`
  border-radius: 4px;
  background: #20e6d8;
  color: #111;
  padding: 4px;
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 12px;
  font-weight: 600;
`

export const LiveEditorText = styled.div`
  color: #ccc;
  user-select: none;
  font-weight: 600;
  font-size: 12px;
  display: block;
  user-select: none;
  text-align: center;
  text-transform: uppercase;
  padding-top: 8px;
`
