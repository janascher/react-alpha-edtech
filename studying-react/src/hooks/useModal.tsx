import { useState } from 'react';

function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    /* const [modalOpen, setModalOpen] = useState(false); */

    function toggle() {
        console.log(' IF modal');
        setIsOpen(!isOpen);
    }

    /*  function toggle() {
            console.log(' IF modal');
            setModalOpen(!modalOpen);
    } */

    /* const toggle = () => {
        console.log(' IF modal');
        setIsOpen(!isOpen);
    }; */

    return { isOpen, toggle };
}

export default useModal;
