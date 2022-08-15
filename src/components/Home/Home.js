import { useContext } from "react"
import styled from "styled-components"
import UserContext from "../../contexts/UserContext"
import profileImage from "../../assets/images/profile.png"
import { Button, ButtonText } from "../../styles/componets";
import PerkButtons from "./PerkButtons";
import { useNavigate } from "react-router-dom";
import { deletePlan } from "../../services/drivenplus";

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HeaderLogo = styled.img`
    width: 20vw;
    margin-top: 10vw;
    margin-bottom: 10vw;
    margin-left: 10vw;
`

const HeaderProfile = styled.img`
    margin-right: 10vw;
`
const UserName = styled.p`
    color: white;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
`
const Align = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const AlignHome = styled(Align)`
    height: 70vh;
    display: flex;
    justify-content: space-between;
`
const ConfigButtons = styled(Align)`

`
const PerksLinks = styled(Align)`

`
const ConfigButton = styled(Button)`
    margin-bottom: 0;
    margin-top: .5rem;
`
const CancelButton = styled(Button)`
    margin-bottom: 0;
    margin-top: .5rem;
    background-color: #FF4747;
`



export default function Home() {

    const token = localStorage.getItem("token");

    const {userMemberStatus, setUserMemberStatus} = useContext(UserContext);

    const navigate = useNavigate();

    console.log("Home:", userMemberStatus);

    const handleClickPlans = () => {
        navigate("/subscriptions");
    };

    const handleClickCancelPlan = () => {
        deletePlan(token).then((res) => {
            console.log("delete:", res.data);
            navigate("/subscriptions")
        }).catch((res) => {
            alert(res.message);
            console.log("errorData: ", res);
        });
    };

    return (
        <>      
            <Header>
                <HeaderLogo src={userMemberStatus.membership.image} />
                <HeaderProfile src={profileImage} />
            </Header>
            <Align>
                <UserName>Olá, {userMemberStatus.name}</UserName>
            </Align>
            <AlignHome>
                <PerksLinks>
                    {userMemberStatus.membership.perks.map((pb) => {
                        return <PerkButtons pb={pb} />
                    })}
                </PerksLinks>
                <ConfigButtons>
                    <ConfigButton onClick={handleClickPlans}>
                        <ButtonText>Mudar plano</ButtonText>
                    </ConfigButton>
                    <CancelButton onClick={handleClickCancelPlan} >
                        <ButtonText>Cancelar plano</ButtonText>
                    </CancelButton>
                </ConfigButtons>
            </AlignHome>
        </>
    )
}