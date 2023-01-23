module.exports = function toReadable (number) {
  const numbersArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
    'nineteen'];
  const dozensArray = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';
  const hundreds = Math.trunc(number / 100);
  let res = '';
  let dozens = 0;
  let numbers = 0;
    if(number === 0) {
      return numbersArray[number];
    }
    if(hundreds === 0) {
      dozens = number;
    } else {
      dozens = number % 100;
      res += numbersArray[hundreds] + ' ' + hundred;
    }
    if(dozens > 0 && dozens < 20) {
      res += ' ' + numbersArray[dozens];
    } else if(dozens !== 0) {
      numbers = number % 100 % 10;
      res += ' ' + dozensArray[Math.trunc(dozens / 10) - 2];
    }
    if(numbers !== 0) {
      res += ' ' + numbersArray[numbers];
    }
    return res.trim();
}
