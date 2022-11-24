const request = require("supertest");
const makeApp = require("../../../app");
const appForTest = makeApp();
const sinon = require("sinon");
const knexCommands = require("../repository/user.repository");



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
      },
      {
        id: 51,
        name: "user4",
        gender: "female",
        email: "us2@gmail.com",
        password: "qwerty",
        age: 24,
      },
      {
        id: 1,
        name: "user1",
        gender: "male",
        email: "us1@gmail.com",
        password: "qwertyabc",
        age: 34,
      },
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
      },
      {
        id: 51,
        name: "user4",
        gender: "female",
        email: "us2@gmail.com",
        password: "qwerty",
        age: 24,
      },
      {
        id: 1,
        name: "user1",
        gender: "male",
        email: "us1@gmail.com",
        password: "qwertyabc",
        age: 34,
      },
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
});

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
  test("gerring error message for posting non json content", async () => {
    let response = await request(appForTest)
      .post("/postpersoninfo")
      .send(
        "crbruyerufverhbfchsrfnuwekrdscjedxjkfcjhffhfh bfhjhffdhcfdhfd vmd nvfdvsf cjfhdsjmfhdhjfhfd kdf jvkd fhvhdfjkvhdkvh"
      );
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: "internal server error" });
  });
});
