This is the source code to Cody Reading's public website: https://codyreading.github.io/. Thanks to Towaki Takikawa for the template and [source code](https://github.com/tovacinni/research-website-template).

## Prerequisites

First, install Node.js and npm through the [Node.js official website](https://nodejs.org/).

Verify installation by running:

```bash
node --version
npm --version
```

## Installation

1. Fork the repository

2. Clone the repository

   ```bash
   git clone [your-repository-url]
   cd [repository-name]
   ```

3. Install dependencies

   Inside the repository, run:

   ```bash
   npm install
   ```

## Running the Application

1. To start the development server, run (in the repository directory):

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying onto GitHub Pages

1. Fork or clone this repo and push to your own repository at `[your-github-username].github.io`.

2. In your repository settings, ensure the repository name matches `[your-github-username].github.io` if you want it to be your main GitHub Pages site.

3. Push your changes to the main branch.

4. Go to the GitHub page for your repository and go to `Settings` then `Pages`. If you set Source to be `GitHub Actions`, it should suggest you a build script for Next.js.

5. Commit the build script and see things building.

Your site should now be live at `https://[your-github-username].github.io/`.