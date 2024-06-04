import Nav from "../nav/Nav";
import "./header.css";

function Header() {
  return (
    <>
      <div className="top-img">
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>
    </>
  );
}

export default Header;
