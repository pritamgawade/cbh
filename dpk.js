const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  console.log("evntttt", event);
  // const TRIVIAL_PARTITION_KEY = "0";
  // const MAX_PARTITION_KEY_LENGTH = 256;
  // let candidate;

  // if (event) {
  //   if (event.partitionKey) {
  //     candidate = event.partitionKey;
  //   } else {
  //     const data = JSON.stringify(event);
  //     candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  //   }
  // }
  // console.log("candidatewwwwwww", candidate);
  // if (candidate) {
  //   if (typeof candidate !== "string") {
  //     console.log("insideee");
  //     candidate = JSON.stringify(candidate);
  //   }
  // } else {
  //   candidate = TRIVIAL_PARTITION_KEY;
  // }

  // if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
  //   candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  // }
  // console.log(typeof candidate);
  // return candidate;
  return getCandidate(event);
};

const getCandidate = (event) => {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }
  return updateCandidate(candidate);
};

const updateCandidate = (candidate) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

//getCandidate

//updateCandidate
// call this in above function

// then call first function in main function given
