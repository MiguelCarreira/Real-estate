import styled from 'styled-components';
import { Row, Col, Divider } from 'antd';
import PLDDark from 'img/icons/logo-blast.svg';


const Footer = () => {
  return (
    <StyledFooter>
      <TopRow>
        <LogoCol xs={24} sm={24} md={24} lg={2} xl={2}>
          <StyledLogo />
        </LogoCol>
      </TopRow>
      <BottomRow>
        <CopyrightCol xs={24} sm={24} md={24} lg={6} xl={6}>
          @2022 Blast
        </CopyrightCol>
        <LinksCol xs={24} sm={24} md={24} lg={12} xl={12}>
          <a href="#">Legal</a>
          <StyleDivider type="vertical" />
          <a href="#">Terms & Conditions</a>
          <StyleDivider type="vertical" />
          <a href="#">Privacy Policy</a>
          <StyleDivider type="vertical" />
          <a href="#">Cookie Policy</a>
        </LinksCol>
        <PLDCol xs={24} sm={24} md={24} lg={6} xl={6}>
          <div>Powered By</div>
          <StyledLogo />
        </PLDCol>
      </BottomRow>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  height: auto;
  padding: 30px 25px;
  color: var(--textColor);
  font-family: 'Montserrat';
  margin: auto;
  font-weight: 400;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 1024px) {
    height: auto;
  }
`;
const TopRow = styled(Row)`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: center;
    padding-bottom: 20px;

    & > div {
      margin-top: 20px;
      align-items: center;
    }
  }
`;
const LogoCol = styled(Col)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
const StyledLogo = styled(PLDDark)`
  width: 142px;
  height: auto;
`;
const BottomRow = styled(Row)`
  margin-top: 33px;
  border-top: 1px solid var(--borderColor);
  padding-top: 38px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    margin: 0;
    padding: 0;

    & > div {
      margin-top: 20px;
    }
  }
`;
const CopyrightCol = styled(Col)`
  font-size: 13px;
  color: var(--grayColor);

  @media (max-width: 1024px) {
    text-align: center;
  }
`;
const LinksCol = styled(Col)`
  display: flex;
  justify-content: center;
  font-size: 13px;

  & a {
    color: var(--grayColor);
    transition: 0.5s;

    @media (max-width: 1024px) {
      margin-bottom: 20px;
      &:after {
        display: none;
      }
    }

    &:last-of-type {
      &:after {
        display: none;
      }
    }

    &:hover {
      color: var(--orangeColor);
    }
  }
`;
const PLDCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 13px;
  color: var(--grayColor);

  & svg {
    width: 80px;
    height: auto;
    margin-left: 10px;
    color: var(--grayColor);
  }

  & div {
    margin-bottom: -3px;
  }
`;

const StyleDivider = styled(Divider)`
  background-color: var(--grayColor);
  margin-top: 5px;
`;

export default Footer;
