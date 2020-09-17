require("dotenv").config({ path: "../.env"});

const app = require("./app");
require("./database");

async function main() {
  try {
    await app.listen(app.get("port"));
    console.log(`Server listening on port ${app.get("port")}`);
  } catch (error) {
    console.error(error);
  }
}

main();
