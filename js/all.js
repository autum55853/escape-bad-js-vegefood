//定義全域變數
/* global axios */

// TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
const url = 'https://hexschool.github.io/js-filter-data/data.json';
let data =[];
const table = document.querySelector('.table-content');
// eslint-disable-next-line no-unused-vars
let showData = [];
const category = '';
const filter = document.querySelector('.filter');

function renderData(data) {
  let str = '';
  data.forEach((b) => {
    // TODO: 改成 ES6 的 Template Literals (字面字串符)
    str += `<tr>
      <td> ${b.作物名稱} </td>
        <td> ${b.市場名稱} </td>
        <td> ${b.上價} </td>
        <td> ${b.中價} </td>
        <td> ${b.下價} </td>
        <td> ${b.平均價} </td>
        <td> ${b.交易量} </td>
        </tr>`;
  });
  table.innerHTML = str;
}

function getData() {
  axios.get(url)
    .then((res) => {
      data = res.data.filter((a) => a.作物名稱);
      // TODO: 之後拆成 renderData 函式
      renderData(data);
    });
}

function filterCategory(e) {
  if (e.target.nodeName === 'BUTTON') {
    // eslint-disable-next-line no-const-assign
    category = e.target.dataset.category;
    showData = data.filter((i) => i.種類代碼 === category);
    // TODO: 之後拆成 renderData 函式
    renderData(data);
  }
}
filter.addEventListener('click', filterCategory);
getData();
