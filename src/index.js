module.exports = function toReadable (number) {
   let result = number == 0 ? "zero" : "";

   let units = [
      {value: 1, str : "one"},
      {value: 2, str : "two"},
      {value: 3, str: "three"},
      {value: 4, str: "four"},
      {value: 5, str: "five"},
      {value: 6, str: "six"},
      {value: 7, str: "seven"},
      {value: 8, str: "eight"},
      {value: 9, str: "nine"},
      {value: 10, str: "ten"},
      {value: 11, str: "eleven"},
      {value: 12, str: "twelve"},
      {value: 13, str: "thirteen"},
      {value: 14, str: "fourteen"},
      {value: 15, str: "fifteen"},
      {value: 16, str: "sixteen"},
      {value: 17, str: "seventeen"},
      {value: 18, str: "eighteen"},
      {value: 19, str: "nineteen"},
      {value: 20, str: "twenty"},
      {value: 30, str: "thirty"},
      {value: 40, str: "forty"},
      {value: 50, str: "fifty"},
      {value: 60, str: "sixty"},
      {value: 70, str: "seventy"},
      {value: 80, str: "eighty"},
      {value: 90, str: "ninety"},
      {value: 100, str: "hundred"},
      {value: 1000, str: "thousand"},
   ]

   for (let unit of units) {
      if (number >= unit.value) {
         if (number <= 99) {
            result += unit.str;
            number -= unit.value;
         if (number > 0)
            result += ' ';
         } else {
            let coefficient = Math.floor(number / unit.value);
            let residue = number % unit.value;
            if (residue > 0) {
               return `${toReadable(coefficient)} ${unit.str} ${toReadable(residue)}`;
            } else {
               return `${toReadable(coefficient)} ${unit.str}`;
            }
         }
      }
   }
      return result;
}

