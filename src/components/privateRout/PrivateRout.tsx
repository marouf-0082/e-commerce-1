import { Navigate, Outlet } from "react-router-dom";
import { useSignUpContextProvider } from "../../context/SignUpContext";
import toast from "react-hot-toast";

export default function PrivateRout() {
  const { isSignUp } = useSignUpContextProvider();
  !isSignUp && toast.error("Please SignUp");
  return <>{isSignUp ? <Outlet /> : <Navigate to={"/signup"} />}</>;
}
