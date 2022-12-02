import React, { useState } from 'react';
import Button from '../Button';
import Modal from './Modal';

function Form() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassWord, setUserPassWord] = useState('');

    let [isOpen, setIsOpen] = useState(false);

    async function submitUsers(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const body = Object.fromEntries(formData.entries());
        setIsOpen(true);

        const res = await fetch('http://127.0.0.1:8000/account/', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(body),
        }).then((res) => res.json());

        console.log(`Body: `, body);
        console.log(`Res: `, res);
    }

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <form onSubmit={submitUsers}>
                <h1>Faça seu login</h1>
                <div>
                    <label htmlFor="userName">Nome</label>
                    <input
                        name="userName"
                        id="userName"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        pattern="^[A-Z][a-z]{1,}([A-Z][a-z]{1,}){0,}$"
                        placeholder="Digite seu nome"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userEmail">E-mail</label>
                    <input
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="Digite seu e-mail"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userPassWord">Senha</label>
                    <input
                        type="text"
                        name="userPassWord"
                        id="userPassWord"
                        value={userPassWord}
                        onChange={(e) => setUserPassWord(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <Button onClick={toggle}>Cadastrar</Button>
                <Modal isOpen={isOpen} toggle={toggle}>
                    Login efetuado!
                </Modal>
            </form>
        </>
    );
}

export default Form;
