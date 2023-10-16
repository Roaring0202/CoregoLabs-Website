import React from "react";
import {
  MemberDescription,
  MemberName,
  MemberRole,
  TeamContainer,
  TeamMemberImage,
  TeamMembers,
} from "./styles";

interface Props {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const TeamMember = ({ name, role, description, imageUrl }: Props) => (
  <div className="team-member">
    <TeamMemberImage src={`/img/${imageUrl}`} alt={name} />
    <MemberName>{name}</MemberName>
    <MemberRole>{role}</MemberRole>
    <MemberDescription>{description}</MemberDescription>
  </div>
);

const Team = () => {
  const founders = [
    {
      name: "Julian Saks",
      role: "Co-Founder",
      description: "Julian is the President of Texas Blockchain and a third-year student at the University of Texas at Austin. He has scaled Texas Blockchain to one of the largest university blockchain clubs in the United States and the world. Julian is also a recent Founder alumni of the Polkadot Blockchain Academy (PBA) held in Berkeley.",
      imageUrl: "julian.jpeg",
    },
    {
      name: "Sergej Sakac",
      role: "Co-Founder",
      description: "Sergej is a member of the Polkadot Fellowship. He has been an external core contributor on substrate and polkadot for more than a year now. Sergej is also a recent Engineering alumni of the Polkadot Blockchain Academy (PBA) held in Berkeley.",
      imageUrl: "sergej.jpg",
    },
  ];

  const teamMembers: Props[]  = [
    {
      name: "Oliver Lim",
      role: "Full-stack developer",
      description: "Oliver is a full stack blockchain developer who was involved in 3 projects granted by the Web3 Foundation.",
      imageUrl: "Oliver.jpg",
    },
    /*{
      name: "NB Team",
      role: "Designer",
      description: "Innovation and design company",
      imageUrl: "nbteam.jpeg"
    }*/
  ]

  return (
    <TeamContainer>
      <h2>Team</h2>
      <TeamMembers className="founders">
        {founders.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </TeamMembers>
      {teamMembers.length > 0 &&
        <TeamMembers className="team-members">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              imageUrl={member.imageUrl}
            />
          ))}
        </TeamMembers>
      }
    </TeamContainer>
  );
};

export default Team;
