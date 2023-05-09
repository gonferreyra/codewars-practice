/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

1- number of pillars (≥ 1);
2- distance between pillars (10 - 30 meters);
3- width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

function pillars(numPill, dist, width) {
  if (numPill > 1) {
    if (numPill === 2) {
      return dist * 100;
    } else {
      let colums = (numPill - 2) * width;

      let distInCms = dist * (numPill - 1) * 100;

      return distInCms + colums;
    }
  } else {
    return 0;
  }
}

// function pillars(numPill, dist, width) {
//   if (numPill < 2) return 0;
//   const widthAllPillars = (numPill - 2) * width;
//   const distAll = (numPill - 1) * (dist * 100);

//   return distAll + widthAllPillars;
// }

console.log(pillars(11, 15, 30));
