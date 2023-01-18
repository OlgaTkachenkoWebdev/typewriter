let sentence = "hello there from lighthouse labs";
sentence += "\n"

let delay = 100;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);
}

//  function printStuff(string, i) {
//     if (i === string.length) {
//       process.stdout.write("\n");
//     } else {
//       process.stdout.write(string[i]);
//         setTimeout(() => {
//           printStuff(string, i + 1);
//         }, delay);
//     }
//  }

//  printStuff(sentence, 0);