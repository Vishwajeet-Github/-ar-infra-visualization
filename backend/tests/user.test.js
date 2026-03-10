const api = require("../test-utils/testServer");
const { generateUser } = require("../test-utils/mockData");

test("should create user", async () => {

  const user = generateUser();

  const res = await api
    .post("/users")
    .send(user);

  expect(res.statusCode).toBe(201);
});