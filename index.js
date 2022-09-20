const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const totalBatteries = batteryBatches.reduce((total, itemAtIndex) => {
  return total + itemAtIndex}, 0)