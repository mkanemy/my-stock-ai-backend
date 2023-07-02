# my-stock-ai-backend

### Building and Running:
- To run this project run - npm run start:dev
- To build this project for production run - npm run build

### CI/CD
- Analysis pipeline run on PR's will test all the code, then use SonarQube to analyze the code

### Jenkins:
- Jenkins is being run using docker with this method referenced https://www.jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/
- Run 'docker build -t myjenkins-blueocean:2.401.2-1 .'
- Run sh dockerRun.sh
- Open localhost:8080
- User: "Admin"
- Password: "password"