import styled from 'styled-components';
import RealEstate from 'assets/icons/real-estate.svg';
import Services from 'assets/icons/services.svg';
import References from 'assets/icons/references.svg';
import Ecosystem from 'assets/icons/ecosystem.svg';
import Partners from 'assets/icons/partners.svg';
import Configurations from 'assets/icons/configurations.svg';

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
    page: 'Geral',
    slug: `/definicoes`,
    icon: <StyledImg src={Configurations} alt="Definições" />
  }
]

