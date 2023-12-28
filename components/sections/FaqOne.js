import React from "react";
import Accordion from "../elements/Accordion";

const FaqOne = () => {
  return (
    <>
      <section className="faqs-section">
        <div
          className="bg-image"
          style={{ backgroundImage: "url(./images/background/bobble.gif)" }}
        />
        <div className="auto-container">
          <div className="row">
            <div className="faq-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title text-white">Our faqs</span>
                  <h2 className="text-white">
                    Frequently asked some questions?
                  </h2>
                </div>
                <Accordion />
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 d-grid  pt-5 mt-5 bg-transparent">
              <figure className="image-1 wow fadeInUp mt-5">
                <img src="./images/resource/QA.gif" title="Edulrns" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqOne;
