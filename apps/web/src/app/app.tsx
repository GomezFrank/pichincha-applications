import styled from 'styled-components';

import NxWelcome from './nx-welcome';
import { Button } from '@pichicha-applications/components-ui';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Button name='Contnuar' onButtonPress={() => {}} />      
      <NxWelcome title="web" />
    </StyledApp>
  );
}

export default App;
