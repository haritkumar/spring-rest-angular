# spring-rest-angular
Spring Boot Rest APIs with Angular web app

### Start application using docker compose
```sh
docker-compose up
```

### Access Application

- Angular app
`http://localhost:4200/`

- APIs Server
`http://localhost:5000/`

Use `admin/admin` to sign in

### Employee create payload
```json
{
  "dateOfJoining": "2021-01-10",
  "dept": 1,
  "firstName": "Anshu",
  "lastName": "Chadda",
  "salary": 100000
}
```