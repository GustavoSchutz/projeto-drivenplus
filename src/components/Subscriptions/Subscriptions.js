import { useState, useEffect } from "react";
import { getPlansList } from "../../services/drivenplus"
import { Title } from "../../styles/componets"
import Plan from "./Plan";


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
        <>
            <Title>Escolha seu Plano</Title>
            {plansList.map((pl) => {
                return <Plan key={pl.id} pl={pl} />
            })}
        </>
    )
}