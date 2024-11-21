import React from "react";
import "./Features.css";

const FeatureSection = () => {
  // Data for the sections
  const sections = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc6ad7952f69f6b63875efa_Artboard%201%20copy%2022.svg",
      title: "1. Clarify your requirements with AI",
      description:
        "Connect with our ready-made integrations or any modern API within minutes using the REST integration wizard.",
      buttonText: "Watch video on how it works",
      type: "video",
      videoPoster:
        "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc98e4241ec9e499d41ce8c_integrations_vid-poster-00001.jpg",
      videoSources: [
        "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc98e4241ec9e499d41ce8c_integrations_vid-transcode.mp4",
        "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc98e4241ec9e499d41ce8c_integrations_vid-transcode.webm",
      ],
      reversed: false,
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc6a8c211520e40afe2074c_Artboard%201%20copy%2015.svg",
      title: "2. Preview and Review your App",
      description:
        "Transform data with spreadsheet-style formulas such as calculating the distance between coordinates, converting date and time formats, or implementing hashing.",
      buttonText: "Watch video on how it works",
      type: "video",
      videoPoster:
        "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc9d1e0cd9d010749b9e0b6_formula_vid_2-poster-00001.jpg",
      videoSources: [
        "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc9d1e0cd9d010749b9e0b6_formula_vid_2-transcode.mp4",
        "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc9d1e0cd9d010749b9e0b6_formula_vid_2-transcode.webm",
      ],
      reversed: true,
    },
    {
      id: 3,
      icon: "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc6ad7952f69f6b63875efa_Artboard%201%20copy%2022.svg",
      title: "3. Publish apps to mobile, web, tablet...",
      description:
        "Deploy your app with a few clicks using our cloud build service and ship it to any device.",
      buttonText: "Watch video on how it works",
      type: "image",
      imageSrc:
        "https://cdn.prod.website-files.com/5dbff9c19bf13ec2ef5678ad/5dc98f4804adb006011d43bd_launch%402x.png",
      reversed: false,
    },
  ];

  return (
    <div>
      <h3 className="contentSection-box-heading">
        How it works
      </h3>
      {sections.map((section) => (
        <div
          key={section.id}
          id={`Section-${section.id}`}
          className={`section no-padding-bottom ${section.reversed ? "mobile-reversed" : ""
            }`}
        >
          <div className="wrapper _1200">
            <div className="side--feature">
              {!section.reversed && (
                <div className="side-info">
                  <div className="div-block-6">
                    <img src={section.icon} width="40" alt="" />
                  </div>
                  <h2 className="build-h2-features">{section.title}</h2>
                  <p className="build-paragraph-features">
                    {section.description}
                  </p>
                  <a href="#" className="new-button blue w-button">
                    {section.buttonText}
                  </a>
                </div>
              )}
              <div className="div-block-7">
                {section.type === 'video' ? (
                  <div
                    data-poster-url={section.videoPoster}
                    data-video-urls={section.videoSources.join(",")}
                    data-autoplay="true"
                    data-loop="true"
                    className="background-video-2 w-background-video w-background-video-atom"
                  >
                    <video autoPlay loop muted playsInline>
                      {section.videoSources.map((source, index) => (
                        <source key={index} src={source} />
                      ))}
                    </video>
                  </div>
                ) : (
                  <img 
                    src={section.imageSrc} 
                    alt={section.title} 
                    className="background-image" 
                  />
                )}
              </div>
              {section.reversed && (
                <div className="side-info">
                  <div className="div-block-6">
                    <img src={section.icon} width="40" alt="" />
                  </div>
                  <h2 className="build-h2-features">{section.title}</h2>
                  <p className="build-paragraph-features">
                    {section.description}
                  </p>
                  <a href="#" className="new-button blue w-button">
                    {section.buttonText}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;