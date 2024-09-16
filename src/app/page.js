import React from "react";
import Link from "next/link";

// Summe-Funktion
export function sum(a, b) {
  return a + b;
}

const teamMembers = [
  {
    firstname: "Julia",
    lastname: "Meier",
    position: "Recruiting Specialist",
    age: 29,
    gender: "female",
  },
  {
    firstname: "Michael",
    lastname: "Schneider",
    position: "HR Manager",
    age: 45,
    gender: "male",
  },
  {
    firstname: "Sandra",
    lastname: "Müller",
    position: "Talent Acquisition Lead",
    age: 38,
    gender: "female",
  },
  {
    firstname: "Tom",
    lastname: "Wagner",
    position: "Senior Recruiter",
    age: 33,
    gender: "male",
  },
  {
    firstname: "Anna",
    lastname: "Schulz",
    position: "Recruitment Coordinator",
    age: 26,
    gender: "female",
  },
];

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>

      <h2>Team Members</h2>
      <div>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>
              <strong>Name:</strong> {member.firstname} {member.lastname}
            </p>
            <p>
              <strong>Position:</strong> {member.position}
            </p>
            <p>
              <strong>Age:</strong> {member.age}
            </p>
            <p>
              <strong>Gender:</strong> {member.gender}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
