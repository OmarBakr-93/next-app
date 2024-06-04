import { Italiana } from "next/font/google";
import Footer from "app/_components/footer/Footer";
import Header from "app/_components/header/Header";
import "./home.css";
import Products from "app/_components/products/Products";

function Page() {
  return (
    <>
      <Header />
      <main>
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          Recommended for you
        </h1>
        <Products />
      </main>
    </>
  );
}

export default Page;
