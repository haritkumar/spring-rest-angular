mvn clean install -f api-server/pom.xml
docker build . -t haritkumar/spring-rest-apis -f api-server/Dockerfile
# docker run -p 5000:5000 haritkumar/spring-rest-apis:latest
cd angular-frontend/
ng build --prod
docker build . -t haritkumar/angular-frontend