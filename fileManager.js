
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const FILE_PATH = path.join(DATA_DIR, 'shoppingList.json');


function initializeFileManager() {
  
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }

  
  if (!fs.existsSync(FILE_PATH)) {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]));
  }
}


function readShoppingList() {
  const data = fs.readFileSync(FILE_PATH, 'utf-8');
  return JSON.parse(data);
}


function writeShoppingList(data) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

module.exports = {
  initializeFileManager,
  readShoppingList,
  writeShoppingList,
};
