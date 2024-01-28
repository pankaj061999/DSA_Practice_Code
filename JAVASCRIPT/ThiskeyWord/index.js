// "use strict"

//1.) this in global space

console.log(this);
{
  /* it is totally depend on where is code run  means which browser or env*/
}
// node terminal repersent {} and browser show windeow obj

{
  /*2.)  in functional scope*/
  //   this value depend on strict mode or non strict mode both part show differant value
  // non strict mode repersent global obj
  // strict mode show undefind
}

function sum() {
  console.log(this);
}

// sum();

{
  /* arrow function */
}

const arrowFunc = () => {
  console.log(this);
};

arrowFunc();

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
  //   console.log("Print i", i)
}
