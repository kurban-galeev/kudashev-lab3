const trustedDomains = ['yandex', 'google', 'twitter', 'facebook', 'amazon'];

const generateRegex = (domain) => {
  const regexStr = domain.split('').map(char => `[${char.toUpperCase()}${char.toLowerCase()}]`).join('');
  const regex = new RegExp(regexStr, 'g');
  return regex;
}

const checkDomain = (domain) => {
  if (trustedDomains.includes(domain)) return true;

  for (const item of trustedDomains) {
    const regex = generateRegex(item);
    const res = regex.test(domain);
    if (res) return false;
  }

  for (const item of trustedDomains) {
    let hits = 0;
    for (let i = 0; i < item.length; i++) {
      if (item[i] === domain[i]) {
        hits += 1;
      }
    }
    if (hits === domain.length - 1) return false;
  }

  return true;
}

const setCheckResult = (result) => {
  const resultElement = document.querySelector('.check__result');
  if (result) {
    resultElement.classList.add('good');
    resultElement.classList.remove('bad');
  } else {
    resultElement.classList.add('bad');
    resultElement.classList.remove('good');
  }
}

const handleButtonClick = () => {
  const input = document.querySelector('#input');
  const checkResult = checkDomain(input.value);
  setCheckResult(checkResult);
}

const init = () => {
  const button = document.querySelector('#button');
  button.onclick = handleButtonClick;
}

document.addEventListener('DOMContentLoaded', init);
