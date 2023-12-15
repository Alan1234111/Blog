import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GlobalStyles from "../styles/Global";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Footer />
    </>
  );
}
