export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Cody Reading",
  title: "3D Computer Vision Researcher",
  institution: "",
  // Note that links work in the description
  description:
    "I am a 3D computer vision researcher, interested in 3D perception, 3D reconstruction, and 3D generation. and. I aim to develop tools that understand our surrounding 3D world.",
    // I'm a final-year <a href='https://www.stanford.edu'>PhD candidate</a> working at the intersection of causal inference and machine learning. My research focuses on developing robust, interpretable systems that can reason about cause and effect in complex environments.",
  email: "codyreading@gmail.com",
  imageUrl:
    "https://codyreading.github.io/images/CodyReading.jpeg",
  googleScholarUrl: "https://scholar.google.com/citations?user=VqvADvQAAAAJ&hl=en",
  githubUsername: "janesmith",
  linkedinUsername: "janesmith",
  twitterUsername: "code_red7777",
  cvUrl: "https://codyreading.github.io/data/CodyReading-Resume.pdf",
  institutionUrl: "codyreading@gmail.com",
  // altName: "",
  // secretDescription: "I like dogs.",
};
