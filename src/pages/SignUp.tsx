import { StyledLogin } from "../styles/authPages/Login.styled";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SignUpFormData } from "../context/AuthContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  // useForm
  const form = useForm<SignUpFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const res = await signUp(data);

      if (res) {
        toast.success("Succesfully created user");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        toast.error("Sign Up failed");
      }
    } catch (err) {
      console.error("Register failed", err);
    }
  };

  return (
    <StyledLogin>
      <h2>Sign up</h2>
      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
          })}
        />

        <p>{errors.username?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          id="password"
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

        <button type="submit">SIGN UP</button>
      </form>
      <h3>
        Already have an account? <Link to="/login">Log in</Link>
      </h3>
    </StyledLogin>
  );
}
