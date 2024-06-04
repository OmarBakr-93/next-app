



const arr = [
    {id :1, productImg: "./images/1.png" },
    {id :2, productImg: "./images/2.webp" },
    {id :3, productImg: "./images/3.webp" },
    {id :4, productImg: "./images/4.webp" },
    {id :5, productImg: "./images/5.webp" },
    {id :6, productImg: "./images/6.webp" },
    {id :7, productImg: "./images/7.webp" },
    {id :8, productImg: "./images/8.png" },
  ];
function Products() {
  return (
    <>
        <section className="products flex">
          {arr.map((item) => {
            return (
              <article key={arr.id} className="card">
                <a href="/pages/product-details.html">
                  <img width={266} src={item.productImg} />
                </a>
                <div style={{ width: 266 }} className="content">
                  <h1 className="title">Product Title</h1>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>
                  <div
                    className="flex"
                    style={{
                      justifyContent: "space-between",
                      paddingBottom: "0.7rem",
                    }}
                  >
                    <div className="price">$100</div>
                    <button className="add-to-cart flex">
                      <i className="fa-solid fa-cart-plus" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
    </>
  )
}

export default Products
