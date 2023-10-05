import React from "react";
import {
  MemberName,
  TeamContainer,
  TeamMemberImage,
  TeamMembers,
} from "./styles";

interface Props {
  name: string;
  description: string;
  imageUrl: string;
}

const TeamMember = ({ name, description, imageUrl }: Props) => (
  <div className="team-member">
    <TeamMemberImage src={`/img/${imageUrl}`} alt={name} />
    <MemberName>{name}</MemberName>
    <p>{description}</p>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Julian Saks",
      description: "Founder",
      imageUrl: "julian.jpeg",
    },
    {
      name: "Sergej Sakac",
      description: "Co-Founder",
      imageUrl: "sergej.jpeg",
    },
    // Add more team members here
  ];

  return (
    <TeamContainer>
      <h2>Team</h2>
      <TeamMembers className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </TeamMembers>
    </TeamContainer>
  );
};

export default Team;
