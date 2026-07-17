const UNITS_LEN = 43; // approximate - will count from file
const fs = require('fs');
const c = fs.readFileSync('C:/Users/sinsy/OneDrive/デスクトップ/benkyou/中3_総合テスト予想問題.html','utf8');
const units = (c.match(/\{id:"[^"]+", subject:"/g)||[]).length;
const count = 11+9+7+6+6 + 4*(5+4) + units + 6 + 4 + 6;
console.log('units', units, 'achievements', count);
