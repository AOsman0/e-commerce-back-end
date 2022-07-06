const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// wrap the connection and the listen in a try catch and init function
const init = async () => {
  try {
    await sequelize.sync({ force: false }).then(() => {
      app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
      });
    });
  } catch (error) {
    console.log("ERROR: " + error);
  }
};

init();
