import { RoutesMain } from "./routes/RoutsMain";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Reset } from "./styles/reset";
import { GlobalStyle } from "./styles/global";
import { StyledApp } from "./styles/app";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { DotLoader } from "react-spinners";

const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <StyledApp>
      <Reset />
      <GlobalStyle />
      <ToastContainer theme="dark" />
      {loading ? <DotLoader color="#FF427F" /> : <RoutesMain />}
    </StyledApp>
  );
}

export default App;