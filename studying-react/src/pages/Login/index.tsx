import { SInput } from './styled';
import * as M from '@mui/material';
import '../../index.css';
import UserProvider from '../../contexts/user';
import Form from '../../components/Form';

function LoginPage() {
    return (
        <M.Container
            sx={{
                background: '#e0e0e0',
                width: '380px',
                padding: '10px',
                marginTop: '50px',
                borderRadius: '10px',
            }}>
            <UserProvider>
                <Form textSubmit="Cadastrar">
                    <M.Typography
                        variant="h5"
                        sx={{
                            color: 'inherit',
                            paddingBottom: '5px',
                        }}>
                        Faça seu login
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
                            type="password"
                            name="userPassWord"
                            id="userPassWord"
                            placeholder="Senha"
                            required
                        />
                    </div>
                </Form>
            </UserProvider>
        </M.Container>
    );
}

export default LoginPage;
