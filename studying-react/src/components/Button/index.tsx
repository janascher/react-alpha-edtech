import { IButton } from '../../models/ibutton';
import { SButton } from './styled';

function Buttons({ children }: IButton) {
    return <SButton>{children}</SButton>;
}

export default Buttons;
