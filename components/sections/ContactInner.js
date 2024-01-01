import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactInner = () => {
  const [data, setData] = useState({
    studentname: "",
    email: "",
    Phone: "",
    subject: "",
    query: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.studentname &&
      data.email &&
      data.Phone &&
      data.query &&
      data.subject
    ) {
      Swal.fire({
        title: "Do you want to Send the Query?",
        showCancelButton: true,
        confirmButtonText: "Send",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Query Send..👍", "", "success");

          fetch(
            "https://tender-duck-pantsuit.cyclic.app/api/studentenquiry",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          )
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Server response was not ok");
              }
            })
            .then((responseData) => {
              console.log("Response:", responseData);
            })
            .catch((error) => {
              console.error("Error sending query:", error);
              Swal.fire(
                "Oops! Something went wrong on our end. Please try again later.",
                "",
                "error"
              );
            });
        }
      });

      setData({
        studentname: "",
        email: "",
        Phone: "",
        subject: "",
        query: "",
      });
    } else {
      Swal.fire("Please fill in all fields", "", "warning");
    }
  };

  const handleChange = (e) => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="contact-details">
        <div className="container ">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us email</span>
                <h2>Feel free to write</h2>
              </div>

              <form
                id="contact_form"
                name="contact_form"
                className=""
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        onChange={handleChange}
                        value={data.studentname || ""}
                        name="studentname"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        onChange={handleChange}
                        value={data.email || ""}
                        name="email"
                        className="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        onChange={handleChange}
                        value={data.subject || ""}
                        name="subject"
                        className="form-control required"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        onChange={handleChange}
                        value={data.Phone || ""}
                        name="Phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    onChange={handleChange}
                    value={data.query || ""}
                    name="query"
                    className="form-control required"
                    rows="7"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="theme-btn btn-style-one me-3"
                    data-loading-text="Please wait..."
                  >
                    <span className="btn-title">Send message</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right mt-md-50">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text">
                    <img
                      src="https://media.licdn.com/dms/image/C5112AQE8ThPkmol2Jg/article-cover_image-shrink_600_2000/0/1584093171155?e=2147483647&v=beta&t=kAVZ0l9rFDV5Kjg6u7ZRkh22MuY_fWeG4cPNBjAn5kE"
                      alt=""
                    />
                    Our team is committed to assisting you if you have any
                    questions. When you submit the form below, a representative
                    from our company will get in touch with you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid p-0">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17715.274168164324!2d72.63262722396266!3d23.22676547314658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702116634095!5m2!1sen!2sin"
              data-tm-width="100%"
              height="500"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
