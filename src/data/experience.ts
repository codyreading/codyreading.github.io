export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "July 2024 - June 2025",
    title: "Senior Researcher",
    company: "Huawei Noah's Ark Lab",
    description:
      "Built indoor mobile robotic applications to enable manipulation and navigation",
    companyUrl: "https://www.noahlab.com.hk/#/home",
  },
  {
    date: "Jan. 2022 - Aug. 2023",
    title: "Machine Learning Research Associate ",
    company: "MARZ",
    description:
      "Developed a facial de-aging tool Vanity AI designed for VFX applications, achieving 300x speed up compared to traditional VFX workflows.",
    companyUrl: "https://monstersaliensrobotszombies.com/",
  },
];
