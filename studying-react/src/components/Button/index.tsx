import { IButtonType } from '../../models/ibutton';
import useModal from '../../hooks/useModal';
import Modal from '../Form/Modal';

function Button({ children }: IButtonType) {

    const { isOpen, toggle } = useModal();

    return (
        <>
            <button onClick={toggle}>{children}</button>
            <Modal isOpen={isOpen} toggle={toggle}>
                Login efetuado!
            </Modal>
        </>
    );
}

export default Button;
