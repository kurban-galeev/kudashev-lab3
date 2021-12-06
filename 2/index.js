import { text } from './text.js';

const categories = {
  music: [
    'песни', 
    'песня', 
    'музыка', 
    'музыкант', 
    'музыканты', 
    'моцарт', 
    'аккорд', 
    'бит', 
    'ритм', 
    'жанр', 
    'рок', 
    'рэп', 
    'хип-хоп',
    'ремикс',
    'ремейк',
    'диджей',
    'ковер',
    'сингл',
    'альбом',
    'микстейп',
  ],
  auto: [
    'машина',
    'машины',
    'автомобиль',
    'автомобили',
    'бензин',
    'заправка',
    'двигатель',
    'внедорожник',
    'легковой',
    'автоваз',
    'такси',
    'бмв',
    'ауди',
    'фольксваген',
    'жигули',
    'мерседес',
    'дорога',
    'светофор',
    'гаи',
    'гибдд',
    'автовоз',
    'грузовой',
  ],
  culture: [
    'художественных',
    'живописных',
    'картина',
    'музыка',
    'танцы',
    'художник',
    'мольберт',
    'музыкант',
    'искусство',
    'скульптура',
    'памятник',
    'граффити',
    'живопись',
    'творчество',
    'творческий',
    'поэзия',
    'опера',
    'балет',
    'театр'
  ]
}

const pasteInitialText = (textData) => {
  document.querySelector('.initialText').innerText = textData;
}

const createCategoryRegex = (categoryWords) => {
  const regex = new RegExp(`${categoryWords.join('|')}`, 'g');
  return regex;
}

const checkText = (textData) => {
  const matchCategories = [];
  Object.keys(categories).forEach(key => {
    const regex = createCategoryRegex(categories[key]);
    if (regex.test(textData)) {
      matchCategories.push(key);
    }
  });
  document.querySelector('.categories').innerText = matchCategories;
}

const init = () => {
  pasteInitialText(text);
  checkText(text);
}

document.addEventListener('DOMContentLoaded', init);
