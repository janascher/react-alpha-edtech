/* import React, { useState } from 'react'; */
import useModal from '../../../../hooks/useModal';

function ButtonModal() {
    const { toggle } = useModal();

    return <button onClick={toggle}>X</button>;
}

export default ButtonModal;
