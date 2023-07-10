import styled from 'styled-components';

const Headers = styled.div`
  height: ${props => props.height || '40px'};
  width: ${props => props.width || '100%'};
  background-color: ${props => props.backgroundColor || 'grey'};
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'space-around'};
  align-items: ${props => props.alignItems || 'center'};
  border-top-left-radius: ${props => props.borderTopLeftRadius || '8px 8px'};
  border-top-right-radius: ${props => props.borderTopRightRadius || '8px 8px'};
  font-weight: ${props => props.fontWeight || 'bold'};
`;

export default Headers;