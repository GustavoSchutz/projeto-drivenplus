import { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlansList } from "../../services/drivenplus"
import { Title } from "../../styles/componets"
import Plan from "./Plan";

const Align =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
`

export default function Subscriptions() {

    const token = localStorage.getItem("token");

    const [plansList, setPlansList] = useState([]);

    useEffect(() => {

        getPlansList(token).then((res) => {
            console.log("data:", res.data);
            setPlansList(res.data);
            console.log(plansList);
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res);
        });
    
	}, []);

    

    return (
        <Align>
            <Title>Escolha seu Plano</Title>
            {plansList.map((pl) => {
                return <Plan pl={pl} />
            })}
        </Align>
    )
}