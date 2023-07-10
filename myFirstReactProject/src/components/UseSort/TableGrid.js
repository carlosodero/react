import styled from 'styled-components';

const TableGrid = styled.div`
  height: ${props => props.height || '30px'};
  background-color: ${props => props.backgroundColor || 'grey'};
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'space-evenly'};
  align-items: ${props => props.alignItems || 'center'};
`;

export default TableGrid;
