import Header from "./header";
import Footer from "./footer";
import CategoriesPage from "./categoriesPage";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return (
        <>
        <Header />
          <section>
            <CategoriesPage />
                <article>
                    <Outlet />
                </article>
          </section>
        <Footer />
        </>
      )
}