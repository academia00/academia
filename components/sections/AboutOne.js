import Link from "next/link";
import React from "react";

const AboutOne = () => {
  return (
    <>
      <section className="about-section mb-5">
        <div className="anim-icons">
          <span className="icon icon-dotted-map" />
        </div>
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Get to know us</span>
                  <h2>Grow your skills learn with us from anywhere</h2>
                  <div className="text">
                    Academia commemorates 25 years in India. At this significant
                    milestone, it is gratifying to note that our homegrown brand
                    has been strengthening the foundation of employability &
                    skill-building in the nation for the past 25 years.
                  </div>
                </div>
                <ul className="list-style-one two-column">
                  <li>
                    <i className="icon fa fa-check" /> Expert trainers
                  </li>
                  <li>
                    <i className="icon fa fa-check" /> Online learning
                  </li>
                  <li>
                    <i className="icon fa fa-check" /> Lifetime access
                  </li>
                  <li>
                    <i className="icon fa fa-check" /> Great results
                  </li>
                </ul>
                <div className="btn-box">
                  <Link href="/page-about" className="theme-btn btn-style-one">
                    <span className="btn-title">Discover more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 justify-content-center d-flex mt-5 bg-transparent">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1 overlay-anim wow fadeInUp">
                  <img
                    src="images/resource/about.gif"
                    title="Edulrns"
                    width="100%"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOne;
