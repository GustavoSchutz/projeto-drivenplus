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
    
    
    return (

        <StyledPlan key={pl.id}>
            <img alt="plan logo" src={ pl.image }></img>
            <Price>R${pl.price}</Price>
        </StyledPlan>
    )
}