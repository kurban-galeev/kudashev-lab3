import { log } from './log.js';

const categoriesName = [
  'dnsmasq',
  'kernel',
  'dnsmasq-dhcp',
  'anweb',
  'miniupnpd',
  'link_watcher_start',
  'stop_process_t',
  'pppd',
  'ppp_is_up',
  'syslog',
  'miniupnpd',
  'conf_ipfilter'
];

const dateRegex = new RegExp('^\\w{3}  \\d{1,2}', 'g');
const timeRegex = new RegExp('\\d{2}:\\d{2}:\\d{2}');
const textRegex = new RegExp(': .+$');

const getCategoryRegular = (categoryName) => {
  return new RegExp(`^.+${categoryName}(\[\d{3,4}\])?.+$`, 'gm');
}

const categorizeLogsByCategory = (logData, categoryName) => {
  const regex = getCategoryRegular(categoryName);
  return logData.match(regex);
}

const categorizeAllLogs = (logData, categories) => {
  let categoriedLog = {};
  categories.forEach(category => {
    const categLog = categorizeLogsByCategory(logData, category);
    categoriedLog[category] = categLog;
  });
  return categoriedLog;
}

const pasteInitialLog = () => {
  document.querySelector('.initialLog').innerText = log;
}

const pasteCategoriesLogs = (categoriedLog) => {
  Object.keys(categoriedLog).forEach(key => {
    const categoryParent = document.createElement('div');
    categoryParent.className = 'categories__category';
    const categoryTitle = document.createElement('h3');
    categoryTitle.innerText = key;
    const categoryLogs = document.createElement('div');
    categoryLogs.className = 'categories__category__logs';
    categoryLogs.innerText = categoriedLog[key].join('\n');
    categoryParent.appendChild(categoryTitle);
    categoryParent.appendChild(categoryLogs);
    document.querySelector('.categories').appendChild(categoryParent);
  });
}

const getNormalizedTableRow = (date, time, text) => {
  const tableRow= document.createElement('tr');
  const tableColDate = document.createElement('td');
  // const tableColTime = document.createElement('td');
  const tableColText = document.createElement('td');
  tableColDate.innerText = dayjs(`2021 ${date} ${time}`, 'YYYY MMM DD HH:mm:ss').add(4, 'hours').format();
  // tableColTime.innerText = time;
  tableColText.innerText = text;
  tableRow.appendChild(tableColDate);
  // tableRow.appendChild(tableColTime);
  tableRow.appendChild(tableColText);
  return tableRow;
}

const getTableHead = () => {
  const tableHead= document.createElement('tr');
  const tableCols = ['Date', 'Text'];
  tableCols.forEach(colName => {
    const tableHeadCol = document.createElement('td');
    tableHeadCol.innerText = colName;
    tableHead.appendChild(tableHeadCol);
  });
  return tableHead;
}

const getNormalizedCategoryTable = (logs) => {
  const table = document.createElement('table');
  table.appendChild(getTableHead());
  logs.forEach(log => {
    const logDate = log.match(dateRegex);
    const logTime = log.match(timeRegex);
    const logText = log.match(textRegex)[0].replace(': ', '');
    const row = getNormalizedTableRow(logDate, logTime, logText);
    table.appendChild(row);
  })
  return table;
}

const pasteNormalizedCategories = (categoriedLog) => {
  Object.keys(categoriedLog).forEach(key => {
    const categoryParent = document.createElement('div');
    categoryParent.className = 'normalized__category';
    const categoryTitle = document.createElement('h3');
    categoryTitle.innerText = key;
    categoryParent.appendChild(categoryTitle);
    categoryParent.appendChild(getNormalizedCategoryTable(categoriedLog[key]));
    document.querySelector('.normalized').appendChild(categoryParent);
  })
}

const init = () => {
  pasteInitialLog();
  const categoriedLog = categorizeAllLogs(log, categoriesName);
  pasteCategoriesLogs(categoriedLog);
  pasteNormalizedCategories(categoriedLog);
}

document.addEventListener('DOMContentLoaded', init);
