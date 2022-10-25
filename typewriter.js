const sentence = "hello there from lighthouse labs";

const typeItOut = function() {
  let timer = 0;
  for (const i in sentence) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      if (Number(i) === sentence.length - 1) {
        console.log();
      }
    }, timer);
    timer += 50;
  }
};

typeItOut();