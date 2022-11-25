import Button from "../Button";

function Form() {
    return (
        <form>
            <h1>Bem-vindo&#40;a&#41; de volta!</h1>
            <p>Faça seu cadastro, acesse sua conta ou atualize seus dados.</p>
            <div>
                <label htmlFor="userName">Nome</label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Digite seu nome"
                />
            </div>
            <div>
                <label htmlFor="userEmail">E-mail</label>
                <input
                    type="text"
                    name="userEmail"
                    id="userEmail"
                    placeholder="Digite seu e-mail"
                />
            </div>
            <div>
                <label htmlFor="userPassWord">Senha</label>
                <input
                    type="text"
                    name="userPassWord"
                    id="userPassWord"
                    placeholder="Digite sua senha"
                />
            </div>
            <Button>
                Cadastrar
            </Button>
            <Button>
                Acessar
            </Button>
            <Button>
                Atualizar
            </Button>
        </form>
    );
}

export default Form;
