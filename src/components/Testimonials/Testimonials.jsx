import React from "react";
import "./Testimonials.css";

const TestimonialsSection = ({ statsData }) => {
    return (
        <section>
            <div className="container contentSection-container">
                <div className="row mt-5">
                    <div className="contentSection-box col-12">
                        <h3 className="contentSection-box-heading text-center">
                            Trusted by Leaders Around the Globe
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="contentSection-box col-12 text-left">
                        <div className="row stats">
                            {statsData.map((item, index) => (
                                <div key={index} className="col-12 col-sm-6 col-md-3">
                                    <div>
                                        <p>
                                            <img
                                                alt={item.alt}
                                                src={item.image}
                                                style={{ height: "60px" }}
                                            />
                                        </p>
                                        <h1>{item.stat}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="cta-group">
                                        <a
                                            id={item.id}
                                            href={item.link}
                                            target="_self"
                                            className="cta cta-default cta-icon-right"
                                        >
                                            <span className="cta-content">Read case study</span>
                                            <span className="cta-icon-box">
                                                <i className="cta-icon fa fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
