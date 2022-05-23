import React from "react";
import resume from "../../assets/documents/Full Stack Web Developer_Page_1.png";

function Resume() {
  return (
    <section>
      <h3 className="text-center my-3 fw-bold">Download My Resume</h3>
      <div className="d-flex flex-column">
        <div className="text-center">
          <a href={resume} download>
            <img
              id="resumeImg"
              src={require("../../assets/images/download.jpg")}
              className="border-bottom border-dark border-3"
              alt="Resume logo"
            ></img>
          </a>
        </div>
        <div>
          <h4 className="text-center my-4 fw-bold">My Skills</h4>
        </div>

        <div className="d-flex justify-content-around flex-wrap">
          <div
            id="skillCard"
            className="card m-4 border border-solid border-dark border-3"
          >
            <div className="card-body">
              <h5 className="card-title text-center">Front-End Development</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                HTML5, CSS3, JavaScript, React.Js
              </h6>
              <p className="card-text text-center fw-bold">
                Karltun Moreno is an accomplished coding and media production
                specialist that understands the phases of product and brand web
                development. From photography, content video to implementing
                (IOT) the Internet of Things into todays real time use case
                applications, Karltun has become a full stack web developer
                advocate. Also, enriched with an arts & communications degree
                from Miami Dade College, Karltun is a go getter and a creative
                thinker. He has also earned a Psychology degree from California
                State University, Northridge. Karltun has studied full stack web
                development and coding at the University of Miami and holds a
                certificate in Front and Back End Web Development.
                <br></br> <br></br>* I have experience working with CSS
                frameworks such as CSS styling and Bootstrap API's.
                <br></br>
                WEB DEVELOPMENT SKILLS SET: Word press, Wix, Moonfruit. Intuit, HTML
                formats for I-Pads & cell phones. Mac OS & IOS, Android, Google
                Search Console, Sitemaps, GIT, CSS, JavaScript, Bootstrap, JSON,
                API, AJAX, Node.js, express, MySQL, Mongo DB, MERN Stack,
                JQuery, Heroku, and React. VISUAL MEDIA: PowerPoint, Final
                Draft, Final Cut Pro X, Photoshop, Adobe Lightroom, In Design,
                Illustrator, Adobe Premiere, EP Movie Magic Budgeting and
                Scheduling, Red Camera, HDR, Bracket photos and Canon DSLR HD
                video cameras, ARRI cameras, DJI Mavic Pro Drone 2K , 4K 1080p.
                Microsoft Word, Excel. UAS Remote Pilot License by DOT * FAA.
                <br></br>* I also have experience with various JavaScript
                programming concepts such as separation of concerns, TDD, and
                OOP, an intermediate understanding of the DOM, as well as
                experience working with various third party libraries and
                frameworks (JQuery, React.JS, etc.) and server-side RESTful APIs
              </p>
            </div>
          </div>
          <div
            id="skillCard"
            className="card m-4 text-center border border-solid border-dark border-3"
          >
            <div className="card-body">
              <h5 className="card-title">Back-End Development</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Node.Js, Express.Js, MySQL, MongoDB
              </h6>
              <p className="card-text fw-bold">
                * I have experience with Node.JS and Express.JS to create and
                manipulate servers for web applications.
                <br></br>
                <br></br>* I have knowledge of the fundamental concepts of
                object-oriented programming and test-driven development as they
                apply to JavaScript and server-side development.
                <br></br>
                <br></br>* I have experience creating API routes to handle
                client-side HTTP requests and working with relational databases
                to serve response data to those requests. I have foundational
                experience with with MySQL databases and using an ORM to
                modularize the query process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
