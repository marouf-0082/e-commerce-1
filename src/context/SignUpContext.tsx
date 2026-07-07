import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

interface IFormData {
  fullname: string;
  username: string;
  email: string;
  password: number;
  confirmpassword: number;
  phone?: number;
}

interface ISignUpProvider {
  children: React.ReactNode;
}

interface ISignUpContext {
  data: IFormData | null;
  handleSignUp: (data: IFormData) => void;
  handleSignOut: () => void;
  isSignUp: boolean;
}

const SignUpContext = createContext<ISignUpContext | undefined>(undefined);

export const useSignUpContextProvider = (): ISignUpContext => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error(
      "useSignUpContextProvider must be used within a SignUpProvider"
    );
  }
  return context;
};

export default function SignUpProvider({ children }: ISignUpProvider) {
  const [data, setData] = useLocalStorage<IFormData | null>("userData", null);

  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignUp = (data: IFormData) => {
    localStorage.setItem("userData", JSON.stringify(data));
    setData(data);
    let token = "lsdieifsldjsj45lk23khg45l3j4KkKLIJ";
    localStorage.setItem("token", token);
    navigate("/");
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setIsSignUp(false);
    navigate("/signup");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsSignUp(true);
    }
  }, [handleSignUp]);
  return (
    <SignUpContext.Provider
      value={{
        data,
        handleSignUp,
        handleSignOut,
        isSignUp,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
}
