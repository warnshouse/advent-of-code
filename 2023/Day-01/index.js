const output = document.getElementById('output');

document.getElementById('file').onchange = function () {
  const file = this.files[0];
  const reader = new FileReader();
  
  reader.onload = function (progressEvent) {
    // Entire file
    const text = this.result;
    output.innerText = text;

    // By lines
    const lines = text.split('\n');
    let sum = 0;
    
    for (let i = 0; i < lines.length - 1; i++) {
      let firstDigit =
        lines[i].match(/\d|one|two|three|four|five|six|seven|eight|nine/)[0];
      let secondDigit =
        lines[i].split('')
                .reverse()
                .join('')
                .match(/\d|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/)[0];
      
      if (firstDigit.length > 1) {
        const values = {one: '1', two: '2', three: '3', four: '4', five: '5',
                        six: '6', seven: '7', eight: '8', nine: '9'};
        firstDigit = values[firstDigit];
      }
      if (secondDigit.length > 1) {
        const revValues = {eno: '1', owt: '2', eerht: '3', ruof: '4',
                           evif: '5', xis: '6', neves: '7', thgie: '8', 
                           enin: '9'};
        secondDigit = revValues[secondDigit];
      }
      
      sum += Number(firstDigit + secondDigit);
    }
    
    output.innerText = sum;
  };
  
  reader.readAsText(file);
};