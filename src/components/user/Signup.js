import { Container, Button, ButtonText, Logo, Forms, StyledLink } from '../../styles/componets'
import { Link, useNavigate } from "react-router-dom";


export default function Signup(){
    return (
        <Container>
            <Forms placeholder='Nome'></Forms>
            <Forms placeholder='CPF'></Forms>
            <Forms placeholder='E-mail'></Forms>
            <Forms placeholder='Senha'></Forms>
            <Button>
                <ButtonText>CADASTRAR</ButtonText>
            </Button>
            <Link to={`/`}>
                <StyledLink>Já possuí uma conta? Entre</StyledLink>
            </Link>
        </Container>
    )
}