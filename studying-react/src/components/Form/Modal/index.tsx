import { IModalType } from '../../../models/imodal';
import './Modal.scss';

function Modal({ children, isOpen, toggle }: IModalType) {
    
    return (
        <>
            {isOpen  && (
                <div className="modalOverlay" onClick={toggle}>
                    <div className="modalBox" onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
