import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPlanInfo, postCardForms } from "../../services/drivenplus";
import { Title, Forms, HalfForms, Button, ButtonText } from "../../styles/componets";
import clipboardIcon from "../../assets/images/clipboard.png";
import moneyIcon from "../../assets/images/money.png";
import arrowIcon from "../../assets/images/arrow.png";
import xis from "../../assets/images/xis.png";

import PerksList from "./PerksList";



const Align = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const StyledLogo = styled.div`
    margin-top: 10vh;
    margin-bottom: 2vh;

`
const Subtitle = styled.div`
    color: white;
    width: 78vw;
    font-family: 'Roboto', sans-serif;
    font-size: .9rem;

`
const InfoDiv = styled.div`
    display: flex;
    align-items: center;

`
const Icon = styled.img`
    margin-right: .3rem;
`

const Listed = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 83vw;
    justify-content: space-between;
`
const PriceInfo = styled.p`
    color: white;
`
const Margin = styled.div`
    margin-top: 1rem;
`
const Back = styled.div`
    position: absolute;
    left: 10vw;
    top: 3vh;
`
const BackIcon = styled.img`

`
const PopUp = styled.div`
    display: ${props => props.setDisplay || "none"};
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: absolute;
    top: 33vh;
    bottom: 40vh;
    left: 16vw;
    right: 16vw;
    background-color: white;
    border-radius: 15px;
`

const PopUpText = styled.p`
    width: 70%;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;

`
const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`
const No = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #CECECE;
    height: 3rem;
    width: 5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    border-radius: 8px;
    color:white;

`
const Yes = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF4791;
    height: 3rem;
    width: 5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    border-radius: 8px;
    color:white;
`
const ButtonsText = styled.p`

`
const ClosePopUp = styled.img`
    position: fixed;
    right: 1rem;
    top: 1rem;
`

export default function PlanInfo() {
    const navigate = useNavigate();

    const [popUpDisplay, setPopUpDisplay] = useState("");

    const token = localStorage.getItem("token");

    const params = useParams();

    const id = params.planID;

    const [planInfoObj, setPlanInfoObj] = useState({});


    useEffect(() => {

        getPlanInfo(token, id).then((res) => {
            console.log("data:", res.data);
            setPlanInfoObj(res.data);
            console.log(planInfoObj);
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res);
        });

    }, []);


    const [cardName, setCardName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [securityNum, setSecurityNum] =  useState("");
    const [expirationDate, setExpirationDate] = useState("");

    const postCardObj = {};



    function handlePostCardForms(){
        postCardObj.cardName = cardName;
        postCardObj.cardNumber = cardNum;
        postCardObj.expirationDate = expirationDate;
        postCardObj.securityNumber =  Number(securityNum);
        postCardObj.membershipId = Number(id);
        console.log(postCardObj);
        setPopUpDisplay("flex");
    }

    function handlePostCardData() {
        postCardForms(postCardObj, token).then((res) => {
            console.log("data:", res.data);
            navigate("/home");
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res);
        });
    }

    const handleChangeCardName = event => {
        setCardName(event.target.value);
    }
    const handleChangeCardNum = event => {
        setCardNum(event.target.value);
    }
    const handleChangeExpirationDate = event => {
        setExpirationDate(event.target.value);
    }
    const handleChangeSecurityNum = event => {
        setSecurityNum(event.target.value);
    }

    function handleClosePopUp() {
        setPopUpDisplay("none");
    }

    return (

        <Align>
            <Link to={`/subscriptions`}>
                <Back>
                    <BackIcon alt="" src={arrowIcon}></BackIcon>
                </Back>
            </Link>
            <StyledLogo>

                <img alt="" src={planInfoObj.image} />

            </StyledLogo>

            <Title>{planInfoObj.name}</Title>
            <Margin></Margin>
            <InfoDiv>
                <img alt="icone benefícios" src={clipboardIcon}></img>
                <Subtitle>Benefícios:</Subtitle>


            </InfoDiv>
            <Margin></Margin>

            <Listed>
                {planInfoObj.perks === undefined ? <p>loading...</p> : planInfoObj.perks.map((pi, index) => {
                    return <PerksList pi={pi} index={index} />
                })}
            </Listed>
            <Margin></Margin>

            <InfoDiv>
                <Icon alt="icone preço" src={moneyIcon} />
                <Subtitle>Preço:</Subtitle>
            </InfoDiv>
            <Margin></Margin>

            <Listed>
                <PriceInfo>R$ {planInfoObj.price} cobrados mensalmente</PriceInfo>
            </Listed>
            <Margin></Margin>
            <Margin></Margin>

            <Forms placeholder="Nome impresso no cartão" onChange={handleChangeCardName} value={cardName} required />
            <Forms placeholder="Digitos do cartão" onChange={handleChangeCardNum} value={cardNum} required />
            <Row>
                <HalfForms type={"number"} minLength={3} maxLength={4} onChange={handleChangeSecurityNum} placeholder="Código de segurança" value={securityNum} required />
                <HalfForms type={"text"} placeholder="Validade" onChange={handleChangeExpirationDate} value={expirationDate} required />

            </Row>
            <Button onClick={handlePostCardForms}>
                <ButtonText>Assinar</ButtonText>
            </Button>

            <PopUp setDisplay={popUpDisplay}>
                <ClosePopUp onClick={handleClosePopUp} alt="" src={xis} />
                <PopUpText>Tem certeza que deseja assinar o plano Driven Plus (R${planInfoObj.price})?</PopUpText>
                <Buttons>
                    <No>
                        <ButtonsText onClick={handleClosePopUp}>Não</ButtonsText>
                    </No>
                    <Yes>
                        <ButtonsText onClick={handlePostCardData}>SIM</ButtonsText>
                    </Yes>
                </Buttons>
            </PopUp>
            


        </Align>

    )
}