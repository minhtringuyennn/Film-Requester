# Film Requester

A web application for requesting films from a Jellyfin server.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version recommended)
- Yarn package manager
- dotenvx (for environment variable management)

## Getting Started

1. Clone the repository:

2. Install dotenvx:

   ```bash
   # Follow the installation instructions at:
   https://dotenvx.com/docs/install
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Set up environment variables:

   - Refer current .env file for the required variables.
   - Use dotenvx to set the variables.

5. Start the development server:

   ```bash
   yarn dev
   ```

6. Open your browser and visit `http://localhost:5173` to view the application.

## Available Scripts

- `yarn dev`: Start the development server
- `yarn build`: Build the production-ready application
- `yarn lint`: Run ESLint to check for code quality issues
- `yarn preview`: Preview the built application locally

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
