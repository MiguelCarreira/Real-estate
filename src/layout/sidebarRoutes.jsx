import styled from 'styled-components';
import RealEstate from 'assets/icons/real-estate.svg';
import Services from 'assets/icons/services.svg';
import References from 'assets/icons/references.svg';
import Configurations from 'assets/icons/configurations.svg';
import Ecosystem from 'assets/icons/ecosystem.svg';
import Partners from 'assets/icons/partners.svg';
import Facebook from 'assets/icons/facebook.svg';
import Instagram from 'assets/icons/instagram.svg';
import Twitter from 'assets/icons/twitter.svg';
import Youtube from 'assets/icons/youtube.svg';

const StyledImg = styled.img`
  width: 35px;
  height: 35px;
`;

export const top = [
  {
    page: 'Imobiliário',
    slug: '/',
    icon: <StyledImg src={RealEstate} alt="Imoveis" />
  },
  {
    page: 'Serviços',
    slug: '/servicos',
    icon: <StyledImg src={Services} alt="Serviços" />
  },
  {
    page: 'Referências',
    slug: '/referencias',
    icon: <StyledImg src={References} alt="Referências" />
  },
  {
    page: 'Ecossistema',
    slug: '/ecossistema',
    icon: <StyledImg src={Ecosystem} alt="Ecossistema" />
  },
  {
    page: 'Parceiros',
    slug: '/parceiros',
    icon: <StyledImg src={Partners} alt="Parceiros" />
  }
]

export const bottom = [
  {
    page: 'Facebook',
    pathname: `https://www.facebook.com/ecoblast.pt`,
    icon: <StyledImg src={Facebook} alt="Facebook" />
  },
  {
    page: 'Instagram',
    pathname: `https://www.instagram.com/ecoblast.pt/`,
    icon: <StyledImg src={Instagram} alt="Instagram" />
  },
  {
    page: 'Twitter',
    pathname: `https://twitter.com/Ecoblastpt`,
    icon: <StyledImg src={Twitter} alt="Twitter" />
  },
  {
    page: 'Youtube',
    pathname: `https://www.youtube.com/channel/UCfieu15FLyobQEnVbQXXdkg`,
    icon: <StyledImg src={Youtube} alt="Youtube" />
  },
  {
    page: 'Geral',
    slug: `/definicoes`,
    icon: <StyledImg src={Configurations} alt="Definições" />
  }
]

export const footerMobileItems = [
  {
    page: 'Facebook',
    pathname: `https://www.facebook.com/ecoblast.pt`,
    icon: <StyledImg src={Facebook} alt="Facebook" />
  },
  {
    page: 'Instagram',
    pathname: `https://www.instagram.com/ecoblast.pt/`,
    icon: <StyledImg src={Instagram} alt="Instagram" />
  },
  {
    page: 'Twitter',
    pathname: `https://twitter.com/Ecoblastpt`,
    icon: <StyledImg src={Twitter} alt="Twitter" />
  },
  {
    page: 'Youtube',
    pathname: `https://www.youtube.com/channel/UCfieu15FLyobQEnVbQXXdkg`,
    icon: <StyledImg src={Youtube} alt="Youtube" />
  },
];


export const mobileMenuItems = [
  { 
    key: 'whitepaper',
    label: 'Whitepaper'
  },
  { 
    key: 'newsletter',
    label: 'Newsletter'
  },
  { 
    key: 'servicos',
    label: 'Serviços',
    icon: <StyledImg src={Services} alt="Serviços" />
  },
  { 
    key: 'referencias',
    label: 'Referências',
    icon: <StyledImg src={References} alt="Referências" />
  },
  { 
    key: 'ecossistema',
    label: 'Ecossistema',
    icon: <StyledImg src={Ecosystem} alt="Ecossistema" />
  },
  { 
    key: 'parceiros',
    label: 'Parceiros',
    icon: <StyledImg src={Partners} alt="Parceiros" />
  },
  { 
    key: 'definicoes',
    label: 'Definições',
    icon: <StyledImg src={Configurations} alt="Definições" />
  }
];