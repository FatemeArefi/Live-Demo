import "./ContactForm.css";

const ContactForm = () => {
  const ContactUsBanner = "/images/contact-us/contact-us-banner.svg";
  const GetInTouch = "/images/contact-us/get-in-touch.svg";
  const Instagram = "/images/instagramm.svg";
  const Linkedin = "/images/linkdin.svg";
  const Telegram = "/images/telegramm.svg";
  const Whatsapp = "/images/whatsapp.svg";

  return (
    <section className="contact-container">
      <div>
        <div className="contact-us-get-in-touch">
          <h4>با ما در ارتباط باشید</h4>
          <img src={GetInTouch} alt="get-in-touch-pic" />
        </div>

        <div className="contact-us-text">
          <p>
            آیا به دنبال راهی برای ارتقای کسب و کار خود در دنیای دیجیتال هستید؟
            ما به شما کمک می کنیم!
          </p>
          <p>با مشاوران متخصص نوینر, دنیای دیجیتال شما را خلق می کنیم 😉</p>
        </div>

        <div className="contact-us-button">
          <div className="contact-us-button-container">
            <div className="contact-us-register">
              <a href="#">درخواست مشاوره</a>
            </div>
            <div className="contact-us-call">
              <a href="#">اطلاعات تماس</a>
            </div>
          </div>
          <div className="social-contact-us">
            <div>
              <img src={Telegram} alt="Telegram" />
            </div>
            <div>
              <img src={Linkedin} alt="Linkedin" />
            </div>
            <div>
              <img src={Whatsapp} alt="Whatsapp" />
            </div>
            <div>
              <img src={Instagram} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-image-container">
        <img src={ContactUsBanner} alt="contact-us-banner" />
      </div>
    </section>
  );
};

export default ContactForm;
