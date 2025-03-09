import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null); // state برای ذخیره‌ی index سوال فعال

  const faqs = [
    {
      question: "1-چه خدماتی ارائه می دهید؟",
      answer:
        "ما خدمات طراحی وب، توسعه اپلیکیشن‌های موبایل و سئو ارائه می‌دهیم.",
    },
    {
      question: "2-هزینه خدمات چقدر است؟",
      answer: "هزینه خدمات بستگی به نوع پروژه و نیازهای شما دارد.",
    },
    {
      question: "3-نمونه کارهای شمارا چگونه ببینم؟",
      answer: "می‌توانید از بخش نمونه کارها در وب‌سایت ما دیدن کنید.",
    },
    {
      question: "4-برای سفارش خدمات چکار باید بکنم؟",
      answer: "می‌توانید از طریق فرم تماس با ما درخواست خود را ارسال کنید.",
    },
  ];

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <h2>
        سوالات <span>پرتکرار</span> پرسیده شده
      </h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
