import styled from "styled-components"

const List = styled.div`
    display: flex;
    flex-direction: column;
`
const Item = styled.p`
    color: white;
    font-size: .8rem;
    font-family: 'Roboto', sans-serif;

`

export default function PerksList({ pi, index }) {

    return (

        <List>

            <Item>{index + 1}. { pi.title }</Item>
            
        </List>

    )
}