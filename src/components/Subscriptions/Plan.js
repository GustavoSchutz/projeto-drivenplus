
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

const StyledPlan = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 23vh;
    border: 2px solid grey;
    border-radius: 10px;
    margin-top: 1.5rem;
`

const Price = styled.p`
    color: white;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;

`

export default function Plan({ pl }) {
    
    const navigate = useNavigate();

    function handleClickPlan() {
        navigate(`/subscriptions/${pl.id}`)
    }
    
    return (
        
        <StyledPlan onClick={handleClickPlan} >
            <img alt="plan logo" src={ pl.image }></img>
            <Price>R${pl.price}</Price>
        </StyledPlan>
    )
}