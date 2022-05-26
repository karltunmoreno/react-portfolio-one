import React from "react";

function Portfolio() {
  const projects = [
    
    {
      name: "My Crypto",
      id: "mycrypto",
      description: "A crypto app that allows you to store your portfolio and check crypto conversions.",
      
      liveUrl: "https://fathomless-ocean-39616.herokuapp.com/",
      gitHub: "https://github.com/karltunmoreno/my_crypto"
    },

    {
      name: "Momentuum",
      id: "momentuum",
      description: "This is a React Application built for photographers and alike. Created with React, and Bootstrap.",
      liveUrl: "https://karltunmoreno.github.io/momentuum/",
      gitHub: "https://github.com/karltunmoreno/momentuum/"
    },


    {
      name: "Tech Blog",
      id: "techblog.png",
      description: "This application and website is used for creating and sharing blog posts centered around technology. Allows users to view, edit and delete their posts and view and comment on the posts of others.​Node.js,Express, Sequalize, MySql2, .dotenv, bcrypt, Express-Handlebars.",
      liveUrl: "https://arcane-beach-63003.herokuapp.com/home",
      gitHub: "https://github.com/karltunmoreno/TECH-BLOG"
    },

    

    {
      name: "Control Budget Check",
      id: "controlbudgetcheck.png",
      description: "As a an avid traveler I WANT to be able to track my withdrawals and deposits with or without a data/internet connection SO THAT my account balance is accurate when I am traveling Acceptance Criteria GIVEN a budget tracker without an internet connection WHEN the user inputs an expense or deposit THEN they will receive a notification that they have added an expense or deposit WHEN the user reestablishes an internet connection THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated.MongoDB/Atlas, Express, JS, Mongoose, Heroku, Node.js.",
      liveUrl: "https://agile-forest-63593.herokuapp.com/",
      gitHub: "https://github.com/karltunmoreno/Control-Budget-Check"
    },

    {
      name: "Travel Buddy",
      id: "travelbuddy",
      description: "Travel with an updated reel time 5 day weather forcast and current currency exchange rates",
      liveUrl: "https://blerandism.github.io/travel_buddy/",
      gitHub: "https://github.com/karltunmoreno/travel_buddy"
    },
    {
      name: "Work Day Scheduler",
      id: "workday",
      description: "Use an electronic day planner on your mobile device.",
      liveUrl: "https://karltunmoreno.github.io/WORK-SCHEDULER/",
      gitHub: "https://github.com/karltunmoreno/WORK-SCHEDULER"
    },
    {
      name: "Timed Code Quiz",
      id: "timequiz",
      description: "A 4 question timed test using Javascript.",
      liveUrl: "https://karltunmoreno.github.io/code-quiz/",
      gitHub: "https://github.com/karltunmoreno/code-quiz"
    },
  
  ]
  return (
    <section>
      <h2 className="text-center fw-bold my-3">My Projects</h2>
      {projects.map((proj, i)=>(
      <div key={i} className="d-flex flex-column m-5 p-3 my-border card">
        <div className="text-center">
          <img className="p-image" src={require(`../../assets/images/${proj.id}.png`)} alt="Project Screenshot"></img>
        </div>
        <div className="mx-auto text-center">
          <h3 className="fw-bold m-2">{proj.name}</h3>
          <p>{proj.description}</p>
          <a href={proj.liveUrl} target="_blank" rel="noreferrer">View Deployed Application</a> <br></br>
          <a href={proj.gitHub} target="_blank" rel="noreferrer">View GitHub Repository</a>
        </div>
      </div>
      ))}
      {/*  */}
    </section>
  );
}

export default Portfolio;