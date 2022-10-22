import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { FourOhFour } from 'components';
import pages from 'pages';

const Content = () =>
  <ContentContainer>
    <Routes>
      {pages.map((props) => <Route { ...props } key={props.path} />)}
      {/* <FourOhFour /> */}
    </Routes>
  </ContentContainer>
;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding-bottom: 100px;
  border-bottom: 1px solid var(--borderColor);
`;

Content.propTypes = {
  path: PropTypes.string
};

export default Content;