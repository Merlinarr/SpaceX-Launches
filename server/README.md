# SpaceX API Integration Server

## Description

This project is a Node.js server application that integrates the SpaceX API to provide GraphQL endpoints for querying SpaceX launch data. The server is set up with Express, using middleware such as Morgan for logging and CORS for cross-origin requests. It uses GraphQL to structure the API and Axios for handling HTTP requests to the SpaceX API.

## Author

- **Name:** Lin Mei
- **Email:** [linmei.merlin@gmail.com](mailto:linmei.merlin@gmail.com)

## Version

1.0.0

## Keywords

- GraphQL
- Node.js
- SpaceX

## Installation

To set up the project locally:

1. Clone the repository to your local machine.
2. Install the dependencies:
   ```bash
   yarn install
   ```

## Set up

Set up environment variables in a `.env` file, including the `PORT` variable for defining the port on which the server will run.

## Usage

To run the server in development mode:

```bash
npm run dev

## License
MIT License

## Dependencies
- **axios** for HTTP requests
- **express** as the server framework
- **cors** for handling cross-origin requests
- **morgan** for HTTP request logging
- **dayjs** for date handling
- **express-graphql** for serving GraphQL API
- **graphql** for creating GraphQL schemas and resolvers
- **dotenv** for environment variable management
- **nodemon** for automatic server restarting during development

## Contact
For any inquiries or contributions, please contact Lin Mei at the email provided above.
```
