import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      image: "/images/CTO.png",
      name: "Name",
      role: "CTO",
    },
    {
      image: "/images/cmo.jpg",
      name: "Name",
      role: "CMO",
    },
    {
      image: "/images/project-manage.jpg",
      name: "Name",
      role: "Project Manager",
    },
    {
      image: "/images/developer.jpg",
      name: "Name",
      role: "Web Developer",
    },
    {
      image: "/images/developer.jpg",
      name: "Name",
      role: "Web Developer",
    },
    {
      image: "/images/developer.jpg",
      name: "Name",
      role: "Web Developer",
    },
    {
      image: "/images/mobile-app-developer.jpg",
      name: "Name",
      role: "Mobile Designer",
    },
    {
      image: "/images/designer.png",
      name: "Name",
      role: "UI/UX Designer",
    },
    {
      image: "/images/digital-marketing.png",
      name: "Name",
      role: "Digital Marketer",
    },
    {
      image: "/images/content-marketer.png",
      name: "Name",
      role: "Content Marketer",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-text">
        <h2>اعضای تیم</h2>
        <div className="team-btn-container">
          <a className="team-btn">درباره ی مجموعه</a>
        </div>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h2 className="team-name">{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
