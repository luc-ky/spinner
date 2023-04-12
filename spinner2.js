console.log('hello from spinner2.js... ');
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let delay = 100;
for (const character of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${character}   `);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, delay);