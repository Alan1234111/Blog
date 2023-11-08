import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GlobalStyles from "./styles/Global";

export default function Layout() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
