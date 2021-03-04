// best way to import multiple modules using destructing

const { people, profession } = require("./people");

console.log(people, profession);

const os = require("os");
console.log(os.platform());
