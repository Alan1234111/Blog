import { Link, useNavigate } from "react-router-dom";
import { StyledLogin } from "../styles/authPages/Login.styled";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import toast from "react-hot-toast";
import { LogInFormData } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // useForm
  const form = useForm<LogInFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: LogInFormData) => {
    try {
      const res = await login(data);

      if (res) {
        toast.success("Succesfully Log in");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error("Authentication Failed");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <StyledLogin>
      <h2>Log in</h2>
      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
          })}
        />

        <p>{errors.username?.message}</p>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Invalid password format",
            },
          })}
        />

        <p>{errors.password?.message}</p>

        <button type="submit">SIGN IN</button>
      </form>
      <DevTool control={control} />
      <h3>
        Not a Member? <Link to="/register">Sign up now</Link>
      </h3>
    </StyledLogin>
  );
}
