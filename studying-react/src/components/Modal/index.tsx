/* import React, { useState } from 'react'; */
import { IModal } from '../../models/imodal';
import { SDiv, SModalBox, SModalOverlay } from './styled';

function SimpleModal({ children, isOpen, toggle }: IModal) {
    console.log('Toggle ', isOpen);
    return (
        <>
            {isOpen && (
                <SModalOverlay onClick={toggle}>
                    <SModalBox onClick={(e) => e.stopPropagation()}>
                        <SDiv>
                            <div>
                                <button onClick={toggle}>X</button>
                            </div>
                            <p>{children}</p>
                        </SDiv>
                    </SModalBox>
                </SModalOverlay>
            )}
        </>
    );
}

export default SimpleModal;
