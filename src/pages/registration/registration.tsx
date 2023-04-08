import { Link } from "react-router-dom";
import { ButtonLine } from "../../App/components/crutches-for-layout";
import { InputField } from "../../App/components/input.component";
import { TextForComponents } from "../../App/components/text-for.component";
import { Title } from "../../App/components/title.component";
import { RegistartionButton, RegistartionForm } from "./registration.style"
import { FancyButton } from "../../App/components/button.component";



const RegistrationPage = () => {
    return (
        <RegistartionForm method="get" id="Form1">
            <Title>Registration page!</Title>
            <TextForComponents>
                Your First name
            </TextForComponents>
            <InputField type="text" />
            <TextForComponents>
                Your Last name
            </TextForComponents>
            <InputField type="text" />
            <TextForComponents>
                Email
            </TextForComponents>
            <InputField type="email"/>
            <TextForComponents>
                Password
            </TextForComponents>
            <InputField type="password"/>
            <ButtonLine>
            <RegistartionButton type="submit" value="Finish registration!" />
            <Link to="/">
                <FancyButton>
                    Back
                </FancyButton>
            </Link>
            </ButtonLine>
        </RegistartionForm>
    )
}

export default RegistrationPage;