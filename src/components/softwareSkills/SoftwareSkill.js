import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            const icon =
              skills.iconDark && isDark ? skills.iconDark : skills.icon;

            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <a alt={skills.skillName} href={skills.url}>
                  <img
                    src={icon}
                    alt={skills.skillName}
                    width={skills.width ?? "60"}
                    height={skills.height}
                  />
                </a>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
