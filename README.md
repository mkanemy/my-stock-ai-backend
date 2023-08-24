# my-stock-ai-backend

Backend is deployed at production link - https://my-stock-ai-backend.vercel.app/

### Building and Running:
- To run this project run - npm run start:dev
- To build this project for production run - npm run build

### CI/CD
- Analysis pipeline run on PR's will test all the code, then use SonarQube to analyze the code
- I use vercel to deploy environments for all PRs and then promote when they are merged

### Swagger
http://localhost:8000/api-docs/#/