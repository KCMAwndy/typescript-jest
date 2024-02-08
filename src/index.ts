export function merge (collection_1: number[], collection_2: number[], collection_3: number[]) :number[]{
  const result: number[] = [];
  let i = 0; // Pointer for collection1
  let j = 0; // Pointer for collection2
  let k = collection_3.length-1; // Pointer for collection3

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    const value1 = i < collection_1.length ? collection_1[i] : Number.POSITIVE_INFINITY;
    const value2 = j < collection_2.length ? collection_2[j] : Number.POSITIVE_INFINITY;
    const value3 = k >= 0 ? collection_3[k] : Number.POSITIVE_INFINITY;

    const smallest = Math.min(value1, value2, value3);
    result.push(smallest);

    if (smallest === value1) {
      i++;
    } else if (smallest === value2) {
      j++;
    } else {
      k--;
    }
  }

  return result;
}    