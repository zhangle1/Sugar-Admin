import styled from 'styled-components';
import ColorPicker from '../widgets/colorToggle';

const ToolbarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1rem;
  right: 0.5rem;
  border-radius: 1.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: hsl(0 0% 100%);
`;

const Toolbar = (props: any) => {

    return <ToolbarContainer>
        <ColorPicker></ColorPicker>
    </ToolbarContainer>

};

export default Toolbar;
