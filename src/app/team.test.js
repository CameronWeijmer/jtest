import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

const teamMembers = [
  {
    firstname: "Julia",
    lastname: "Meier",
    position: "Recruiting Specialist",
    age: 29,
    gender: "female",
  },
  {
    firstname: "Sandra",
    lastname: "Müller",
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
    age: 26,
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

test("should render the Page component correctly", () => {
  render(<Page />);
  for (let members of teamMembers) {
    expect(
      screen.getByText(`${members.firstname} ${members.lastname}`)
    ).toBeInTheDocument(),
      expect(screen.getByText(`${members.position}`)).toBeInTheDocument(),
      // expect(screen.getByText(`${members.age}`)).toBeInTheDocument();
      expect(screen.getByText(`Not in Document`)).toBeInTheDocument();
}
});
