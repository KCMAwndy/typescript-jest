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
    it("should return [0, 0, 0, 0] for merge([0], [0, 0], [0])", function () {
        expect((0, index_1.merge)([0], [0, 0], [0])).toStrictEqual([0, 0, 0, 0]);
    });
    it("should return [100, 101, 200, 201, 300, 400, 500] for merge([100, 200, 300], [101, 201], [500, 400])", function () {
        expect((0, index_1.merge)([100, 200, 300], [101, 201], [500, 400])).toStrictEqual([100, 101, 200, 201, 300, 400, 500]);
    });
    it("should return [-0.9, -0.5, -0.1, 0.5, 0.9] for merge([-0.1], [0.5, 0.9], [-0.5, -0.9])", function () {
        expect((0, index_1.merge)([-0.1], [0.5, 0.9], [-0.5, -0.9])).toStrictEqual([-0.9, -0.5, -0.1, 0.5, 0.9]);
    });
    it("should return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for merge([1, 2, 3], [4, 5, 6], [10, 9, 8, 7, 0])", function () {
        expect((0, index_1.merge)([1, 2, 3], [4, 5, 6], [10, 9, 8, 7, 0])).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("should return [-100, -50, 0, 0, 50, 100, 100, 150, 200, 200, 250] for merge([0, 50, 100], [150, 200], [250, 200, 100, 0, -50, -100])", function () {
        expect((0, index_1.merge)([0, 50, 100], [150, 200], [250, 200, 100, 0, -50, -100])).toStrictEqual([-100, -50, 0, 0, 50, 100, 100, 150, 200, 200, 250]);
    });
    it("should return [-15, -13, -11, -10, -9, -8, -5] for merge([-10, -8, -5], [-15, -13, -11], [-9])", function () {
        expect((0, index_1.merge)([-10, -8, -5], [-15, -13, -11], [-9])).toStrictEqual([-15, -13, -11, -10, -9, -8, -5]);
    });
    it("should return [0, 1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6] for merge([1, 2, 3], [4, 5, 6], [6, 5, 4, 3, 3, 0])", function () {
        expect((0, index_1.merge)([1, 2, 3], [4, 5, 6], [6, 5, 4, 3, 3, 0])).toStrictEqual([0, 1, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6]);
    });
    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31] for merge([2, 3, 5, 7], [11, 13, 17], [31, 29, 23, 19])", function () {
        expect((0, index_1.merge)([2, 3, 5, 7], [11, 13, 17], [31, 29, 23, 19])).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
    });
    it("should return [-5, -3, -1, 0, 1, 3, 5] for merge([-5, -1, 3], [0, 1], [-3, -5])", function () {
        expect((0, index_1.merge)([-5, -1, 3], [0, 1], [-3, -5])).toStrictEqual([-5, -5, -3, -1, 0, 1, 3]);
    });
    it("should return [100, 150, 200, 250, 300, 350, 400] for merge([100, 200, 300], [150, 250, 350], [400])", function () {
        expect((0, index_1.merge)([100, 200, 300], [150, 250, 350], [400])).toStrictEqual([100, 150, 200, 250, 300, 350, 400]);
    });
    it("should return [-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50] for merge([0, 10, 20], [30, 40, 50], [-10, -20, -30, -40, -50])", function () {
        expect((0, index_1.merge)([0, 10, 20], [30, 40, 50], [-10, -20, -30, -40, -50])).toStrictEqual([-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50]);
    });
    it("should return [-1.0, -0.5, 0.0, 1.0, 1.0, 1.5, 2.0, 2.0, 2.5, 3.0, 3.5] for merge([1.0, 1.5, 2.0], [2.5, 3.0], [3.5, 2.0, 1.0, 0.0, -0.5, -1.0])", function () {
        expect((0, index_1.merge)([1.0, 1.5, 2.0], [2.5, 3.0], [3.5, 2.0, 1.0, 0.0, -0.5, -1.0])).toStrictEqual([-1.0, -0.5, 0.0, 1.0, 1.0, 1.5, 2.0, 2.0, 2.5, 3.0, 3.5]);
    });
    it("should return [0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65] for merge([0.25], [0.55, 0.65], [0.45, 0.35, 0.25, 0.15])", function () {
        expect((0, index_1.merge)([0.25], [0.55, 0.65], [0.45, 0.35, 0.25, 0.15])).toStrictEqual([0.15, 0.25, 0.25, 0.35, 0.45, 0.55, 0.65]);
    });
    it("should return [1.11, 1.11, 2.22, 3.33, 3.33, 4.44, 4.44, 5.55, 5.55, 6.66, 7.77] for merge([1.11, 3.33, 5.55], [2.22, 4.44, 6.66], [7.77, 5.55, 4.44, 3.33, 1.11])", function () {
        expect((0, index_1.merge)([1.11, 3.33, 5.55], [2.22, 4.44, 6.66], [7.77, 5.55, 4.44, 3.33, 1.11])).toStrictEqual([1.11, 1.11, 2.22, 3.33, 3.33, 4.44, 4.44, 5.55, 5.55, 6.66, 7.77]);
    });
    it("should return [2, 4, 4, 5, 6, 6] for merge([], [2, 4, 6], [6, 5, 4])", function () {
        expect((0, index_1.merge)([], [2, 4, 6], [6, 5, 4])).toStrictEqual([2, 4, 4, 5, 6, 6]);
    });
    it("should return [0.5, 1.5, 2.5, 3.5, 4.5] for merge([0.5], [], [4.5, 3.5, 2.5, 1.5])", function () {
        expect((0, index_1.merge)([0.5], [], [4.5, 3.5, 2.5, 1.5])).toStrictEqual([0.5, 1.5, 2.5, 3.5, 4.5]);
    });
    it("should return [-1, 0, 1] for merge([-1, 0, 1], [], [])", function () {
        expect((0, index_1.merge)([-1, 0, 1], [], [])).toStrictEqual([-1, 0, 1]);
    });
    it("should return [0.1, 0.2, 0.3] for merge([], [0.1, 0.2, 0.3], [])", function () {
        expect((0, index_1.merge)([], [0.1, 0.2, 0.3], [])).toStrictEqual([0.1, 0.2, 0.3]);
    });
    it("should return [1.1, 2.2, 3.3] for merge([1.1, 2.2, 3.3], [], [])", function () {
        expect((0, index_1.merge)([1.1, 2.2, 3.3], [], [])).toStrictEqual([1.1, 2.2, 3.3]);
    });
    it("should return [3, 4, 5] for merge([3, 5], [4], [])", function () {
        expect((0, index_1.merge)([3, 5], [4], [])).toStrictEqual([3, 4, 5]);
    });
    it("should return [0.5, 2.5] for merge([0.5], [], [2.5])", function () {
        expect((0, index_1.merge)([0.5], [], [2.5])).toStrictEqual([0.5, 2.5]);
    });
    it("should return [1.11, 2.22, 3.33] for merge([], [2.22], [3.33, 1.11])", function () {
        expect((0, index_1.merge)([], [2.22], [3.33, 1.11])).toStrictEqual([1.11, 2.22, 3.33]);
    });
    it("should return [-6, -5, -4, -4, -3, -2, -1] for merge([-7, -5, -3], [-4, -2], [-1, -4])", function () {
        expect((0, index_1.merge)([-7, -5, -3], [-4, -2], [-1, -4])).toStrictEqual([-7, -5, -4, -4, -3, -2, -1]);
    });
    it("should return [-5, -4, -4, -3, -2, -1] for merge([-5, -3], [-4, -2], [-1, -4])", function () {
        expect((0, index_1.merge)([-5, -3], [-4, -2], [-1, -4])).toStrictEqual([-5, -4, -4, -3, -2, -1]);
    });
    it("should return [-1.1, -0.2, 0.3] for merge([-1.1, -0.2, 0.3], [], [])", function () {
        expect((0, index_1.merge)([-1.1, -0.2, 0.3], [], [])).toStrictEqual([-1.1, -0.2, 0.3]);
    });
    it("should return [-3.3, -2.2, -1.1] for merge([], [-2.2], [-1.1, -3.3])", function () {
        expect((0, index_1.merge)([], [-2.2], [-1.1, -3.3])).toStrictEqual([-3.3, -2.2, -1.1]);
    });
    it("should return [0, 1, 2, 3] for merge([2, 3], [1], [0])", function () {
        expect((0, index_1.merge)([2, 3], [1], [0])).toStrictEqual([0, 1, 2, 3]);
    });
    it("should return [1.5, 2.5, 3.5] for merge([1.5], [3.5, 2.5], [])", function () {
        expect((0, index_1.merge)([1.5], [2.5, 3.5], [])).toStrictEqual([1.5, 2.5, 3.5]);
    });
    it("should return [-1.11, -0.22, 0.33] for merge([], [-0.22], [0.33, -1.11])", function () {
        expect((0, index_1.merge)([], [-0.22], [0.33, -1.11])).toStrictEqual([-1.11, -0.22, 0.33]);
    });
    it("should return [-3, -2, -1, 0, 1, 2, 3] for merge([-3, -1], [-2, 0, 2], [3, 1])", function () {
        expect((0, index_1.merge)([-3, -1], [-2, 0, 2], [3, 1])).toStrictEqual([-3, -2, -1, 0, 1, 2, 3]);
    });
    it("should return [-6.6, -5.5, -4.4, -3.3, -2.2, -1.1, 0, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6] for merge([-6.6, -4.4, -2.2, 0, 2.2, 4.4], [-5.5, -3.3, -1.1, 1.1, 3.3, 5.5], [6.6])", function () {
        expect((0, index_1.merge)([-6.6, -4.4, -2.2, 0, 2.2, 4.4], [-5.5, -3.3, -1.1, 1.1, 3.3, 5.5], [6.6]))
            .toStrictEqual([-6.6, -5.5, -4.4, -3.3, -2.2, -1.1, 0, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6]);
    });
    it("should return [-2, -1, 0, 1, 2] for merge([-1, 1], [-2, 0, 2], [])", function () {
        expect((0, index_1.merge)([-1, 1], [-2, 0, 2], [])).toStrictEqual([-2, -1, 0, 1, 2]);
    });
    it("should return [-1.1, -0.5, 0, 0.5, 0.5, 1, 1.1] for merge([-0.5, 0, 0.5], [0.5, 1.1], [1, -1.1])", function () {
        expect((0, index_1.merge)([-0.5, 0, 0.5], [0.5, 1.1], [1, -1.1])).toStrictEqual([-1.1, -0.5, 0, 0.5, 0.5, 1, 1.1]);
    });
    it("should return [-3.5, -2.5, -2.1, -1.5, -0.5, 0, 1, 1.5, 2, 3, 4, 5, 6] for merge([-2.5, -0.5, 1, 3], [0, 1.5, 4], [6, 5, 2, -1.5, -2.1, -3.5])", function () {
        expect((0, index_1.merge)([-2.5, -0.5, 1, 3], [0, 1.5, 4], [6, 5, 2, -1.5, -2.1, -3.5]))
            .toStrictEqual([-3.5, -2.5, -2.1, -1.5, -0.5, 0, 1, 1.5, 2, 3, 4, 5, 6]);
    });
    it("should return [-0.1, 0, 0.1, 0.5, 1, 1.5, 2, 3, 4.5] for merge([0, 0.5, 1.5, 3], [0.1, 1, 4.5], [2, -0.1])", function () {
        expect((0, index_1.merge)([0, 0.5, 1.5, 3], [0.1, 1, 4.5], [2, -0.1]))
            .toStrictEqual([-0.1, 0, 0.1, 0.5, 1, 1.5, 2, 3, 4.5]);
    });
    it("should return [-4.5, -3.5, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6] for merge([-3, -1, 1, 3], [-4.5, -2, 0, 2, 4], [6, 5, 2, -2, -3.5])", function () {
        expect((0, index_1.merge)([-3, -1, 1, 3], [-4.5, -2, 0, 2, 4], [6, 5, 2, -2, -3.5]))
            .toStrictEqual([-4.5, -3.5, -3, -2, -2, -1, 0, 1, 2, 2, 3, 4, 5, 6]);
    });
    it("should return [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for merge([-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10], [-9, -7, -5, -3, -1, 1, 3, 5, 7, 9], [])", function () {
        expect((0, index_1.merge)([-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10], [-9, -7, -5, -3, -1, 1, 3, 5, 7, 9], []))
            .toStrictEqual([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("should return [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5] for merge([-5, -3, -1, 1, 3, 5], [-4, -2, 0, 2, 4], [])", function () {
        expect((0, index_1.merge)([-5, -3, -1, 1, 3, 5], [-4, -2, 0, 2, 4], [])).toStrictEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
    });
    it("should return [0, 0.5, 1.5, 2, 2.5, 3, 4] for merge([0.5, 1.5, 2.5], [2, 3, 4], [0])", function () {
        expect((0, index_1.merge)([0.5, 1.5, 2.5], [2, 3, 4], [0])).toStrictEqual([0, 0.5, 1.5, 2, 2.5, 3, 4]);
    });
    it("should return [-2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9] for merge([-2, 0, 2, 4], [1, 3, 5, 7, 9], [8, 6])", function () {
        expect((0, index_1.merge)([-2, 0, 2, 4], [1, 3, 5, 7, 9], [8, 6])).toStrictEqual([-2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("should return [3, 4, 4.5, 5, 5.5, 6] for merge([3, 5], [4, 6], [5.5, 4.5])", function () {
        expect((0, index_1.merge)([3, 5], [4, 6], [5.5, 4.5])).toStrictEqual([3, 4, 4.5, 5, 5.5, 6]);
    });
    it("should return [0, 0.5, 1, 1.5, 2] for merge([1], [0.5, 2], [1.5, 0])", function () {
        expect((0, index_1.merge)([1], [0.5, 2], [1.5, 0])).toStrictEqual([0, 0.5, 1, 1.5, 2]);
    });
    it("should return [-10, -9, -8, -7, -6, -5, -5, -4, -3, -3, -2, -1, -1, 0] for merge([-5, -3, -1], [-10, -8, -6, -4, -2, 0], [-1, -3, -5, -7, -9])", function () {
        expect((0, index_1.merge)([-5, -3, -1], [-10, -8, -6, -4, -2, 0], [-1, -3, -5, -7, -9])).toStrictEqual([-10, -9, -8, -7, -6, -5, -5, -4, -3, -3, -2, -1, -1, 0]);
    });
});
