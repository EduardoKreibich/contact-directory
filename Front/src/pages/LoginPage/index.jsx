import { LoginForm } from "../../components/LoginForm"
import { Link } from "react-router-dom"
import { StyleLogin } from "./style"
import { ParagraphFormLogin, TittleForm } from "../../styles/tipography"
import Logo from "../../assets/img/agenda.svg"


export const LoginPage = ( {setInfoUser} ) =>{

    return(
        <StyleLogin>
                <section className="containerImg">
                    <h4>Seus contatos em um click!</h4>
                    <img className="logo" src={Logo} alt="" />
                </section>
                <section className="cardLogin">
                    <TittleForm>Login</TittleForm>
                    <LoginForm setInfoUser = {setInfoUser}/>
                    <div>
                        <ParagraphFormLogin>Ainda não possui uma conta?</ParagraphFormLogin>         
                        <Link className="link" to="/register">Cadastre-se</Link>           
                    </div>
                </section>
        </StyleLogin>
    )
}
