import { Outlet } from "react-router-dom";
import { Footer } from "../Design/Footer";
import { Header } from "../Design/Header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
