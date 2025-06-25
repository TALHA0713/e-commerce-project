// const decodeString = (s) => {
//   const stack = [];
//   let currentStr = "";
//   let currentNum = 0;

//   for (let char of s) {
//     if (!isNaN(char)) {
//       currentNum = currentNum * 10 + Number(char);
//     } else if (char === "[") {
//       stack.push([currentStr, currentNum]);
//       currentStr = "";
//       currentNum = 0;
//     } else if (char === "]") {
//       const [prevStr, num] = stack.pop();
//       currentStr = prevStr + currentStr.repeat(num);
//     } else {
//       currentStr += char;
//     }
//   }

//   return currentStr;
// };
// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));

// var predictPartyVictory = function (senate) {
//   let n = senate.length;
//   let radiant = [];
//   let dire = [];
//   for (let i = 0; i < senate.length; i++) {
//     if (senate[i] === "R") {
//       radiant.push(i);
//     } else {
//       dire.push(i);
//     }
//   }
//   while (radiant.length > 0 && dire.length > 0) {
//     const rIndex = radiant.shift();
//     const dIndex = dire.shift();

//     if (rIndex < dIndex) {
//       radiant.push(rIndex + n);
//     } else {
//       dire.push(dIndex + n);
//     }
//   }

//   return radiant.length > 0 ? "Radiant" : "Dire";
// };

// predictPartyVictory("RRDDD");

const findUniqueDuplicateandDuplicatelegnth = (nums) => {
  const countMap = new Map();
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  let UniqueValues = [];
  let duplicateValues = [];
  let duplicateValuesWithLenght = [];
  for (let [key, count] of countMap) {
    if (count === 1) {
      UniqueValues.push(key);
    } else {
      duplicateValues.push(key);
      duplicateValuesWithLenght.push({ value: key, count: count });
    }
  }
};
const nums = [1, 2, 2, 3, 4, 4, 5, 2];
findUniqueDuplicateandDuplicatelegnth(nums);

const findLongestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let maxStreak = 0;
  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      maxStreak = Math.max(maxStreak, currentStreak);
    }
  }
  return maxStreak;
};
console.log(findLongestConsecutive([100, 4, 200, 1, 3, 2]));

const moveNegativesToRight = (nums) => {
  let lastPointer = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 0) {
      for (let j = i; j < lastPointer; j++) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
      lastPointer--;
    }
  }
};
const movesNegativeValuesStary = (nums) => {
  let firstPointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      for (let j = i; j > firstPointer; j--) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      }
      firstPointer++;
    }
  }
};
let array = [0, 1, -2, 4, -3, 1, -4, -6, 1];
let zeros = [0, 1, -2, 4, -3, 1, -4, -6, 1];
movesNegativeValuesStary(array);
moveNegativesToRight(zeros);
console.log(array);
console.log(zeros);
