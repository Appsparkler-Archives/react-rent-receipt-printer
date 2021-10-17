import { getRentReceiptInfo } from "../getRentReceiptInfo";

describe("getRentReceiptsInfo", () => {
  it("should return 1 item in the array", () => {
    const results = getRentReceiptInfo("2021-10-01", 10);
    expect(results.length).toBe(10);
  });

  // it("should return 1");
});
