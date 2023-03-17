//your code here
function majorityElement(nums) {
    const counts = {};
    const threshold = Math.floor(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      counts[num] = (counts[num] || 0) + 1;
      if (counts[num] > threshold) {
        return num;
      }
    }
  }
  
