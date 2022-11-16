import styled from 'styled-components';
import { Row, Col, Typography, Space, Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { Button, Container } from 'components';
import data from './data';


// react-slick bug with custom-arrows
const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
  <span {...props}>{children}</span>
);


const SETTINGS = {
  prevArrow: (
    <SlickButtonFix>
      <LeftOutlined />
    </SlickButtonFix>
  ),
  nextArrow: (
    <SlickButtonFix>
      <RightOutlined />
    </SlickButtonFix>
  )
};

export default () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 414px)'
  });

  return (
    <HeroContainer>
      <StyledContainer>
        <HeroTitle>Imóveis em Destaque</HeroTitle>
        <StyledCarousel arrows={ !isMobile ? true : false } {...SETTINGS}>
          { data.map(({title, text, price, imgSrc, alt}, index) => {
            return (
              <div key={`imoveis-destaque-${index}`}>
                <Row justify='space-around'>
                  <Col xs={0} sm={11}>
                    <Space direction="vertical">
                      <CarouselTitle>{title}</CarouselTitle>
                      <StyledText>{text}</StyledText>
                      <StyledText>{price}€</StyledText>
                    </Space>
                    <div>
                      <StyledButton
                        type="primary"
                        shape="round"
                        size="large"
                        href="/"
                      >
                        Ola
                      </StyledButton>
                    </div>
                  </Col>
                  <Col xs={24} sm={11}>
                    <StyledImg src={imgSrc} alt={alt} />
                  </Col>
                </Row>
              </div>
              )
            })}
        </StyledCarousel>
      </StyledContainer>
    </HeroContainer>
  );
};

const HeroTitle = styled.h1`
  text-align: center;
  font-family: 'Montserrat';
  color: var(--textColor);
  font-size: 5em;
  font-weight: 700;
`;

const StyledCarousel = styled(Carousel)`
  .slick-prev, .slick-next,
  .slick-prev:hover, .slick-next:hover,
  .slick-prev:focus, .slick-next:focus {
    color: var(--primaryColor);
    font-size: 25px;
    stroke-width: 40px;
    stroke: var(--primaryColor);
  }
  .slick-dots-bottom {
    bottom: -70px;
  }
  .slick-dots li.slick-active button {
    background: var(--primaryColor);
  }

  .slick-arrow {
    &:before {
      content: "";
    }
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;
const StyledText = styled(Typography.Text)`
  &&& {
    font-weight: 500;
    color: var(--textColor);
    font-family: 'Montserrat';
  }
`;

const StyledContainer = styled(Container)`
  min-height: calc(100vh - var(--menuHeight));
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
  background-color: var(--pageBackground);

  @media (max-width: 576px) {
    padding: 0px;
  }
`;
const CarouselTitle = styled(Typography.Title)`
  &&& {
    font-weight: 700;
    font-family: 'Montserrat';
    color: var(--textColor);
    font-size: 2.9rem;
    line-height: 0.7;
  }
`;
const HeroContainer = styled.div`
  min-height: calc(100vh - var(--menuHeight));
  margin-bottom: 112px;
`;

const StyledButton = styled(Button)`
  margin: 10px;
`;
