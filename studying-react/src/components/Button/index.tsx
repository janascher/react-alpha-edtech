import { IButtonProps } from '../../models/ibuttonprops';

function Button({ children }: IButtonProps) {
    return <button>{children}</button>;
}

export default Button;
