import { useContext, useEffect } from "react";
import { Overlay, StyledModalContact } from "./style";
import { ContactsContext } from "../../../providers/ContactsContext";

import { ParagraphFormError, TittleModal } from "../../../styles/tipography";
import { useForm } from "react-hook-form";
import { StyledLabel } from "../../../styles/label";
import { StyledForm } from "../../../styles/form";
import { StyledInputModal } from "./../../../styles/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactModalSchema } from "./contactModalSchema"


export const ContactModal = ({ contactSelect }) => {
  const { modalOpen, setModalOpen, editContact, removeContact } =
    useContext(ContactsContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactModalSchema)
  });

  useEffect(()=>{
    reset(contactSelect)
  }, [modalOpen])
  
  const submit = async (formData) => {
    if(formData.email==""){
      delete formData.email
    }
    await editContact(formData, contactSelect.id);
    reset();
  };

  if (modalOpen) {
    return (
      <Overlay role="dialog">
        <StyledModalContact>
          <div className="header">
            <TittleModal>Detalhes do Contato</TittleModal>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <StyledForm onSubmit={handleSubmit(submit)}>
            <div className="container__info">
            <StyledLabel>Nome</StyledLabel>
            <StyledInputModal
              type="text"
              placeholder="Digite o nome do contato..."
              {...register("name")}
            />
            <ParagraphFormError>{errors.name?.message}</ParagraphFormError>
            <StyledLabel>Email</StyledLabel>
            <StyledInputModal
              type="text"
              placeholder="Digite o email do contato..."
              {...register("email")}
            />
            <ParagraphFormError>{errors.email?.message}</ParagraphFormError>
            <StyledLabel>Telefone</StyledLabel>
            <StyledInputModal
              type="text"
              placeholder="Digite o telefone do contato..."
              {...register("telephone")}
            />
            <ParagraphFormError>{errors.telephone?.message}</ParagraphFormError>     
            </div>
            <div className="cotainer__buttons">
              <button className="submit__button" type="submit">
                Salvar alterações
              </button>
              <button
                className="delete__button"
                onClick={() => {
                  removeContact(contactSelect.id), setModalOpen(false);
                }}
              >
                Excluir
              </button>
            </div>
          </StyledForm>
        </StyledModalContact>
      </Overlay>
    );
  }
};
