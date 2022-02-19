module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(el => el.join(''));
  let temp = str;
  let len = brackets.length;
  while (temp.length > 0) {
    let tmp2 = temp;
    for (let i = 0; i < len; i++) {
      if (temp.includes(brackets[i])) {
        temp = temp.replace(brackets[i], '');
      };      
    };
    if (tmp2 == temp) return false;
  };  
  return true;
};