import { Button } from 'antd';
import styled from 'styled-components';

export default styled(Button)`
  &&& {
    border-radius: 5px;
    padding: 0 20px;
    font-weight: 500;
    font-family: 'Montserrat';
    height: 40px;
    background: var(--componentColor);
    color: var(--textColor);
    border-color: var(--borderColor);
    & svg {
      stroke: var(--textColor);
      stroke-width: 3;
    }
    &:hover {
      background-color: var(--primaryColor);
      color: var(--textColor);
      & svg {
        fill: var(--textColor);
      }
    }
    &.ant-btn-primary {
      background-color: var(--primaryColor);
    }
  }
`;