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
    //imageUrl:
    //  "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    award: "Highlight",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2023",
    conference: "ICML",
    title: "Robust Causal Discovery Under Distribution Shift",
    authors: "Jane Smith, Xue Chen, Sarah Johnson",
    paperUrl: "https://arxiv.org/abs/2302.13095",
    codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
];
