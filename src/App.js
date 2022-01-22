import { UserTokenProvider } from "context/userToken";
import MainRouter from "routes";
import "./App.css";

function App() {
  return (
    <UserTokenProvider>
      <MainRouter />
    </UserTokenProvider>
  );
}

export default App;
