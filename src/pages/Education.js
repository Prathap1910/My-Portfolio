import React from "react";
import "./Education.css";

function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      school: "MNNIT Allahabad",
      year: "2022 – 2026",
      grade: "CGPA: 8.00",
      desc: "Pursuing my undergraduate degree. Focused on programming, algorithms, and full-stack web development skills.",
    },
    {
      degree: "Higher Secondary (PCM)",
      school: "Radhika Bal Vidya Mandir",
      year: "2019 – 2021",
      grade: "Percentage: 75.2%",
      desc: "Completed senior secondary education with excellence in Physics, Chemistry, and Mathematics.",
    },
    {
      degree: "Secondary School",
      school: "St.John’s School",
      year: "2018 – 2019",
      grade: "Percentage: 85.16%",
      desc: "Completed secondary education, building a strong academic foundation.",
    },
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h2 className="education-title">My Education</h2>
        <p className="education-intro">
          A timeline of my academic milestones and achievements.
        </p>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-box">
                <h3>{edu.degree}</h3>
                <p className="school">{edu.school}</p>
                <p className="year">{edu.year}</p>
                <p className="grade">{edu.grade}</p>
                <p className="desc">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
