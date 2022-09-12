const supertest = require("supertest");

const createApp = require("./app.js");

const app = createApp();

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/html");

  expect(response.body).toEqual("Welcome to the World Wide Web!");
});

// this integration test fails because our app expects a json response. But even if we set "application/json" as the content-type, the test fails again because of the response.body
