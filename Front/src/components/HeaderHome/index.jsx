import { StyleHeader } from "./style";
import { StyledButtonTertiary } from "../../styles/buttons";

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const HeaderHome = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <StyleHeader>
      <StyledButtonTertiary onClick={() => userLogout()} to="/" >
        Sair
      </StyledButtonTertiary>
    </StyleHeader>
  );
};