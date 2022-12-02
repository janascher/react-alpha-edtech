import { IModal } from '../../../models/imodal';
import './Modal.scss';

function Modal({ children, isOpen, toggle }: IModal) {
    return (
        <>
            {isOpen && (
                <div className="modalOverlay" onClick={toggle}>
                    <div className="modalBox" onClick={(e) => e.stopPropagation()}>
                        <div>
                            <button onClick={toggle}>X</button>
                        </div>
                        <p>{children}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
