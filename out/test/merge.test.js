"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe("test merge function", function () {
    it("should return [1, 2, 3, 4, 4, 5, 5, 6, 6] for merge([1, 3, 5], [2, 4, 6], [6, 5, 4])", function () {
        expect((0, index_1.merge)([1, 3, 5], [2, 4, 6], [6, 5, 4])).toStrictEqual([1, 2, 3, 4, 4, 5, 5, 6, 6]);
    });
    it("should return [-2, -1, 0, 1, 3, 5, 7] for merge([3, 5, 7], [0, 1], [-2, -1])", function () {
        expect((0, index_1.merge)([3, 5, 7], [0, 1], [-1, -2])).toStrictEqual([-2, -1, 0, 1, 3, 5, 7]);
    });
    it("should return [0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5] for merge([0.5], [5.5, 6.5], [4.5, 3.5, 2.5, 1.5])", function () {
        expect((0, index_1.merge)([0.5], [5.5, 6.5], [4.5, 3.5, 2.5, 1.5])).toStrictEqual([0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5]);
    });
    it("should return [] for merge([], [], [])", function () {
        expect((0, index_1.merge)([], [], [])).toStrictEqual([]);
    });
    it("should return [1] for merge([1], [], [])", function () {
        expect((0, index_1.merge)([1], [], [])).toStrictEqual([1]);
    });
    it("should return [2, 3, 4] for merge([2], [3], [4])", function () {
        expect((0, index_1.merge)([2], [3], [4])).toStrictEqual([2, 3, 4]);
    });
    it("should return [2, 3, 4, 5, 6] for merge([2, 4], [3, 5], [6])", function () {
        expect((0, index_1.merge)([2, 4], [3, 5], [6])).toStrictEqual([2, 3, 4, 5, 6]);
    });
});
