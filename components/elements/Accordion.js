import React, { useState } from "react";

const Accordion = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <ul className="accordion-box wow fadeInRight">
        {/*Block*/}
        <li
          className={
            isActive.key == 1
              ? "accordion block active-block"
              : "accordion block"
          }
          onClick={() => handleToggle(1)}
        >
          <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>
            Do you give personal attention to each student?
            <div className="icon fa fa-angle-down" />
          </div>
          <div
            className={
              isActive.key == 1 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                Every child’s handwriting problems are different and so are the
                requirements. Our experts analyze and identify individual flaws
                in one’s writing and tutor to repair accordingly. It therefore
                becomes mandatory for the trainer to give personal attention to
                every child.
              </div>
            </div>
          </div>
        </li>
        {/*Block*/}
        <li
          className={
            isActive.key == 2
              ? "accordion block active-block"
              : "accordion block"
          }
          onClick={() => handleToggle(2)}
        >
          <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>
            Are the teachers here friendly?
            <div className="icon fa fa-angle-down" />
          </div>
          <div
            className={
              isActive.key == 2 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                Absolutely! Teachers here are incredibly friendly and
                supportive. They're always eager to help and guide you through
                your learning journey. Whether it's a question about a subject
                or needing advice, they're here to lend a hand.
              </div>
            </div>
          </div>
        </li>
        {/*Block*/}
        <li
          className={
            isActive.key == 3
              ? "accordion block active-block"
              : "accordion block"
          }
          onClick={() => handleToggle(3)}
        >
          <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>
            Do employers recruit students on institute? ans
            <div className="icon fa fa-angle-down" />
          </div>
          <div
            className={
              isActive.key == 3 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                Yes, many employers actively recruit students from this
                institute. They often participate in career fairs, networking
                events, and internship programs specifically designed to connect
                students with job opportunities.
              </div>
            </div>
          </div>
        </li>
        {/*Block*/}
        <li
          className={
            isActive.key == 4
              ? "accordion block active-block"
              : "accordion block"
          }
          onClick={() => handleToggle(4)}
        >
          <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>
            How can i find my solutions?
            <div className="icon fa fa-angle-down" />
          </div>
          <div
            className={
              isActive.key == 4 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                There are many variations of passages the majority have suffered
                alteration in some fo injected humour, or randomised words
                believable.
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Accordion;
