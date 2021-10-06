//! ======================= this is the hard way its not recommended but i did it just as a practice ===================

let ourSource = "https://swapi.dev/api/people/";
let table = document.createElement("table"),
    table2 = document.createElement("table"),
  tableHeadRow = document.createElement("tr"),
  div = document.createElement("div"),
  div2 = document.createElement("div"),
  head = document.createElement("th");
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';


document.body.append(div);
document.body.append(div2);
div.append(table);
div2.append(table2);
table.append(tableHeadRow);
tableHeadRow.append(head);

table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.style.textAlign = "center";

head.innerHTML = "Star Wars the long hard way";
head.colSpan = "5";
head.style.backgroundColor = "#80b327";
head.style.textAlign = "center";
head.style.border = "1px solid black";
head.style.color = "white";

// =================== tr1 =====================
let tr1 = document.createElement("tr");
tr1.style.backgroundColor = "#edf9d2";
tr1.style.borderBottom = "black solid 1px";

let tr1Td1 = document.createElement("td"),
  tr1Td2 = document.createElement("td"),
  tr1Td3 = document.createElement("td"),
  tr1Td4 = document.createElement("td"),
  tr1Td5 = document.createElement("td");

table.append(tr1);
tr1.append(tr1Td1);
tr1.append(tr1Td2);
tr1.append(tr1Td3);
tr1.append(tr1Td4);
tr1.append(tr1Td5);
// ==================== tr2 ========================
let tr2 = document.createElement("tr");
tr2.style.backgroundColor = "#e1f5b7";
tr2.style.borderBottom = "black solid 1px";

let tr2Td1 = document.createElement("td"),
  tr2Td2 = document.createElement("td"),
  tr2Td3 = document.createElement("td"),
  tr2Td4 = document.createElement("td"),
  tr2Td5 = document.createElement("td");

table.append(tr2);
tr2.append(tr2Td1);
tr2.append(tr2Td2);
tr2.append(tr2Td3);
tr2.append(tr2Td4);
tr2.append(tr2Td5);
// ========================= tr3 ======================
let tr3 = document.createElement("tr");
tr3.style.backgroundColor = "#edf9d2";
tr3.style.borderBottom = "black solid 1px";

let tr3Td1 = document.createElement("td"),
  tr3Td2 = document.createElement("td"),
  tr3Td3 = document.createElement("td"),
  tr3Td4 = document.createElement("td"),
  tr3Td5 = document.createElement("td");

table.append(tr3);
tr3.append(tr3Td1);
tr3.append(tr3Td2);
tr3.append(tr3Td3);
tr3.append(tr3Td4);
tr3.append(tr3Td5);

// ========================= tr4 ======================
let tr4 = document.createElement("tr");
tr4.style.backgroundColor = "#e1f5b7";
tr4.style.borderBottom = "black solid 1px";

let tr4Td1 = document.createElement("td"),
  tr4Td2 = document.createElement("td"),
  tr4Td3 = document.createElement("td"),
  tr4Td4 = document.createElement("td"),
  tr4Td5 = document.createElement("td");

table.append(tr4);
tr4.append(tr4Td1);
tr4.append(tr4Td2);
tr4.append(tr4Td3);
tr4.append(tr4Td4);
tr4.append(tr4Td5);

// ========================= tr5 ======================
let tr5 = document.createElement("tr");
tr5.style.backgroundColor = "#edf9d2";
tr5.style.borderBottom = "black solid 1px";

let tr5Td1 = document.createElement("td"),
  tr5Td2 = document.createElement("td"),
  tr5Td3 = document.createElement("td"),
  tr5Td4 = document.createElement("td"),
  tr5Td5 = document.createElement("td");

table.append(tr5);
tr5.append(tr5Td1);
tr5.append(tr5Td2);
tr5.append(tr5Td3);
tr5.append(tr5Td4);
tr5.append(tr5Td5);

// ========================= tr6 ======================
let tr6 = document.createElement("tr");
tr6.style.backgroundColor = "#e1f5b7";
tr6.style.borderBottom = "black solid 1px";

let tr6Td1 = document.createElement("td"),
  tr6Td2 = document.createElement("td"),
  tr6Td3 = document.createElement("td"),
  tr6Td4 = document.createElement("td"),
  tr6Td5 = document.createElement("td");

table.append(tr6);
tr6.append(tr6Td1);
tr6.append(tr6Td2);
tr6.append(tr6Td3);
tr6.append(tr6Td4);
tr6.append(tr6Td5);

// ========================= tr7 ======================
let tr7 = document.createElement("tr");
tr7.style.backgroundColor = "#edf9d2";
tr7.style.borderBottom = "black solid 1px";

let tr7Td1 = document.createElement("td"),
  tr7Td2 = document.createElement("td"),
  tr7Td3 = document.createElement("td"),
  tr7Td4 = document.createElement("td"),
  tr7Td5 = document.createElement("td");

table.append(tr7);
tr7.append(tr7Td1);
tr7.append(tr7Td2);
tr7.append(tr7Td3);
tr7.append(tr7Td4);
tr7.append(tr7Td5);
// ========================= tr8 ======================
let tr8 = document.createElement("tr");
tr8.style.backgroundColor = "#e1f5b7";
tr8.style.borderBottom = "black solid 1px";

let tr8Td1 = document.createElement("td"),
  tr8Td2 = document.createElement("td"),
  tr8Td3 = document.createElement("td"),
  tr8Td4 = document.createElement("td"),
  tr8Td5 = document.createElement("td");

table.append(tr8);
tr8.append(tr8Td1);
tr8.append(tr8Td2);
tr8.append(tr8Td3);
tr8.append(tr8Td4);
tr8.append(tr8Td5);
// ========================= tr9 ======================
let tr9 = document.createElement("tr");
tr9.style.backgroundColor = "#edf9d2";
tr9.style.borderBottom = "black solid 1px";

let tr9Td1 = document.createElement("td"),
  tr9Td2 = document.createElement("td"),
  tr9Td3 = document.createElement("td"),
  tr9Td4 = document.createElement("td"),
  tr9Td5 = document.createElement("td");

table.append(tr9);
tr9.append(tr9Td1);
tr9.append(tr9Td2);
tr9.append(tr9Td3);
tr9.append(tr9Td4);
tr9.append(tr9Td5);
// ========================= tr10 ======================
let tr10 = document.createElement("tr");
tr10.style.backgroundColor = "#e1f5b7";
tr10.style.borderBottom = "black solid 1px";

let tr10Td1 = document.createElement("td"),
  tr10Td2 = document.createElement("td"),
  tr10Td3 = document.createElement("td"),
  tr10Td4 = document.createElement("td"),
  tr10Td5 = document.createElement("td");

table.append(tr10);
tr10.append(tr10Td1);
tr10.append(tr10Td2);
tr10.append(tr10Td3);
tr10.append(tr10Td4);
tr10.append(tr10Td5);
// ========================= tr11 ======================
let tr11 = document.createElement("tr");
tr11.style.backgroundColor = "#edf9d2";
tr11.style.borderBottom = "black solid 1px";

let tr11Td1 = document.createElement("td"),
  tr11Td2 = document.createElement("td"),
  tr11Td3 = document.createElement("td"),
  tr11Td4 = document.createElement("td"),
  tr11Td5 = document.createElement("td");

table.append(tr11);
tr11.append(tr11Td1);
tr11.append(tr11Td2);
tr11.append(tr11Td3);
tr11.append(tr11Td4);
tr11.append(tr11Td5);

async function firstRequest() {
  let arr = [];

  for (let i = 1; i <= 10; i++) {
    let person = await (await fetch(`${ourSource}${i}`)).json();
    let planet = await (await fetch(person.homeworld)).json();
    const perObj = {
      name: person.name,
      height: person.height,
      hair_color: person.hair_color,
      planet: {
        name: planet.name,
        population: planet.population,
      },
    };
    arr.push(perObj);
  }
  return arr;
}

let printFunc = async () => {
  let requested;
  try {
    requested = await firstRequest();
    console.log(requested);
  } catch (err) {
    console.log(err);
  }
  
  // ============ heading ===================
  tr1Td1.innerHTML = `name`;
  tr1Td2.innerHTML = "hair";
  tr1Td3.innerHTML = "height";
  tr1Td4.innerHTML = "planet name";
  tr1Td5.innerHTML = "planet population";

  //================= 0 =================
  tr2Td1.innerHTML = `${requested[0].name}`;
  tr2Td2.innerHTML = `${requested[0].hair_color}`;
  tr2Td3.innerHTML = `${requested[0].height}`;
  tr2Td4.innerHTML = `${requested[0].planet.name}`;
  tr2Td5.innerHTML = `${requested[0].planet.population}`;
  //================= 1 =================
  tr3Td1.innerHTML = `${requested[1].name}`;
  tr3Td2.innerHTML = `${requested[1].hair_color}`;
  tr3Td3.innerHTML = `${requested[1].height}`;
  tr3Td4.innerHTML = `${requested[1].planet.name}`;
  tr3Td5.innerHTML = `${requested[1].planet.population}`;
  //================= 2 =================
  tr4Td1.innerHTML = `${requested[2].name}`;
  tr4Td2.innerHTML = `${requested[2].hair_color}`;
  tr4Td3.innerHTML = `${requested[2].height}`;
  tr4Td4.innerHTML = `${requested[2].planet.name}`;
  tr4Td5.innerHTML = `${requested[2].planet.population}`;
  //================= 3 =================
  tr5Td1.innerHTML = `${requested[3].name}`;
  tr5Td2.innerHTML = `${requested[3].hair_color}`;
  tr5Td3.innerHTML = `${requested[3].height}`;
  tr5Td4.innerHTML = `${requested[3].planet.name}`;
  tr5Td5.innerHTML = `${requested[3].planet.population}`;
  //================= 4 =================
  tr6Td1.innerHTML = `${requested[4].name}`;
  tr6Td2.innerHTML = `${requested[4].hair_color}`;
  tr6Td3.innerHTML = `${requested[4].height}`;
  tr6Td4.innerHTML = `${requested[4].planet.name}`;
  tr6Td5.innerHTML = `${requested[4].planet.population}`;
  //================= 5 =================
  tr7Td1.innerHTML = `${requested[5].name}`;
  tr7Td2.innerHTML = `${requested[5].hair_color}`;
  tr7Td3.innerHTML = `${requested[5].height}`;
  tr7Td4.innerHTML = `${requested[5].planet.name}`;
  tr7Td5.innerHTML = `${requested[5].planet.population}`;
  //================= 6 =================
  tr8Td1.innerHTML = `${requested[6].name}`;
  tr8Td2.innerHTML = `${requested[6].hair_color}`;
  tr8Td3.innerHTML = `${requested[6].height}`;
  tr8Td4.innerHTML = `${requested[6].planet.name}`;
  tr8Td5.innerHTML = `${requested[6].planet.population}`;
  //================= 7 =================
  tr9Td1.innerHTML = `${requested[7].name}`;
  tr9Td2.innerHTML = `${requested[7].hair_color}`;
  tr9Td3.innerHTML = `${requested[7].height}`;
  tr9Td4.innerHTML = `${requested[7].planet.name}`;
  tr9Td5.innerHTML = `${requested[7].planet.population}`;
  //================= 8 =================
  tr10Td1.innerHTML = `${requested[8].name}`;
  tr10Td2.innerHTML = `${requested[8].hair_color}`;
  tr10Td3.innerHTML = `${requested[8].height}`;
  tr10Td4.innerHTML = `${requested[8].planet.name}`;
  tr10Td5.innerHTML = `${requested[8].planet.population}`;
  //================= 9 =================
  tr11Td1.innerHTML = `${requested[9].name}`;
  tr11Td2.innerHTML = `${requested[9].hair_color}`;
  tr11Td3.innerHTML = `${requested[9].height}`;
  tr11Td4.innerHTML = `${requested[9].planet.name}`;
  tr11Td5.innerHTML = `${requested[9].planet.population}`;


//! ============= the short way ======================
let output = '';
for (let i = 0; i < 12; i++) {
    output += '<tr>'
    for (let j = 0; j < 5; j++) {
        if (i == 0 && j == 0) {
            output += `<th>Star Wars with for loop</th>`;
        } else if (i == 1 && j > 2) {
            output += `<td>planet ${Object.keys(Object.values(requested[0])[3])[j - 3]}</td>`;
        } else if (i == 1) {
            output += `<td>${Object.keys(requested[0])[j]}</td>`;
        } else if (i > 1 && j > 2) {
            output += `<td>${Object.values(Object.values(requested[i - 2])[3])[j - 3]}</td>`;
        } else if (i > 1) { output += `<td>${Object.values(requested[i - 2])[j]}</td>` }
        if (!i == 0 && j == 0) {}
    }
    output += '</tr>'
}
table2.innerHTML = output;
let th = document.querySelector('th');
let td = document.querySelectorAll('td');
let tr = document.querySelectorAll('tr');
th.style.border = '1px solid black'
th.colSpan = '5'
th.style.backgroundColor = '#80b327'
th.style.color = 'white'
td.forEach(td => {
    td.style.border = '1px solid black'
})
tr.forEach((tr, i) => { i % 2 == 0 ? tr.style.backgroundColor = '#edf9d2' : tr.style.backgroundColor = '#e1f5b7' })

};
printFunc();
