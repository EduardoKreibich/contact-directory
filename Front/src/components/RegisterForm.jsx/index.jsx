import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "./createUserSchema";

import { StyledFormRegister } from "./style";

import { StyledInput } from "./../../styles/input";
import { StyledLabel } from "../../styles/label";
import { StyledButtonPrimary } from "../../styles/buttons";

import { useContext } from "react";
import { ParagraphFormError } from "../../styles/tipography";
import { UserContext } from "../../providers/UserContext";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserSchema),
  });

  const { userRegister, registering } = useContext(UserContext);

  const submit = async (formData) => {
    await userRegister(formData);
    reset();
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submit)}>
      <StyledLabel>Name</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Digite seu nome..."
        {...register("name")}
      />
      <ParagraphFormError>{errors.name?.message}</ParagraphFormError>
      <StyledLabel>Email</StyledLabel>
      <StyledInput
        type="email"
        placeholder="Digite seu email..."
        {...register("email")}
      />
      <ParagraphFormError>{errors.email?.message}</ParagraphFormError>
      <StyledLabel>Senha</StyledLabel>
      <StyledInput
        type="password"
        placeholder="Digite sua senha..."
        {...register("password")}
      />
      <ParagraphFormError>{errors.password?.message}</ParagraphFormError>
      <StyledLabel>Confirmar Senha</StyledLabel>
      <StyledInput
        type="password"
        placeholder="Digite novamente sua senha..."
        {...register("confirmPassword")}
      />
      <ParagraphFormError>{errors.bio?.message}</ParagraphFormError>
      <StyledLabel>Telephone</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Digite um telephone para contato..."
        {...register("telephone")}
      />
      <StyledButtonPrimary>
        {registering ? "Criando cadastro..." : "Cadastrar"}
      </StyledButtonPrimary>
    </StyledFormRegister>
  );
};

