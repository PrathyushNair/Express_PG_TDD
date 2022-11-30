const request = require("supertest");
const makeApp = require("../../../app");
const appForTest = makeApp();
const sinon = require("sinon");
const knexCommands = require("../repository/user.repository");


//testing for get data
describe("GET /", () => {
  let query;
  let dataForTest
  beforeEach(() => {
     dataForTest=[
      {
        id: 2,
        name: "user2",
        gender: "female",
        email: "us2@gmail.com",
        password: "qwerty",
        age: 24,
      },
      {
        id: 49,
        name: "user3",
        gender: "female",
        email: "us2@gmail.com",
        password: "qwerty",
        age: 24,
      }
    ]
    query = sinon.stub(knexCommands, "getAllPeopleFromDB").resolves([
      {
        id: 2,
        name: "user2",
        gender: "female",
        email: "us2@gmail.com",
        password: "qwerty",
        age: 24,
      },
      {
        id: 49,
        name: "user3",
        gender: "female",
        email: "us2@gmail.com",
        password: "qwerty",
        age: 24,
      }
    ]);
  });
  afterEach(() => {
    query.restore();
  });
  test("receiving 200 status code", async () => {
    let response = await request(appForTest).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("receiving appropriate message", async () => {
    let response = await request(appForTest).get("/");
    expect(response.body).toEqual({ message: "successful", data: dataForTest });
  });

  test("checking for limit and sort parameter",async()=>{
    let response = await request(appForTest).get("/?limit=2&sort=desc");
    expect(response.body.data.length).toBe(2)
  })
  
});


//testing for posting 
describe("post /postpersonInfo", () => {
  let query;
  beforeEach(() => {
    const user = [
      {
        name: "user100",
        gender: "male",
        email: "user100@gmail.com",
        password: "qwerty456",
        age: 56,
      },
    ];
    query = sinon.stub(knexCommands, "createUserInDB").resolves([]);
  });
  afterEach(() => {
    query.restore();
  });

  //test1

  test("getting 201 status for successful post", async () => {
    let response = await request(appForTest).post("/postpersoninfo").send({
      name: "user100",
      gender: "male",
      email: "user100@gmail.com",
      password: "qwerty456",
      age: 56,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "successful posting", data: [] });
  });


  //test2
  test("gerring error message for posting non json content", async () => {
    let response = await request(appForTest)
      .post("/postpersoninfo")
      .send(
        "crbruyerufverhbfchsrfnuwekrdscjedxjkfcjhffhfh bfhjhffdhcfdhfd vmd nvfdvsf cjfhdsjmfhdhjfhfd kdf jvkd fhvhdfjkvhdkvh"
      );
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: "internal server error" });
  });



  //test3
  test("data types should be as per defined schema",async()=>{
    let response = await request(appForTest).post("/postpersoninfo").send({
      name: 356,
      gender: "male",
      email: 56,
      password: "qwerty456",
      age: 56,
    });
    expect(response.status).toBe(500)
    expect(response.body).toEqual({message:"unsuccessful posting"})
  
    

  })
});
