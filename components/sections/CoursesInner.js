import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CourseTwo = () => {
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
      <section className="courses-section">
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
                <div className="course-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={item.imgurl} title="Edulrns" />
                      </figure>
                      <div className="value">Advanced</div>
                    </div>
                    <div className="content-box">
                      <ul className="course-info">
                        <li>
                          <i className="fa fa-book" /> {item.lesson} Lessons
                        </li>
                        <li>
                          <i className="fa fa-users" /> {item.students} Students
                        </li>
                        <li>
                          <i className="fa fa-clock" /> 3 Weeks
                        </li>
                      </ul>
                      <h5 className="title">
                        <p>{item.title}</p>
                      </h5>
                      <div className="other-info">
                        <div className="rating-box">
                          <h4>{item.subject}</h4>
                        </div>
                      </div>
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

export default CourseTwo;
