module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
  
      let numStr = number.toString();
      
      if(number === 0) return 'zero'

      if(number < 20) return ones[number]
  
      if(numStr.length === 2) return (tens[numStr[0]] + ' ' + ones[numStr[1]]).trim()
      
      if(numStr.length === 3) 
        if(numStr[1] === '0') return (ones[numStr[0]] + ' hundred ' + ones[numStr[2]]).trim()
        else return (ones[numStr[0]] + ' hundred' + ' ' + toReadable(numStr[1] + numStr[2])).trim()

  }
  


