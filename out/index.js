"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection_1, collection_2, collection_3) {
    var result = [];
    var i = 0; // Pointer for collection1
    var j = 0; // Pointer for collection2
    var k = collection_3.length - 1; // Pointer for collection3
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        var value1 = i < collection_1.length ? collection_1[i] : Number.POSITIVE_INFINITY;
        var value2 = j < collection_2.length ? collection_2[j] : Number.POSITIVE_INFINITY;
        var value3 = k >= 0 ? collection_3[k] : Number.POSITIVE_INFINITY;
        var smallest = Math.min(value1, value2, value3);
        result.push(smallest);
        if (smallest === value1) {
            i++;
        }
        else if (smallest === value2) {
            j++;
        }
        else {
            k--;
        }
    }
    return result;
}
exports.merge = merge;
