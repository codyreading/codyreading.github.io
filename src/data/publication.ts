export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "CVPR",
    title: "Bayes' Rays: Uncertainty Quantification for Neural Radiance Fields",
    authors: "Lily Goli, Cody Reading, Silvia Sellán, Alec Jacobson, Andrea Tagliasacchi",
    projectUrl: "https://bayesrays.github.io/",
    paperUrl: "https://arxiv.org/abs/2309.03185",
    codeUrl: "https://github.com/BayesRays/BayesRays",
    tldr: "A post-hoc framework to evaluate uncertainty in any pre-trained NeRF without modifying the training process.",
    award: "Highlight",
    imageUrl: "/images/bayes_rays.png"
  },
  {
    year: "2024",
    conference: "CVPR",
    title: "BANF: Band-limited Neural Fields for Levels of Detail Reconstruction",
    authors: "Ahan Shabanov, Shrisudhan Govindarajan, Cody Reading, Lily Goli, Daniel Rebain, Kwang Moo Yi, Andrea Tagliasacchi",
    tldr: "A method for band-limited frequency decomposition in neural fields",
    projectUrl: "https://theialab.github.io/banf",
    paperUrl: "https://arxiv.org/abs/2404.13024",
    codeUrl: "https://github.com/theialab/banf",
    imageUrl: "/images/banf.png"
  },
  {
    year: "2023",
    conference: "CRV",
    title: "InterTrack: Interaction Transformer for 3D Multi-Object Tracking",
    authors: "John Willes, Cody Reading, Steven Waslander",
    tldr: "Interaction Transformer improves discriminative feature learning and object association",
    paperUrl: "https://arxiv.org/abs/2208.08041",
    videoUrl: "https://www.youtube.com/watch?v=81hZcZcSsBA&ab_channel=trailab",
    award: "Oral Presentation",
    imageUrl: "/images/intertrack.png"
  },
  {
    year: "2021",
    conference: "CVPR",
    title: "Categorical Depth Distribution Network for Monocular 3D Object Detection",
    authors: "Cody Reading, Ali Harakeh, Julia Chae, Steven Waslander",
    tldr: "Estimating categorical depth distributions results in accurate image feature projection into 3D",
    projectUrl: "https://trailab.github.io/CaDDN/",
    paperUrl: "https://arxiv.org/abs/2103.01100",
    codeUrl: "https://github.com/TRAILab/CaDDN",
    videoUrl: "https://www.youtube.com/watch?v=E3NoO_c6tPg&t=3s&ab_channel=trailab",
    award: "Oral Presentation",
    imageUrl: "/images/caddn.png"
  },
  {
    year: "2018",
    conference: "ITSC",
    title: "Unlimited Road-scene Synthetic Annotation (URSA) Dataset",
    authors: "Matt Angus, Mohamed ElBalkini, Samin Khan, Ali Harakeh, Oles Andrienko, Cody Reading, Steven Waslander, Krzysztof Czarnecki",
    tldr: "Synthetic dataset generation for autonomous vehicle semantic segmentation based on GTA V",
    projectUrl: "https://uwaterloo.ca/waterloo-intelligent-systems-engineering-lab/ursa",
    paperUrl: "https://arxiv.org/abs/1807.06056",
    videoUrl: "https://www.youtube.com/watch?v=Z6q1x-IGj_4&ab_channel=MohamedElBalkini",
    imageUrl: "/images/ursa.png"
  },
];
