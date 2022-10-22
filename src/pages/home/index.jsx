import styled from 'styled-components';
import Hero from './hero';

const Home = () => {
  return (
    <StyledDiv>
      <Hero />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background: var(--outContainerBackground);
`;

export default {
  element: <Home/>,
  path: '/',
  exact: true,
  isPublic: true
};
