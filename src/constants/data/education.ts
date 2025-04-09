interface IEducation {
  startDate: string;
  endDate: string;
  degree: string;
  course: string;
  institution: string;
}

export const education: IEducation[] = [
  {
    startDate: "2018",
    endDate: "2022",
    degree: "Bachelor's Degree",
    course:
      "Bachelor in Science in Computer Science and Information Technology (B.Sc. CSIT)",
    institution: "Mechi Multiple Campus(TU)",
  },
  {
    startDate: "2016",
    endDate: "2018",
    degree: "Academic Degree",
    course: "+2 Science",
    institution: "Kanchanjunga H.S.E.S",
  },
];
