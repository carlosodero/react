import styled from 'styled-components';

const GameGrid = styled.div`
  height: ${props => props.height || '200px'};
  background-color: ${props => props.backgroundColor || 'grey'};
  border: ${props => props.border || '2px solid black'};
`;

export default GameGrid;