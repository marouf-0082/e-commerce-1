import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Container } from "../components/container/Container";
import { useSignUpContextProvider } from "../context/SignUpContext";

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
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    handleSignUp(data);
  };

  return (
    <Container>
      <div className="p-60 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Login</h1>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="form-control">
            <label htmlFor="fullname">Fullname</label>
            <input
              className="formInput"
              type="text"
              id="username"
              {...register("fullname", { required: "please fill fullname" })}
            />
            <p className="error">{errors.fullname?.message}</p>
          </div>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              className="formInput"
              type="text"
              id="username"
              {...register("username", { required: "please fill name" })}
            />
            <p className="error">{errors.username?.message}</p>
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input
              className="formInput"
              type="email"
              id="email"
              {...register("email", {
                required: "please fill email",
                validate: {
                  notAdmin: (field) => {
                    return (
                      field !== "test@gmail.com" || "fill another email please"
                    );
                  },
                  notBlockListed: (field) => {
                    return !field.endsWith("baddomain.com") || "change domain";
                  },
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "invalid format",
                },
              })}
            />
            <p className="error">{errors.email?.message}</p>
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              className="formInput"
              type="password"
              id="password"
              {...register("password", { required: "please fill password" })}
            />
            <p className="error">{errors.password?.message}</p>
          </div>
          <div className="form-control">
            <label htmlFor="confirmpassword">Confirmpassword</label>
            <input
              className="formInput"
              type="password"
              id="confirmpassword"
              {...register("confirmpassword", {
                required: "please fill confirmpassword",
                validate: (value) =>
                  value === getValues("password") || "Password is not match",
              })}
            />
            <p className="error">{errors.confirmpassword?.message}</p>
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input
              className="formInput"
              type="number"
              id="phone"
              {...register("phone")}
            />
            <p className="error">{errors.phone?.message}</p>
          </div>

          <button className="btn primary-btn">Submit</button>
        </form>
        <DevTool control={control} />
      </div>
    </Container>
  );
}

export default SignUp;
