import React from "react";

function About() {
  return (
    <div>
      <section className="my-5 d-flex flex-wrap justify-content-around">
        <img
          id="avatar"
          src={require("../../assets/images/kkk.jpg")}
          alt="Placeholder avatar"
          className="m-3"
        ></img>
        <div className="m-5 text-center" id="aboutMe">
          <h2 className="fw-bold">About Me</h2>
          <p className="fw-bold lh-lg">
          Karltun Moreno is an accomplished coding and media production specialist that
                                understands the
                                phases of product and brand web development.
                                From photography, content video to implementing (IOT) the
                                Internet of Things into todays real time use case applications, Karltun has become a
                                full stack web developer advocate.
                                Also, enriched with an arts and communications degree from Miami Dade College, Karltun is
                                a go getter and a creative thinker.
                                He has also earned a Psychology degree from California State University, Northridge.
                                Karltun has studied full stack web development and coding at the University of Miami and
                                holds a certificate
                                in Front and Back End Web Development.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;