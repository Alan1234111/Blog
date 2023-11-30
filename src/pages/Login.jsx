import { Form, Link, useNavigate } from "react-router-dom";
import { StyledLogin } from "../styles/authPages/Login.styled";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const res = await login(formData);

      if (res) {
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <StyledLogin>
      <h2>Log in</h2>
      <Form method="POST" onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">SIGN IN</button>
      </Form>
      <h3>
        Not a Member? <Link to="/register">Sign up now</Link>
      </h3>
    </StyledLogin>
  );
}
