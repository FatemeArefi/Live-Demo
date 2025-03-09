import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      image: "/src/assets/images/CTO.png",
      name: " Name",
      role: "CTO",
    },
    {
      image: "/src/assets/images/cmo.jpg",
      name: "Name",
      role: "CMO",
    },
    {
      image: "/src/assets/images/project-manage.jpg",
      name: "Name",
      role: "Project Manager",
    },
    {
      image: "/src/assets/images/developer.jpg",
      name: "Name",
      role: "Web Developer",
    },
    {
      image: "/src/assets/images/developer.jpg",
      name: "Name",
      role: "Web Developer",
    },
    {
      image: "/src/assets/images/developer.jpg",
      name: "Name",
      role: "Web Developer",
    },
    {
      image: "src/assets/images/mobile-app-developer.jpg",
      name: "Name",
      role: "Mobile Designer",
    },
    {
      image: "src/assets/images/designer.png",
      name: "Name",
      role: "UI/UX Designer",
    },
    {
      image: "src/assets/images/digital-marketing.png",
      name: "Name",
      role: "Digital Marketer",
    },
    {
      image: "src/assets/images/content-marketer.png",
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
