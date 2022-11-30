import { useState } from 'react';

function useModal() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function toggle() {
        setIsOpen(!isOpen);
    }

    return { isOpen, toggle };
}

export default useModal;
