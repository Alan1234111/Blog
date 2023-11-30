import { StyledLogin } from "../styles/authPages/Login.styled";
import { Form, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const res = await register(formData);

      if (res) {
        navigate("/login");
      }
    } catch (err) {
      console.error("Register failed", err);
    }
  };

  return (
    <StyledLogin>
      <h2>Sign up</h2>
      <Form method="POST" onSubmit={handleRegister}>
        <input type="text" name="username" placeholder="Username" />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">SIGN UP</button>
      </Form>
      <h3>
        Already have an account? <Link to="/login">Log in</Link>
      </h3>
    </StyledLogin>
  );
}
