import React, { useContext, useState } from 'react';
import '../../index.css';
import { IFormProps } from '../../models/iformprops';

import Button from '../Button';
import SimpleModal from '../Modal';
import { SForm } from './styled';
import { UserContext } from '../../contexts/user';

function Form({ children, textSubmit }: IFormProps) {
    let [isOpen, setIsOpen] = useState(false);
    const { userData, setUserData } = useContext(UserContext);
    

    async function formSubmitHandle(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const body = Object.fromEntries(formData.entries());
        setIsOpen(true);

        console.log(`Usuário: `, body); /* #TODO Deletar essa linha mais tarde */

        const res = await fetch('http://127.0.0.1:8000/account/', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(body),
        }).then((res) => res.json());

        console.log(`Res: `, res); /* #TODO Deletar essa linha mais tarde */
    }

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <SForm onSubmit={formSubmitHandle}>
                {children}
                <Button onClick={toggle}>{textSubmit}</Button>
                <SimpleModal isOpen={isOpen} toggle={toggle}>
                    Sucesso!
                </SimpleModal>
            </SForm>
        </>
    );
}

export default Form;
