const axios = require("axios");

const calculateRunningTime = require("./utils/calculateRunningTime");
const linksArray = require("./utils/linksArray");

let startTime = new Date();

const executeRequest = (url) => {
  setInterval(async () => {
    try {
      const response = await axios.get(url);

      console.log(
        `Success req to ${url}. Status: ${
          response.status
        }. ${calculateRunningTime(startTime, new Date())}`
      );
    } catch (error) {
      console.log(
        `Failed req to ${url}. Status: ERROR. ${calculateRunningTime(
          startTime,
          new Date()
        )}`
      );
    }
  }, 50);
};

linksArray.forEach((link) => executeRequest(link));
