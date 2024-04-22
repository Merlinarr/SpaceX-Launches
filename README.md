# SpaceX Mission Dashboard & API Integration Server

## Overview

This is a React-based SpaceX mission dashboard web application and a GraphQL server integrated with the SpaceX API.

## Frontend Dashboard Application (spacex-react)

- Built with React, TypeScript, Vite, Apollo Client, and TailwindCSS
- Displays a list of all SpaceX missions with dynamic loading
- Supports searching and filtering missions
- Click on missions to view detailed information
- Interactive components like infinite scrolling and modals

## Backend GraphQL Server (spacex-api-server)

- Based on Node.js and Express
- GraphQL API architecture
- Integrates with the public SpaceX API
- Uses Axios for HTTP requests
- Middleware: morgan (logging), cors (cross-origin)

## Installation and Usage

1. Run `yarn install` in both project directories to install dependencies
2. Frontend: `yarn dev` to start the development server
3. Backend:
  - Set up `.env` environment variables
  - `npm run dev` to start the GraphQL server

## Author

Lin Mei
linmei.merlin@gmail.com

## Contributing

Contributions are welcome! Please submit issues and PRs.

## License

MIT License
