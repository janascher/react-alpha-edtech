import React, { useState } from 'react';
import { SForm, SInput } from '../Form/styled';
import * as M from '@mui/material';
import * as IM from '@mui/icons-material';
import '../../index.css';
import Buttons from '../Button';
import SimpleModal from '../Modal';

function Form() {
    let [isOpen, setIsOpen] = useState(false);

    console.log(`From: `, isOpen);

    async function submitUsers(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const body = Object.fromEntries(formData.entries());
        setIsOpen(true);

        console.log(`Um usuário foi criado: `, body);

        const res = await fetch('http://127.0.0.1:8000/account/', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(body),
        }).then((res) => res.json());

        console.log(`Res: `, res);
    }

    function toggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <M.AppBar position="static">
                <M.Toolbar sx={{ background: '#8f6aae' }}>
                    <IM.LocalFloristRounded sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <M.Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 3,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}>
                        LOGO
                    </M.Typography>
                    <IM.LocalFloristRounded sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <M.Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}>
                        LOGO
                    </M.Typography>
                    <M.IconButton
                        size="large"
                        edge="end"
                        aria-label="cadastro do usuário"
                        color="inherit"
                        sx={{ mr: 3 }}>
                        <IM.AccountCircle />
                    </M.IconButton>
                </M.Toolbar>
            </M.AppBar>
            <M.Container
                sx={{
                    background: '#e0e0e0',
                    width: '380px',
                    padding: '10px',
                    marginTop: '50px',
                    borderRadius: '10px',
                }}>
                {/* ============== FORMULÁRIO ==================== */}
                <SForm onSubmit={submitUsers}>
                    <M.Typography
                        variant="h4"
                        sx={{
                            color: 'inherit',
                            paddingBottom: '5px',
                        }}>
                        Cadastro
                    </M.Typography>
                    <div>
                        <SInput
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Nome"
                            required
                        />
                    </div>
                    <div>
                        <SInput
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <SInput
                            type="password"
                            name="userPassWord"
                            id="userPassWord"
                            placeholder="Senha"
                            required
                        />
                    </div>
                    <Buttons onClick={toggle}>Cadastrar</Buttons>
                    <SimpleModal isOpen={isOpen} toggle={toggle}>
                        Cadastro efetuado com sucesso!
                    </SimpleModal>
                </SForm>
            </M.Container>
        </>
    );
}

export default Form;
