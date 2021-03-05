const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true){
    this.direction = direction;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {
    this.checkArguments(message, key);
    this.message = message.toUpperCase();
    this.fullKey = this.getFullKey(key).toUpperCase();
    const result = this.message
      .split('')
      .map((v, i) => {
        const msgIndex = this.alphabet.indexOf(this.message[i]);
        const keyIndex = this.alphabet.indexOf(this.fullKey[i]);
        if(msgIndex == -1 || keyIndex == -1) return v;
        else return this.alphabet[(msgIndex + keyIndex) % 26];
      })
      .join('');
    return result;
  }

  decrypt(encryptedMessage, key) {
    checkArguments(encryptedMessage, key);
  }



  checkArguments(m, k){
    if(!m || !k) throw Error;
  }

  getFullKey(key){
    let ki = 0
    return this.message
      .split('')
      .map( v => {
        if(this.alphabet.indexOf(v) == -1) return v;
        return key[(ki++) % key.length];
      })
      .join('');
  }
}

module.exports = VigenereCipheringMachine;
