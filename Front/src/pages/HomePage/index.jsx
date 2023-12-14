import {
    ParagraphFormRegister,
    TittleForm,
  } from "../../styles/tipography";
  
  import { HeaderHome } from "./../../components/HeaderHome/index";
  import { StyledContainer } from "./style";
  
  import { useContext } from "react";
  import { UserContext } from "../../providers/UserContext";
  import { CardHome } from "../../components/Home/CardHome";
  import { ContactModal } from "../../components/Home/ContactModal";
  import { AddContactModal } from "../../components/Home/AddContactModal";
  import { ContactsContext } from "../../providers/ContactsContext";
  import { useState } from "react";
  import { StyledButtonTertiary } from "../../styles/buttons";
import { EditUserModal } from "../../components/UserModal";
  
  export const HomePage = () => {
    const { infoUser, setInfoUser } = useContext(UserContext);
    const { setModalAddContactOpen } = useContext(ContactsContext);
    const { setModalUserOpen } = useContext(UserContext)
    const [contactSelect, setContactSelect] = useState(null);
  
    return (
      <StyledContainer>
        <div className="container__home">
          <HeaderHome setInfoUser={setInfoUser} />
        </div>
        <div className="container__home">
          <div className="user__information">
            <TittleForm>Olá, {infoUser?.name}</TittleForm>
            <ParagraphFormRegister>
              {infoUser?.course_module}
            </ParagraphFormRegister>
            <StyledButtonTertiary
                onClick={() => {
                setModalUserOpen(true)
                }}
                >
              Editar Usuário
            </StyledButtonTertiary>
          </div>
        </div>
        <section className="container__contact">
          <div className="add__contact">
            <h4 className="list_contact">Lista de Contatos</h4>
            <StyledButtonTertiary
              onClick={() => {
                setModalAddContactOpen(true);
              }}
            >
              Adicionar Contato
            </StyledButtonTertiary>
          </div>
          <section className="card__list">
            <CardHome setContactSelect={setContactSelect} contactSelect={contactSelect} />
            <ContactModal setContactSelect={setContactSelect} contactSelect={contactSelect} />
            <AddContactModal />
            <EditUserModal/>
          </section>
        </section>
      </StyledContainer>
    );
  };
  