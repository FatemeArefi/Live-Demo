import "./Services.css";

const Services = () => {
  const services = [
    {
      image: "https://noviner.io/assets/static/mobile.Cpb9O6NK.svg",
      title: "طراحی اپلیکیشن",
      subtitle: "Mobile app Design",
      description:
        " طراحی و توسعه اپلیکیشن‌های موبایل بومی و چندسکویی و یا سفارشی برای iOS و Android از اپلیکیشن‌های بازی و سرگرمی تا برنامه‌های تجاری و آموزشی، ما راه‌حلی ایده‌آل برای نیازهای شما ارائه می‌دهیم. ",
    },
    {
      image: "	https://noviner.io/assets/static/startup.Ba9fdNgk.svg",
      title: "راه اندازی استارت آپ",
      subtitle: "Start Up",
      description:
        " نوینر، با ارائه خدمات جامع راه اندازی استارت آپ، در هر مرحله از مسیر کارآفرینی همراه شماست. از ایده پردازی تا جذب سرمایه، طراحی و توسعه محصول، بازاریابی و فروش، ما در کنار شما خواهیم بود. ",
    },
    {
      image: "https://noviner.io/assets/static/dev.CiTO7ysM.svg",
      title: "خدمات دوآپس",
      subtitle: "DevOps Services",
      description:
        " با ارائه خدمات تخصصی DevOps، به شما کمک می‌کنیم تا فرآیندهای توسعه و استقرار نرم‌افزار خود را بهینه کنید و با اتوماسیون، نظارت و همکاری مداوم، کارهای شما می‌توانند سریع‌تر و کارآمدتر از همیشه عمل کنند. ",
    },
    {
      image: "https://noviner.io/assets/static/web.B14J0CzX.svg",
      title: "طراحی وب سایت",
      subtitle: "Web Design",
      description:
        " با طراحی و توسعه وب‌اپلیکیشن‌های سفارشی، نیازهای منحصر به فرد شما را برآورده می‌کنیم. از وب‌اپلیکیشن‌های مدیریتی پیچیده تا پلتفرم‌های تجارت الکترونیک، ما راه‌حلی ایده‌آل برای شما ارائه می‌دهیم. ",
    },
    {
      image: "https://noviner.io/assets/static/ui.hO7QydwM.svg",
      title: "طراحی رابط کاربری",
      subtitle: "UI/UX Design",
      description:
        " ما با سالها تجربه و تخصص در زمینه طراحی UI و با در نظر گرفتن نیاز ها و سلایق شما, رابط کاربری های زیبا و کاربردی را برای شما خلق میکنیم که نظر مخاطبان را به خود جلب می کند و تجربه کاربری بی نظیری را برای آنها رقم میزند. ",
    },
    {
      image: "https://noviner.io/assets/static/digital.CTsZnte3.svg",
      title: "دیجیتال مارکتینگ",
      subtitle: "Digital MArketing",
      description:
        " ما با ارائه خدمات دیجیتال مارکتینگ جامع, به شما کمک میکنیم تا به مخاطبان هدف خود در فضای آنلاین دست پیدا کنید و برند خود را به آنها معرفی کنید. این خدمات جامع شامل سئو, بازاریابی محتوا, تبلیغات آنلاین, بازاریابی شبکه های اجتماعی و… میشود s",
    },
    {
      image: "https://noviner.io/assets/static/seo.D7MKRF2j.svg",
      title: "سئو",
      subtitle: "SEO",
      description:
        " ما با ارائه خدمات سئو تخصصی به شما کمک میکنیم تا به جایگاه های برتر نتایج جستجو دست پیدا کنید و ترافیک ارگانیک وبسایت خود را به طور چشمگیری افزایش دهید و از رقبای خود پیشی گرفته و به مشتریان بالقوه بیشتری دست پیدا کنید ",
    },
    {
      image: "https://noviner.io/assets/static/social.Hgw9XCZv.svg",
      title: "سوشیال مدیا",
      subtitle: "Social Media",
      description:
        " ما به شما کمک میکنیم تا در این فضا به طور موثری فعالیت کنید و به اهداف خود برسید. خدمات ما شامل طراحی و پیاده سازی کمپین های تبلیغاتی در شبکه های اجتماعی, مدیریت صفحات و تولید محتوای جذاب و تعاملی میباشد. ",
    },
  ];

  return (
    <>
      <div className="h3-manage">
        <h3 className="card">خدمات</h3>
        <div className="line"></div>
        <h3 className="h3-en">Services</h3>
      </div>
      <section className="services-container">
        <div className="services">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.subtitle}</p>
              <p className="p">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
