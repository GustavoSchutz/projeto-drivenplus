import { Container, Button, ButtonText, Logo, Forms, StyledLink } from '../../styles/componets'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { postSignup } from '../../services/drivenplus';



export default function Signup() {

    const navigate = useNavigate();

    const registerBuild = {};

    const [cpf, setCpf] = useState("");

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleChangeCpf = event => {
        setCpf(event.target.value);
    };

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
    };

    function handleClickSignUpButton() {

        registerBuild.email = email;
        registerBuild.name = name;
        registerBuild.cpf = cpf;
        registerBuild.password = password;

        console.log("registerBuild: ", registerBuild);

        postSignup(registerBuild).then((res) => {
            console.log("data:", res.data);
            navigate('/');
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res)
        })


}

return (
    <Container>
        <Forms type={"text"} placeholder='Nome' onChange={handleChangeName} value={name} required ></Forms>
        <Forms type={"text"} placeholder='CPF' onChange={handleChangeCpf} value={cpf} required ></Forms>
        <Forms type={"email"} placeholder="E-mail" onChange={handleChangeEmail} value={email} required />
        <Forms type={"password"} placeholder='Senha' onChange={handleChangePassword} value={password} required />
        <Button onClick={handleClickSignUpButton}>
            <ButtonText>CADASTRAR</ButtonText>
        </Button>
        <Link to={`/`}>
            <StyledLink>Já possuí uma conta? Entre</StyledLink>
        </Link>
    </Container>
)
}