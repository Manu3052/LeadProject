import { Route, Routes } from "react-router-dom";
import { RegisterContainer } from "./pages/Register/RegisterContainer";
import { LoginContainer } from "./pages/Login/LoginContainer";
import { TokenNotFound } from "./pages/Error/TokenNotFound";

const MainApp = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<LoginContainer />}></Route>
          <Route path="/Cadastro" element={<RegisterContainer />}></Route>
          {/* <Route path="/Leads" element={<LeadsComponent />}></Route> */}
          <Route path="/Error" element={<TokenNotFound/>}></Route>
        </Routes>
    </>
  );
}

export default MainApp;
