import React from "react";
import "./FAQ.css"
const FAQ = () => {
  const faqData = [
    {
      question: "What happened to AppGyver?",
      answer:
        "SAP Build Apps is the evolution of SAP AppGyver that lets you build pixel-perfect web and mobile applications, create backends, integrate with SAP solutions, and collaborate with team members. AppGyver Community Edition is still available and now known as the free edition of SAP Build Apps.",
    },
    {
      question: "How does it affect my projects on AppGyver Community Edition?",
      answer:
        "The old version of AppGyver Community Edition was shut down at the end of 2023. You can now sign up and work with the same great features on SAP Build Apps, free edition.",
    },
    {
      question: "What is the SAP Build Apps Free Tier?",
      answer:
        "The Free Tier allows you to start creating apps with SAP Build Apps on SAP Business Technology Platform (BTP). You'll be able to try out enterprise-grade features, such as backends and project sharing.",
    },
    {
      question: "How can I try out SAP Build Apps Free Tier?",
      answer: (
        <>
          The Free Tier is open to everyone. Learn more about Build Apps and get
          started{" "}
          <a
            href="https://www.sap.com/products/technology-platform/low-code-app-builder.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <div className="faq">
      <div className="wrapper">
        <div className="side-feature vertical">
          <h2 className="faq-title">FAQ</h2>
          <div className="faq-items">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
