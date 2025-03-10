import "./Customers.css";

const Customers = () => {
  const customers = [
    "https://noviner.io/assets/static/customers-arkili.BNFpcgfK.webp",
    "https://noviner.io/assets/static/customers-arvandlab.DfjQQr9-.webp",
    "https://noviner.io/assets/static/customers-irangenepath.gp-l9ft5.webp",
    "https://noviner.io/assets/static/customers-mendel.BiiYb_kq.webp",
    "https://noviner.io/assets/static/customers-superbilit.CNbcjx7Q.webp",
    "/images/myImage.jpg",
  ];

  return (
    <>
      <section className="customers-section">
        <div className="line-container">
          <h3 className="h3-fa">مشتریان</h3>
          <div className="line"></div>
          <h3 className="h3-en">Customers</h3>
        </div>

        <div className="customers-logos">
          {customers.map((logo, index) => (
            <div key={index} className="customer-logo">
              <img src={logo} alt={`Customer ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Customers;
