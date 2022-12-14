import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Affix, Menu, Input } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

import history from 'utils/history';
import LogoSrc from 'assets/icons/logo-blast.svg';

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 25,
      color: '#f58c1f',
      stroke: "#f58c1f",
      strokeWidth: "50",
    }}
  />
);

const menuItems = [
  { key: 'whitepaper', label: 'Whitepaper' },
  { key: 'newsletter', label: 'Newsletter' }
];

const mobileMenuItems = [
  { key: 'whitepaper', label: 'Whitepaper' },
  { key: 'newsletter', label: 'Newsletter' },
  { key: 'servicos', label: 'Serviços' },
  { key: 'referencias', label: 'Referências' },
  { key: 'ecossistema', label: 'Ecossistema' },
  { key: 'parceiros', label: 'Parceiros' },
  { key: 'definicoes', label: 'Definições' }

]

const onSearch = (value) => console.log(value);

const Header = () => {

  const isMobile = useMediaQuery({
    query: '(max-width: 414px)'
  })

  const onSectionClicked = (key) => {
    if (key === 'blog') history.push('/blog/posts')
    //if (key === 'login') return;
    else throw Error('No menu item matches.')
  };

  return (
    <StyledAffix>
      <StyledDiv>
        <Link to="/">
          <StyledLogo
            src={LogoSrc}
            alt="logo"
          />
        </Link>
        <StyledSearch
          placeholder=""
          size="small"
          suffix={suffix}
          onPressEnter={onSearch}
        />
        <StyledMenu
          mode="horizontal"
          selectable={false}
          overflowedIndicator={<StyledMenuOutlined />}
          items={isMobile ? mobileMenuItems : menuItems}
          onClick={({ key }) => onSectionClicked(key)}
        />
      </StyledDiv>
    </StyledAffix>
  );
};

const StyledMenuOutlined = styled(MenuOutlined)`
  color: var(--primaryColor);
  vertical-align: middle;
  
  && {
    font-size: 26px;
  }
`;

const StyledSearch = styled(Input)`
  width: 20%;
  border-radius: 50px;
  margin: 12px;
  && > input {
    border-radius: 50px;
    padding: 0 5px;
  }

  @media (max-width: 415px) {
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  border-bottom: 1px solid var(--borderColor);
`;
const StyledLogo = styled.img`
  height: 60px;
  object-fit: contain;
`;
const StyledMenu = styled(Menu)`
  justify-content: center;
  &.ant-menu,
  .ant-menu-sub {
    width: 333px;
    background: transparent;
    border-bottom: 1px solid transparent;
    line-height: var(--menuHeight);
    color: white;
    font-family: 'Montserrat';
    font-weight: 300;
    letter-spacing: 0.5px;
    align-items: center;

    @media (max-width: 415px) {
      width: 50px;
    }
  }
  &.ant-menu .ant-menu-item > span > a {
    color: var(--textColor);
    font-weight: 300;
    &:hover {
      color: #ff8abd;
    }
  }
  &.ant-menu-title-content {
    color: var(--textColor);
  }
  .ant-menu-submenu-open .ant-menu-submenu-title {
    color: #ff8abd;
  }
  &.ant-menu-horizontal > .ant-menu-item:hover:after {
    border-bottom: 2px solid var(--primaryColor);
  }
  &.ant-menu-horizontal > .ant-menu-item:hover > span {
    color: var(--linkColor);
  }
  &.ant-menu .ant-menu-item-selected,
  .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected,
  &.ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
    background: transparent;
  }
  &.ant-menu .ant-menu-submenu:nth-child(6) > div > span > span {
    filter: brightness(1.2);
  }
`;
const StyledAffix = styled(Affix)`
  z-index: 2;
  width: 100%;
  background: var(--pageBackground);
  & > div:nth-child(2) {
    background-color: var(--pageBackground);
    transition: background-color 300ms;
  }
`;
export default Header;
