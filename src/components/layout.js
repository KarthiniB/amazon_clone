import Header from "./header";
import Footer from "./footer";
import ProductButton from "./productButton";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return (
        <>
        <Header />
          <section>
            <Outlet/>
          </section>
        <Footer />
        </>
      )
}