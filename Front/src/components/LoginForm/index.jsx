import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";

import { StyledForm } from "./style";
import { StyledInput } from "../../styles/input";
import { StyledLabel } from "../../styles/label";
import { StyledButtonPrimary } from "../../styles/buttons";

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

import { ParagraphFormError } from "../../styles/tipography";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { userLogin, enter } = useContext(UserContext);

  const submit = async (formData) => {
    await userLogin(formData);
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)}>
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
        <StyledButtonPrimary>
          {enter ? "Entrando..." : "Entrar"}
        </StyledButtonPrimary>
      </StyledForm>
    </>
  );
};
