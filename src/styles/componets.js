import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25vh;

`;

const Logo = styled.div`
    ${'' /* margin-top: 25vh; */}
    margin-bottom: 15vh;
    
`

const Forms = styled.input`
    height: 3.5rem;
    width: 83vw;
    border: 0px;
    border-radius: 5px;
    margin-bottom: .8rem;
    text-indent: .8rem;
    font-size: .9rem;
    box-sizing: border-box;
`

const Button = styled.div`
    background-color: #FF4791;
    width: 83vw;
    height: 3rem;
    border-radius: 5px;
    margin-bottom: 2rem;
    margin-top: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonText = styled.p`

    color: white;
    font-size: .9rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;


`

const StyledLink = styled.p`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: .9rem;
    text-decoration: underline;

`
export { Container, Button, ButtonText, Logo, Forms, StyledLink }