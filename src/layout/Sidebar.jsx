import styled, { css } from 'styled-components';
import { NavLink,  Link } from "react-router-dom";
import { useState } from 'react';

import { ReactComponent as Arrow } from 'assets/icons/sidebar-arrow.svg';
import * as sidebarRoutes from './sidebarRoutes';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openToggle = () => {
    setIsOpen(prev => !prev);
  }
  
  const getIsOpen = () => isOpen ? 'open' : ''

  return (
    <SidebarContainer className={getIsOpen()}>
      <div>
        <Top>
          {sidebarRoutes.top.map(LinkItem)}
        </Top>
        <Bottom>
          {sidebarRoutes.bottom.map(LinkItem)}
        </Bottom>
      </div>
      <StyledArrow className={getIsOpen()} onClick={openToggle} />
    </SidebarContainer>
  );
};

const LinkItem = ({ slug = null, icon, page, pathname = null }) => {
  if ( slug) {
    return (
      <StyledLink 
        key={slug} 
        to={slug}
        end //keeping the homepage from being active all the time
      >
        {icon}
        <span>{page}</span>
      </StyledLink>
    )
  }

  return (
    <StyledAnchor
      key={pathname} 
      href={pathname}
      target='_blank'
      rel='noopener'
    >
      {icon}
      <span>{page}</span>
    </StyledAnchor>
  )
}

const SidebarContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  min-width: 60px;
  max-width: 60px;
  height: calc(100vh - var(--menuHeight));
  transition: .2s ease-in;
  z-index: 999;
  background-color: var(--sideBarBackground);
  position: sticky;
  top: 61px;
  &.open {
    max-width: var(--sideBarWidth);
    min-width: var(--sideBarWidth);
  }

  & > div {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 12px;
`

const Top = styled(ButtonContainer)`
  top: 0;
`

const Bottom = styled(ButtonContainer)`
  bottom: 0;
`
const LinkStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  height: 35px;
  border-radius: 8px;
  margin: 2.5px 0;

  &.active,
  &:hover {
    background-color: var(--primaryColor);

    & svg {
      fill: var(--primaryColor);
    }

    & span {
      color: var(--textColor);
    }
  }

  & svg {
    width: 17px;
    height: auto;
    fill: var(--sidebarColorInactive);
  }

  & span {
    width: 100px;
    left: 50px;
    color: var(--sidebarColorInactive);
    float: left;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StyledLink = styled(NavLink)`
  ${LinkStyles}
`

const StyledAnchor = styled.a`
  ${LinkStyles}
`;
const StyledArrow = styled(Arrow)`
  top: 50%;
  transform: translate(45px, calc(30px - 50vh));
  overflow: visible;
  cursor: pointer;
  transition: .2s ease-in;
  &.open {
    transform: translate(calc(var(--sideBarWidth) - 15px), calc(30px - 50vh)) rotate(-180deg);
  }
`

export default Sidebar;