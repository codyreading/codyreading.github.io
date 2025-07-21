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
    date: "July 2024 - Present",
    title: "Senior Researcher",
    company: "Huawei Noah's Ark Lab",
    description:
      "Built indoor mobile robotic pipelines to enable manipulation and navigation, involving implementation of methods in 3D scene graph estimation, segmentation, SLAM, path planning, and control.",
    companyUrl: "https://www.noahlab.com.hk/#/home",
  },
  {
    date: "Sept. 2023 - April 2024",
    title: "3D Content Creation Researcher",
    company: "Simon Fraser University",
    description:
      "Implemented novel techniques in 3D content creation and generative models, involving optimizing NeRF and 3D Gaussian representations with diffusion guidance.",
    companyUrl: "https://www.sfu.ca/",
  },
  {
    date: "Jan. 2022 - Aug. 2023",
    title: "Machine Learning Research Associate ",
    company: "MARZ",
    description:
      "Developed a facial de-aging tool Vanity AI designed for VFX applications, achieving 300x speed up compared to traditional VFX workflows.",
    companyUrl: "https://monstersaliensrobotszombies.com/",
  },
  {
    date: "Sept. 2019 - Dec. 2021",
    title: "3D Perception Researcher",
    company: "University of Toronto",
    description:
      "Developed methodologies in autonomous vehicle 3D perception, achieving 1st and 2nd place on 3D monocular object detection and 3D multi-object tracking benchmarks respectively.",
    companyUrl: "https://www.utoronto.ca/",
  },
  {
    date: "Jan. 2018 - Aug. 2018",
    title: "Software Engineer (Autonomous Driving)",
    company: "NVIDIA Corporation",
    description:
      "Integrated a vehicle trajectory generation library within the NVIDIA DriveWorks SDK using C++ to generate a sequence of vehicle poses from GPS, IMU, and CAN sensor data.",
    companyUrl: "https://www.nvidia.com/en-us/",
  },
  {
    date: "May 2017 - Aug. 2017",
    title: "Semantic Segmentation Research Co-op",
    company: "University of Waterloo",
    description:
      "Developed semantic segmentation training infrastructure to support unified training of the SegNet and FCN methods on the Cityscapes, Playing-for-data, and Synthia datasets.",
    companyUrl: "https://uwaterloo.ca/",
  },
];
