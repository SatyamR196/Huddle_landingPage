import styled from 'styled-components';

const Box = styled.div`
  background-color: ${props => props.primary || 'gray'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.primary ? 'pink' : 'brown'};
  }
`;

Box.defaultProps = {
    primary: 'blue',
};

export default Box;