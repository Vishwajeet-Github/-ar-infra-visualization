const { clearDatabase } = require("../test-utils/dbHelper");

beforeEach(async () => {
  await clearDatabase();
});