import { Link } from "react-router-dom";
import { StyledHeaderLogo } from "./style";

export const HeaderRegister = () => {
  return (
    <StyledHeaderLogo>
      <Link className="back" to="/">
        Voltar
      </Link>
    </StyledHeaderLogo>
  );
};

