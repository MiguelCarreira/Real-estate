import React from 'react';
import styled from 'styled-components';

import LogoSrc from 'assets/icons/logo-blast.svg';
function Logo() {
  return (
    <StyledLogo
      src={LogoSrc}
      alt="Blast Logo"
    />
  )
}

const StyledLogo = styled.img`
  height: 60px;
  object-fit: contain;
`;

export default Logo