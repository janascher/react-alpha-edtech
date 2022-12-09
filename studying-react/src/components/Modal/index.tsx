/* import React, { useState } from 'react'; */
import { IModal } from '../../models/imodalprops';
import { SDiv, SModalBox, SModalOverlay } from './styled';

function SimpleModal({ children, isOpen, toggle }: IModal) {
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
