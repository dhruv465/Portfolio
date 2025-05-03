# Front-End React Project with Vite

This project is a React-based front-end application built using Vite as the build tool.

## Basic Setup

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository (if you haven't already): (Optional)

   ```bash
   git clone <repository-url>
   cd Front-End
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or if you prefer yarn:

   ```bash
   yarn install
   ```

### Running the Development Server

To start the development server with hot module replacement (HMR), run:

```bash
npm run dev
```

or

```bash
yarn dev
```

This will start the app locally, usually at `http://localhost:3000`. Open this URL in your browser to see the app.

### Building for Production

To build the project for production deployment, run:

```bash
npm run build
```

or

```bash
yarn build
```

The build output will be in the `dist` folder.

### Previewing the Production Build

To locally preview the production build, run:

```bash
npm run preview
```

or

```bash
yarn preview
```

### Making the Site Live (Deployment)

You can deploy the contents of the `dist` folder to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

For example, to deploy on Vercel:

1. Install Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Run the deploy command inside the `Front-End` directory:

   ```bash
   vercel
   ```

Follow the prompts to complete deployment.

## Additional Notes

- The project uses Tailwind CSS for styling.
- Fonts are preloaded for better performance.
- The backend server is separate and should be run independently if needed.

## Troubleshooting

If you encounter issues:

- Ensure Node.js and npm/yarn are up to date.
- Delete `node_modules` and reinstall dependencies.
- Check the console for errors and warnings.

## Contact

For questions or support, please contact the project maintainer.
