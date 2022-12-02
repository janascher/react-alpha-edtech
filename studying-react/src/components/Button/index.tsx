import { IButton } from '../../models/ibutton';

function Button({ children }: IButton) {

    return <button>{children}</button>;
}

export default Button;
