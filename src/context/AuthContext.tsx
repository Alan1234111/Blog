import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import toast from "react-hot-toast";

export type LogInFormData = {
  username: string;
  password: string;
};

export type SignUpFormData = {
  username: string;
  password: string;
};

type AuthContextType = {
  authenticated?: boolean;
  login: (formData: LogInFormData) => Promise<boolean | undefined>;
  logout: () => void;
  signUp: (formData: SignUpFormData) => Promise<boolean | undefined>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({
  children,
}: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status (e.g., from localStorage, cookies, etc.)
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
  }, []);

  const signUp = async (formData: SignUpFormData) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      if (response.ok) {
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (formData: LogInFormData) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        setAuthenticated(true);
        console.log(token);
        return true;
      } else {
        // Authentication failed, handle the error here
        console.error("Authentication failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    toast.success("Succesfully Log Out");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, login, logout, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
