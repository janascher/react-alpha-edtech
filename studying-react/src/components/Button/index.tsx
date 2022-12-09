import { IButton } from '../../models/ibuttonprops';
import { SButton } from './styled';

function Button({ children }: IButton) {
    return <SButton>{children}</SButton>;
}

export default Button;
