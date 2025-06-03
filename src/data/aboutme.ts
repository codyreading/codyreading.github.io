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
    "I am a 3D computer vision researcher, interested in perception, reconstruction, and generation. and. I aim to develop tools that understand our surrounding 3D world. <br><br> I received my master's degree from the  <a href='https://www.utoronto.ca/'>University of Toronto</a> supervised by <a href='https://www.trailab.utias.utoronto.ca/stevenwaslander'>Steven Waslander</a>, and received my bachelor's degree from the  <a href='https://uwaterloo.ca/'>University of Waterloo</a>. I worked at <a href='https://monstersaliensrobotszombies.com/'>MARZ</a> developing <a href='https://monstersaliensrobotszombies.com/vanityai'>Vanity AI</a>, an AI solution for facial editing for VFX, and at <a href='https://www.noahlab.com.hk/#/home'>Huawei Noah’s Ark Lab</a> working on indoor mobile robotic applications.",
  email: "codyreading@gmail.com",
  imageUrl: "/images/CodyReading.jpeg",
  googleScholarUrl: "https://scholar.google.com/citations?user=VqvADvQAAAAJ&hl=en",
  githubUsername: "codyreading",
  linkedinUsername: "codyreading",
  twitterUsername: "code_red7777",
  cvUrl: "/pdfs/Cody_Reading_Resume.pdf",
  institutionUrl: "codyreading@gmail.com",
};
