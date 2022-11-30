import { IModalType } from '../../../models/imodal';
/* import ButtonModal from './Button'; */
import './Modal.scss';

function Modal({ children, isOpen, toggle }: IModalType) {
    return (
        <>
            {isOpen && (
                <div className="modalOverlay">
                    <div className="modalBox" onClick={(e) => e.stopPropagation()}>
                        <div>
                            <button onClick={toggle}>X</button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
