function trapWater(arr, n) {
  if (n <= 2) {
    return 0; // यदि ब्लॉकों की संख्या 2 या उससे कम है, तो पानी फंसने की संभावना नहीं है।
  }

  // left_max और right_max arrays को initialize करें
  let left_max = new Array(n).fill(0);
  let right_max = new Array(n).fill(0);

  // left_max array भरें
  left_max[0] = arr[0];
  for (let i = 1; i < n; i++) {
    left_max[i] = Math.max(left_max[i - 1], arr[i]);
  }

  // right_max array भरें
  right_max[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right_max[i] = Math.max(right_max[i + 1], arr[i]);
  }

  // फंसे हुए पानी की गणना करें
  let trapped_water = 0;
  for (let i = 0; i < n; i++) {
    trapped_water += Math.min(left_max[i], right_max[i]) - arr[i];
  }

  return trapped_water;
}

// उदाहरण उपयोग:
let N = 3;
let arr = [7, 9, 9, 9];
let result = trapWater(arr, N);
console.log(result);
