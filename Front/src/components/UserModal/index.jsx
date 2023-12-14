import { useContext } from "react";
import { StyledButtonQuaternary } from "../../styles/buttons";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Overlay, StyledModalContact } from "./style";
import { ParagraphFormError, TittleModal } from "../../styles/tipography";
import { StyledInputModal } from "./../../styles/input";

import { StyledLabel } from "../../styles/label";
import { StyledForm } from "../../styles/form";
import { userModalSchema } from "./userModalSchema";
import { UserContext } from "../../providers/UserContext";

export const EditUserModal = () => {
  const userId = localStorage.getItem("userID")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userModalSchema),
  });

  const { modalUserOpen, setModalUserOpen, editUser } =
    useContext(UserContext);

  const submit = async (formData) => {
    if(formData.email==""){
      delete formData.email
    }
    await editUser(formData, userId);
    reset();
  };

  if (modalUserOpen) {
    return (
      <Overlay role="dialog">
        <StyledModalContact>
          <div className="header">
            <TittleModal>Editar Usuário</TittleModal>
            <button onClick={() => setModalUserOpen(false)}>X</button>
          </div>
          <StyledForm onSubmit={handleSubmit(submit)}>
            <StyledLabel>Nome</StyledLabel>
              <StyledInputModal
                type="text"
                placeholder="Digite seu nome..."
                {...register("name")}
              />
              <ParagraphFormError>{errors.name?.message}</ParagraphFormError>
              <StyledLabel>Senha</StyledLabel>
              <StyledInputModal
                type="text"
                placeholder="Digite sua senha..."
                {...register("password")}
              />
              <ParagraphFormError>{errors.name?.message}</ParagraphFormError>
            <StyledLabel>Email</StyledLabel>
            <StyledInputModal
              type="text"
              placeholder="Digite seu email..."
              {...register("email")}
            />
            <ParagraphFormError>{errors.email?.message}</ParagraphFormError>
            <StyledLabel>Telefone</StyledLabel>
            <StyledInputModal
              type="text"
              placeholder="Digite seu telefone..."
              {...register("telephone")}
            />
            <ParagraphFormError>{errors.telephone?.message}</ParagraphFormError>
            <StyledButtonQuaternary>
              Salvar
            </StyledButtonQuaternary>
          </StyledForm>
        </StyledModalContact>
      </Overlay>
    );
  }
};

