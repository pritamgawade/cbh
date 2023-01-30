const utils = require("./utils");

exports.deterministicPartitionKey = (event) => {
  return getCandidate(event);
};

const getCandidate = (event) => {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = utils.getStringifiedString(event);
      candidate = utils.createHashObj(data);
    }
  }
  return updateCandidate(candidate);
};

const updateCandidate = (candidate) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = utils.getStringifiedString(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = utils.createHashObj(candidate);
  }
  return candidate;
};

/*
Created a function getCandidate to retrieve partitionKey from event and passed that candidate to updateCandidate function which then returns modified candidate to the main function deterministicPartitionKey. Differentiating the functions makes the code readable.

Created common functions getStringifiedString and createHashObj which are reusable

*/
