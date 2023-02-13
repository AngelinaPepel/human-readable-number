module.exports = function toReadable (number) {

// если номер меньше 20. тогда первый иф, если номер равно 2 символа и первый не 1, то второй иф (второй массив), если длина номера равна 3, то 3 массив

  let numToStr = number.toString();
  let strToArray =numToStr.split('');

  let oneArray =['',  ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
  let tenArray =[' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
  let twoArray =['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
  let three = ' hundred';

  let firstPart;
  let secondtPart;
  let thirdPart;

  
  if (number === 0) {
    firstPart = ' zero';
  } else if (numToStr.length ===1 || numToStr[numToStr.length - 2] !=='1') {
    firstPart = oneArray[parseInt(numToStr[numToStr.length - 1])];
  } else {
    firstPart = '';
  };

  if (numToStr.length > 1 && numToStr[numToStr.length - 2] ==='1'){
    secondtPart = tenArray[parseInt(numToStr[numToStr.length - 1])];
  } else if (numToStr.length > 1 && numToStr[numToStr.length - 2] !=='1') {
    secondtPart = twoArray[parseInt(numToStr[numToStr.length - 2])]
  } else {
    secondtPart = '';
  };

  if (numToStr.length === 3 ) {
    thirdPart = oneArray[parseInt(numToStr[numToStr.length - 3])] +three;
  } else {
    thirdPart = '';
  };

  let result =thirdPart+secondtPart+firstPart;
 return (result.substring(1));

}

