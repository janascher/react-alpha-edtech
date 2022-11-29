import { IButtonType } from '../../models/ibutton';
/* import Modal from '../Form/Modal'; */
import useModal from '../../hooks/useModal';

function Button({ children }: IButtonType) {
    const { toggle } = useModal();

    return <button onClick={toggle}>{children}</button>;
}

/* function Button({ children }: IButtonType) {
    const { isOpen, toggle } = useModal();

    return (
        <>
            <button onClick={toggle}>{children}</button>
            <Modal isOpen={isOpen} toggle={toggle}>Login efetuado!</Modal>
        </>
    );
} */

export default Button;
