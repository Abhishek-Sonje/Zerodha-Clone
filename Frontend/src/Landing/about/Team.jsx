import React, { useState } from "react";
import "./Team.css";
import NikhilImg from "../../assets/media/Images/nikhil.jpg";
import kailashImg from "../../assets/media/Images/kailash.jpg";
import venuImg from "../../assets/media/Images/venu.jpg";
import hananImg from "../../assets/media/Images/hanan.jpg";
import seemaImg from "../../assets/media/Images/seema.jpg";
import karthikImg from "../../assets/media/Images/karthik.jpg";
import austinImg from "../../assets/media/Images/austin.jpg";
const teamMembers = [
  {
    id: "cfo",
    name: "Nikhil Kamath",
    title: "Co-founder & CFO",
    img: NikhilImg,
    bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
  },
  {
    id: "cto",
    name: "Kailash Nadh",
    title: "CTO",
    img: kailashImg,
    bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
  },
  {
    id: "coo",
    name: "Venu Pal",
    title: "COO",
    img: venuImg,
    bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.",
  },
  {
    id: "cco",
    name: "Hanan Delvi",
    title: "CCO",
    img: hananImg,
    bio: "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.",
  },
  {
    id: "director",
    name: "Seema Patil",
    title: "Director",
    img: seemaImg,
    bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.",
  },
  {
    id: "chief-education",
    name: "Karthik Rangappa",
    title: "Chief of Education",
    img: karthikImg,
    bio: 'Karthik "Guru" Rangappa single handedly wrote Varsity, Zerodha\'s massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.',
  },
  {
    id: "strategy-director",
    name: "Austin Prakesh",
    title: "Director Strategy",
    img: austinImg,
    bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.",
  },
];

function Team() {
  const [showBio, setShowBio] = useState({});

  const handleClick = (id) => {
    setShowBio((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="team">
      <div className="container team-container">
        <div className="row team-row">
          {teamMembers.map((member) => (
            <div
              className="col-md-4 col-sm-6 col-12 team-col  "
              key={member.id}
            >
              <div className="card team-card">
                <img
                  src={member.img}
                  className="team-img card-img-top"
                  alt={member.title}
                />
                <div className="card-body team-card-body text-center">
                  <h5 className="card-title team-card-title">{member.name}</h5>
                  <p className="card-text team-card-text">{member.title}</p>
                </div>
                <div className="team-card-collapse">
                  <p className="d-inline-flex gap-1 team-card-btn">
                    <a
                      className="team-bio-collapse bio"
                      onClick={() => handleClick(member.id)}
                      role="button"
                      aria-expanded={showBio[member.id] || false}
                    >
                      Bio{" "}
                      {showBio[member.id] ? (
                        <i className="fa-solid fa-chevron-up"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-down"></i>
                      )}
                    </a>
                  </p>
                  {showBio[member.id] && (
                    <div className="card card-body collapse-team-text">
                      <p>{member.bio}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
