import { merge } from "../index";

describe("test merge function", () => {
    it("should return [1, 2, 3, 4, 4, 5, 5, 6, 6] for merge([1, 3, 5], [2, 4, 6], [6, 5, 4])", () => {
      expect(merge([1, 3, 5], [2, 4, 6], [6, 5, 4])).toStrictEqual([1, 2, 3, 4, 4, 5, 5, 6, 6]);
    });

    it("should return [-2, -1, 0, 1, 3, 5, 7] for merge([3, 5, 7], [0, 1], [-2, -1])", () => {
      expect(merge([3, 5, 7], [0, 1], [-1, -2])).toStrictEqual([-2, -1, 0, 1, 3, 5, 7]);
    });

    it("should return [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5] for merge([0.5], [5.5, 6.5], [4.5, 3.5, 2.5, 1.5])", () => {
      expect(merge([0.5], [5.5, 6.5], [4.5, 3.5, 2.5, 1.5])).toStrictEqual([0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5]);
    });

    it("should return [] for merge([], [], [])", () => {
      expect(merge([], [], [])).toStrictEqual([]);
    });
  
    it("should return [1] for merge([1], [], [])", () => {
      expect(merge([1], [], [])).toStrictEqual([1]);
    });
  
    it("should return [2, 3, 4] for merge([2], [3], [4])", () => {
      expect(merge([2], [3], [4])).toStrictEqual([2, 3, 4]);
    });
  
    it("should return [2, 3, 4, 5, 6] for merge([2, 4], [3, 5], [6])", () => {
      expect(merge([2, 4], [3, 5], [6])).toStrictEqual([2, 3, 4, 5, 6]);
    });
});