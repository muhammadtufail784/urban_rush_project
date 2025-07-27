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
    a: "Simply enter your pickup and drop-off locations, select a vehicle type, and place your order. A nearby driver accepts and delivers your items while you track progress in real time.",
  },
  {
    q: "How do I request a delivery?",
    a: "Download the UrbanRUSH app from the App Store or Play Store, create an account, and tap 'New Delivery' to get started.",
  },
  {
    q: "Can I schedule a delivery for later?",
    a: "Yes. All deliveries are covered by UrbanRUSH’s transit insurance, so your items are protected during transit.",
  },
  {
    q: "What if the driver can’t find the pickup location?",
    a: "Yes. All deliveries are covered by UrbanRUSH’s transit insurance, so your items are protected during transit.",
  },
  {
    q: "What if the driver can’t find the pickup location?",
    a: "Yes. All deliveries are covered by UrbanRUSH’s transit insurance, so your items are protected during transit.",
  },
  {
    q: "What if the driver can’t find the pickup location?",
    a: "Yes. All deliveries are covered by UrbanRUSH’s transit insurance, so your items are protected during transit.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F6F6F6]">
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