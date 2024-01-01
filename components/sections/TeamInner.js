import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const TeamOne = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://tender-duck-pantsuit.cyclic.app/api/subject")
      .then((response) => {
        setRows(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Axios Error:", error);
      });
  }, []);

  return (
    <>
      <section className="team-section">
        <div className="auto-container">
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>loading....</p>
            </div>
          ) : (
            <div className="row">
              {rows.map((item, i) => (
                <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img
                          src={`/images/avtar/avatar_${i + 1}.jpg`} // Updated image source using index
                          alt="Edulrns" // Added alt attribute
                          title="Edulrns"
                        />
                      </figure>
                      <span className="share-icon fa fa-share-alt" />
                      <div className="social-links">
                        <a>
                          <i className="fab fa-twitter" />
                        </a>
                        <a>
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a>
                          <i className="fab fa-pinterest-p" />
                        </a>
                        <a>
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="info-box">
                      <h4 className="name">
                        <a href="#">{item.subteken}</a>
                      </h4>
                      <span className="designation">{item.subject}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TeamOne;
