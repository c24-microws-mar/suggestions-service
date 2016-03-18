'use strict';

module.exports = {
  getRandomItems
};

function getRandomItems(items, count) { 
  if (items.length <= count) {
    return items;
  }
  
  let randomItems = [];
  while(randomItems.length < count) {
    const randomIndex = getRandomInt(0, items.length-1);
    const randomItem = items[randomIndex];
    if (randomItems.indexOf(randomItem) === -1) {
      randomItems.push(randomItem);
    }
  }
  
  return randomItems;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}