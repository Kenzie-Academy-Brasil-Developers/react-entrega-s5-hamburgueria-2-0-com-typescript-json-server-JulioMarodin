import { Toaster } from "react-hot-toast";
import Routes from "./Routes";
import GlobalStyle from "./styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes />
      <Toaster />
    </div>
  );
}

export default App;
