const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Starting app");

const number = 10;

if (isEven(number)) {
  logger(number + " is even");
} else {
  logger(number + " is odd");
}
