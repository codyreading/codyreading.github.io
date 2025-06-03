export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2019 - 2021",
    institution: "University of Toronto",
    degree: "M.A.Sc. in Aerospace Engineering",
    advisor: "Prof. Steven Waslander",
  },
  {
    year: "2013 - 2019",
    institution: "University of Waterloo",
    degree: "B.A.Sc. in Mechatronics Engineering",
  },
];
