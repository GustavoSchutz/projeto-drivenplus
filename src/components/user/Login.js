import styled from 'styled-components'
import { Container, Button, ButtonText, Logo, Forms, StyledLink } from '../../styles/componets'
import logoImg from '../../assets/images/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { postLogin } from '../../services/drivenplus';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';






export default function Login() {

    const {userMemberStatus, setUserMemberStatus} = useContext(UserContext);

    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const userBuild = {};

    const handleChangeEmail = event => { 
        setEmail(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    }

    function handleClickLogin() {
        userBuild.email = email;
        userBuild.password = password;
        console.log("userBuild: ", userBuild);

        postLogin(userBuild).then((res) => {
            console.log("data:", res.data);
            setUserMemberStatus(res.data);
            localStorage.setItem("token", res.data.token);
            if (res.data.membership === null) {
                navigate('/subscriptions');
            } else {
                navigate('/home');
            }
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res)
        })
    }

    return(
        <Container>

            <Logo>
                <img alt='' src={logoImg} />
            </Logo>
            <Forms type={"email"} placeholder="E-mail" onChange={handleChangeEmail} value={email} required />
            <Forms type={"password"} placeholder='Senha' onChange={handleChangePassword} value={password} required />

            <Button>
                <ButtonText onClick={handleClickLogin}>ENTRAR</ButtonText>
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