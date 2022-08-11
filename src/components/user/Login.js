import styled from 'styled-components'
import { Container, Button, ButtonText, Logo, Forms, StyledLink } from '../../styles/componets'
import logoImg from '../../assets/images/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';




export default function Login() {
    
    const [email, setEmail] = useState("");

    const [register, setRegister] = useState("");

    const [password, setPassword] = useState("");

    const handleChangeEmail = event => { 
        setEmail(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    }

    return(
        <Container>

            <Logo>
                <img alt='' src={logoImg} />
            </Logo>
            <Forms type={"email"} placeholder="E-mail" onChange={handleChangeEmail} value={email} required />
            <Forms type={"password"} placeholder='Senha' onChange={handleChangePassword} value={password} required />

            <Button>
                <ButtonText>ENTRAR</ButtonText>
            </Button>
            <Link to={`/signup`}>
                <StyledLink>Não tem uma conta? Cadastre-se!</StyledLink>
            </Link>
            

            {/* <div className="logo">
                <img alt="logo" src={LogoImg} />
            </div>
            <div className="credentials">
            <input type={"email"} placeholder="email" onChange={handleChangeEmail} value={email} required disabled={isDisabled} />
                <div className="passwordInput">
                    <div onClick={handleClickSetPasswordInputType} className="ionIcon"><ion-icon name="eye-outline"></ion-icon></div>
                    <input type={passwordInputType} minLength="4" placeholder="senha" onChange={handleChangePassword} value={password} required disabled={isDisabled}/>
                </div>
                <div onClick={handleClickLoginButton} className="loginButton">
                    <h4 className="loginButtonText" >{buttonLoading}</h4>  
                </div>
                <Link to={`/signup`}><p className="signupLink">Não tem uma conta? Cadastre-se!</p></Link>
            </div> */}

        </Container>

    )
   
}