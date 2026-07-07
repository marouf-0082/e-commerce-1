import { Navigate, Outlet } from "react-router-dom";
import { useSignUpContextProvider } from "../../context/SignUpContext";

export default function PrivateRout() {
  const { isSignUp } = useSignUpContextProvider();
  !isSignUp && alert("Please SignUp");
  return <>{isSignUp ? <Outlet /> : <Navigate to={"/signup"} />}</>;
}
