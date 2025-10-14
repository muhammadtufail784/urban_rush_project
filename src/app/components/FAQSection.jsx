"use client"
import React, {useState} from "react";
import FaqItem from "./FaqItem";

const faqs = [
  {
    q: "What is UrbanRUSH?",
    a: "UrbanRUSH is a delivery service that lets you request a driver to pick up and deliver items from any store to your chosen destination.",
  },
  {
    q: "How does UrbanRUSH work?",
    a: "Simply enter the pickup and drop-off locations, describe your item, and request a driver. We'll connect you with a nearby driver who will handle the delivery.",
  },
  {
    q: "How do I request a delivery?",
    a: "Open the UrbanRUSH app, select your pickup and drop-off locations, add item details, and tap \"Request Delivery.\"",
  },
  {
    q: "Can I schedule a delivery for later?",
    a: "Currently, UrbanRUSH only offers instant deliveries. Scheduled deliveries will be added soon.",
  },
  {
    q: "What if the driver can't find the pickup location?",
    a: "The driver can contact you for guidance. Make sure you provide clear instructions in the notes section.",
  },
  {
    q: "How can I join UrbanRUSH as a driver?",
    a: "Joining UrbanRUSH is simple. Just upload your required documents — such as your ID and vehicle details — and complete your registration to get started.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="md:py-24 py-[25px] bg-[#F6F6F6]">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-700">
          Still got questions? Feel free to reach out to our incredible support team, 7 days a week.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 space-y-3">
        {faqs.map((item, index) => (
          <FaqItem
            key={index}             // ✅ unique
            question={item.q}
            answer={item.a}
            isOpen={activeIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 