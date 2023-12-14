import { useContext } from "react";
import { StyledButtonQuaternary } from "../../../styles/buttons";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { addContactSchema } from "./addContactSchema";
import { Overlay, StyledModalAddContact } from "./style";
import { ParagraphFormError, TittleModal } from "../../../styles/tipography";
import { ContactsContext } from "../../../providers/ContactsContext";

import { StyledInputModal } from "./../../../styles/input";
import { StyledLabel } from "../../../styles/label";
import { StyledForm } from "../../../styles/form";

export const AddContactModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addContactSchema),
  });

  const { modalAddContactOpen, setModalAddContactOpen, userAddContact } =
    useContext(ContactsContext);

  const submit = async (formData) => {
    await userAddContact(formData);
    reset();
  };

  if (modalAddContactOpen) {
    return (
      <Overlay role="dialog">
        <StyledModalAddContact>
          <div className="header">
            <TittleModal>Cadastrar Contato</TittleModal>
            <button onClick={() => setModalAddContactOpen(false)}>X</button>
          </div>
          <StyledForm onSubmit={handleSubmit(submit)}>
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
            <StyledButtonQuaternary>
              Cadastrar Contato
            </StyledButtonQuaternary>
          </StyledForm>
        </StyledModalAddContact>
      </Overlay>
    );
  }
};
