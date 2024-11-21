import React from 'react';
import './Pricing.css'; 

const PricingTable = () => {
    return (
        <div className='pricing-container'>
        <div className="build-heading-center">
            <h1 className="build-h2">
                Build for enterprise<br />or personal usage.
            </h1>
            <div className="build-table">
                <div className="div-block-86">
                    <div className="div-block-87">
                        <div>Design Using AI</div>
                        <div>Auto-generate system</div>
                        <div>Co-create with your team</div>
                        <div>
                            Download Source Code
                        </div>
                        <div>Integrate seamlessly with External Systems</div>
                        <div>Enterprise authentication & governance</div>
                    </div>
                    <div className="build-table-element build-box-shadow build-purple">
                        <h6 className="build-h6 build-type-white build-absolute">
                            SAP&nbsp;Build Apps <br /> $53/ project
                        </h6>
                        <div className="div-block-93">
                            {[...Array(6)].map((_, index) => (
                                <img
                                    key={index}
                                    src="https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/636bda29e3acea178f7f7929_check-white.svg"
                                    loading="lazy"
                                    width="28"
                                    alt="Image of white checkmark"
                                />
                            ))}
                        </div>
                        <div className="div-block-94">
                            <a
                                data-event-label="Sign Up"
                                data-event-category="Community page"
                                data-event-action="Comparison table Build Apps sign up Click"
                                href="https://www.sap.com/products/technology-platform/low-code-app-builder.html"
                                className="build-color-button ga-event w-button"
                            >
                                Explore
                            </a>
                        </div>
                    </div>
                    <div className="build-table-element build-box-shadow build-blue-1">
                        <h6 className="build-h6 build-type-white build-absolute textcolor-black">
                            Free edition
                        </h6>
                        <div className="div-block-93">
                            {[true, true, false, false, false, false].map((isChecked, index) => (
                                <img
                                    key={index}
                                    src={
                                        isChecked
                                            ? "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/636bdf45fc681f42b9926731_check-blue11.svg"
                                            : "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/636be11ff698e18107043aed_close-blue11.svg"
                                    }
                                    loading="lazy"
                                    width="28"
                                    alt={
                                        isChecked
                                            ? "Image of dark-blue checkmark"
                                            : "Image of dark-blue close icon"
                                    }
                                />
                            ))}
                        </div>
                        <div className="div-block-94">
                            <a
                                data-event-label="Join our community"
                                data-event-category="Community page"
                                data-event-action="Comparison table join our community Click"
                                href="https://agcommunity.design-time.eu10.apps.build.cloud.sap/"
                                className="build-color-button ga-event w-button"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PricingTable;
