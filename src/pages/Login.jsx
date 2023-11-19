import {Form, Link, useNavigate} from "react-router-dom";
import {StyledLogin} from "../components/styles/Login.styled";
import {useAuth} from "../components/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const {login, authenticated} = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Call the login function from the context, passing the form data
      const formData = new FormData(event.target);
      const res = await login(formData);

      // If login is successful, navigate to the desired location (e.g., "/")

      if (res) {
        navigate("/");
      }
    } catch (err) {
      // Handle login error, e.g., display an error message
      console.error("Login failed", err);
    }
  };

  return (
    <StyledLogin>
      <h2>Log in</h2>
      <Form method="POST" onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">SIGN IN</button>
      </Form>
      <h3>
        Not a Member? <Link to="/register">Sign up now</Link>
      </h3>
    </StyledLogin>
  );
}
