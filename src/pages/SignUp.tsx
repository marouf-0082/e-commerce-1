import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Container } from "../components/container/Container";
import { useSignUpContextProvider } from "../context/SignUpContext";
import Label from "../ui/Label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface IFormData {
  fullname: string;
  username: string;
  email: string;
  password: number;
  confirmpassword: number;
  phone?: number;
}

function SignUp() {
  const { handleSignUp } = useSignUpContextProvider();
  const {
    register,
    control,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    handleSignUp(data);
  };

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmpassword: false,
  });
  return (
    <Container>
      <div className="relative p-60 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center p-8 rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:shadow-[0_0_8px_rgba(245,245,245,0.5)] backdrop-blur-2xl">
          <h1 className="text-5xl font-bold mb-8">Sign Up</h1>
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="form-control">
              <div className="relative">
                <input
                  className="formInput peer pt-6"
                  type="text"
                  id="fullname"
                  placeholder=" "
                  {...register("fullname", {
                    required: "please fill fullname",
                  })}
                />

                <Label name="fullname" label="Fullname" />
              </div>

              <h5 className="error text-red-600 dark:text-red-400">
                {errors.fullname?.message}
              </h5>
            </div>

            <div className="form-control">
              <div className="relative">
                <input
                  className="formInput peer pt-6"
                  type="text"
                  id="username"
                  placeholder=" "
                  {...register("username", {
                    required: "please fill username",
                  })}
                />

                <Label name="username" label="Username" />
              </div>

              <h5 className="error text-red-600 dark:text-red-400">
                {errors.username?.message}
              </h5>
            </div>

            <div className="form-control">
              <div className="relative">
                <input
                  className="formInput peer pt-6"
                  type="email"
                  id="email"
                  placeholder=" "
                  {...register("email", {
                    required: "please fill email",
                    validate: {
                      notAdmin: (field) => {
                        return (
                          field !== "test@gmail.com" ||
                          "fill another email please"
                        );
                      },
                      notBlockListed: (field) => {
                        return (
                          !field.endsWith("baddomain.com") || "change domain"
                        );
                      },
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "invalid format",
                    },
                  })}
                />
                <Label name="email" label="E-mail" />
              </div>
              <h5 className="error text-red-600 dark:text-red-400">
                {errors.email?.message}
              </h5>
            </div>

            <div className="form-control">
              <div className="relative">
                <input
                  className="formInput peer pt-6"
                  type={showPassword.password ? "text" : "password"}
                  placeholder=" "
                  id="password"
                  {...register("password", {
                    required: "please fill password",
                  })}
                />
                {watch("password") && (
                  <div
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        password: !showPassword.password,
                      })
                    }
                  >
                    {showPassword.password ? (
                      <Eye
                        size={22}
                        color="#97A1AF"
                        className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        size={22}
                        color="#97A1AF"
                        className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                      />
                    )}
                  </div>
                )}
                <Label name="password" label="Password" />
              </div>
              <h5 className="error text-red-600 dark:text-red-400">
                {errors.password?.message}
              </h5>
            </div>

            <div className="form-control">
              <div className="relative">
                <input
                  className="formInput peer pt-6 relative"
                  type={showPassword.confirmpassword ? "text" : "password"}
                  placeholder=" "
                  id="confirmpassword"
                  {...register("confirmpassword", {
                    required: "please fill confirmpassword",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Password is not match",
                  })}
                />
                {watch("confirmpassword") && (
                  <div
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirmpassword: !showPassword.confirmpassword,
                      })
                    }
                  >
                    {showPassword.confirmpassword ? (
                      <Eye
                        size={22}
                        color="#97A1AF"
                        className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        size={22}
                        color="#97A1AF"
                        className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
                      />
                    )}
                  </div>
                )}
                <Label name="confirmpassword" label="Confirmpassword" />
              </div>
              <h5 className="error text-red-600 dark:text-red-400">
                {errors.confirmpassword?.message}
              </h5>
            </div>

            <div className="form-control">
              <div className="relative">
                <input
                  className="formInput peer pt-6"
                  type="text"
                  id="phone"
                  placeholder=" "
                  {...register("phone")}
                />

                <Label name="phone" label="Phone" />
              </div>

              <h5 className="error text-red-600 dark:text-red-400">
                {errors.phone?.message}
              </h5>
            </div>

            <button className="btn primary-btn">Submit</button>
          </form>
        </div>
        <DevTool control={control} />
      </div>
      
    </Container>
  );
}

export default SignUp;
