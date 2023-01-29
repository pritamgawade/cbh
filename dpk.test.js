const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return stringified candidate if input is not a string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 2 });
    expect(trivialKey).toBe("2");
  });

  it("Should return candidate if input is given", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "2" });
    expect(trivialKey).toBe("2");
  });

  it("Should return Hash object if input does not has partitionKey", () => {
    const hashObj =
      "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862";
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe(hashObj);
  });
});
