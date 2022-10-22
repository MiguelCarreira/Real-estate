import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import './App.scss';
import history from 'utils/history'
import Header from 'layout/Header';
import Content from 'layout/Content';
import ScrollToTop from 'fragments/ScrollToTop';
import Sidebar from 'layout/Sidebar';

const App = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 414px)'
  });

  document.body.classList = `body theme-blast`;
  return (
      <BrowserRouter history={history}>
        <ScrollToTop />
        <Header />
        <PageContainer>
          { !isMobile && <Sidebar /> }
          <Content />
        </PageContainer>
      </BrowserRouter>
  )
}

const PageContainer = styled.div`
  display: flex;
  background: var(--outContainerBackground);

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default App
