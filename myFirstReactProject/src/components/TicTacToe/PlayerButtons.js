import styled from 'styled-components';

const PlayerButton = styled.button`
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '150px'};
  background-color: ${props => props.type === 'square' ? 'red' : 'blue'};
  border-radius: ${props => props.type === 'square' ? '0px' : '100px'};
  border: ${props => props.border || '2px solid black'};
`;

export default PlayerButton;
