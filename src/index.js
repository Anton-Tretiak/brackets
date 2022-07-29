module.exports = function check(str, bracketsConfig) {
  let res = str;
  let len = str.length / 2;
  for (let i = 0; i < len; i++) {
    bracketsConfig.forEach(item => {
      res = res.replace(item.join(''), '')
    })
  }
  if (res.length === 0) {
    return true;
  }
  else {
    return false;
  }
}
