
import { RegisterForm } from "../../components/RegisterForm.jsx"
import { ParagraphFormRegister, TittleForm } from "../../styles/tipography.js"
import { HeaderRegister } from "./../../components/RegisterForm.jsx/HeaderRegisterPage/index.jsx"
import { StyleSectionRegister } from "./style.js"

export const RegisterPage = () => {
  return (
    <StyleSectionRegister>
      <HeaderRegister />
      <div className="container">
        <TittleForm>Crie sua Conta</TittleForm>
        <ParagraphFormRegister>
          Rapido e grátis, vamos nessa!
        </ParagraphFormRegister>
      </div>
      <RegisterForm />
    </StyleSectionRegister>
  );
};
