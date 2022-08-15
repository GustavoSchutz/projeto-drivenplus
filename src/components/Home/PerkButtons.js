import styled from "styled-components";
import { Button, ButtonText } from "../../styles/componets";

const PerkButton = styled(Button)`
    margin-bottom: 0;
    margin-top: .5rem;
`
const LinkToRick = styled.a`

`

export default function PerkButtons({ pb }) {
    return(
        <LinkToRick href={pb.link} target="_blank">
            <PerkButton>
                <ButtonText>{pb.title}</ButtonText>
            </PerkButton>
        </LinkToRick>
    )
}