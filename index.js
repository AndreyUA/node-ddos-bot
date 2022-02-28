const axios = require("axios");

const calculateRunningTime = require("./utils/calculateRunningTime");
const linksArray = require("./utils/linksArray");

let startTime = new Date();
const delay = 10;

const executeRequest = async (url) => {
  while (true) {
    try {
      await axios.get(url);

      console.log(
        `Success req to ${url}. Status: SUCCESS. ${calculateRunningTime(
          startTime,
          new Date()
        )}`
      );
    } catch (error) {
      console.log(
        `Failed req to ${url}. Status: ERROR. ${calculateRunningTime(
          startTime,
          new Date()
        )}`
      );
    }

    await new Promise((req) => setInterval(req, delay));
  }
};

linksArray.forEach((link) => executeRequest(link));
