


let table = document.createElement("table"),
    tableHeadRow = document.createElement('tr'),
    div = document.createElement('div'),
    head = document.createElement('th'),
    btn = document.createElement('input');

    btn.value = 'click here to fetch data';
    btn.type = 'button';
    btn.addEventListener('click', ()=> {


        async function firstRequest () {
            let arr = [];
                
                for ( let i =1 ; i<= 10 ; i++ ){
                    let person =await(await fetch(`${ourSource}${i}`)).json();
                    let planet = await(await fetch(person.homeworld)).json()
                    const perObj = {
                        name : person.name,
                        height : person.height,
                        hair_color : person.hair_color,
                        planet: {
                                name:planet.name,
                                population:planet.population
                        }
                    }
                    arr.push(perObj);
                }
                return arr;
            }
            let printFunc = async() => {
                let requested;
                try {
                requested = await firstRequest();
                   console.log(requested);
                }
                catch (err){
                    console.log(err);
                }
            }
            printFunc();
            



    })

    let td = document.querySelectorAll('td');
    let tr = document.querySelectorAll('tr');
    tr.forEach((tr, i) => { i % 2 == 0 ? tr.style.backgroundColor = '#edf9d2' : tr.style.backgroundColor = '#e1f5b7' })

    document.body.append(btn);
    document.body.append(div);
    div.append(table);
    table.append(tableHeadRow);
    tableHeadRow.append();

    

table.style.border = '1px solid black'
table.style.borderCollapse = 'collapse'
table.style.textAlign = 'center'





    tableHeadRow.innerHTML = 'Star Wars'
    // =================== tr1 =====================
    let tr1 = document.createElement('tr'),
    tr1Td1 = document.createElement('td'),
    tr1Td2 = document.createElement('td'),
    tr1Td3 = document.createElement('td'),
    tr1Td4 = document.createElement('td'),
    tr1Td5 = document.createElement('td');
    
    table.append(tr1);
    tr1.append(tr1Td1);
    tr1.append(tr1Td2);
    tr1.append(tr1Td3);
    tr1.append(tr1Td4);
    tr1.append(tr1Td5);

    tr1Td1.innerHTML=`${Object.keys(Request.key[0])}`
    tr1Td2.innerHTML='hair'
    tr1Td3.innerHTML='height'
    tr1Td4.innerHTML='planet name'
    tr1Td5.innerHTML='planet population'



    // ==================== tr2 ========================
    tr2 = document.createElement('tr'),
    tr2Td1 = document.createElement('td'),
    tr2Td2 = document.createElement('td'),
    tr2Td3 = document.createElement('td'),
    tr2Td4 = document.createElement('td'),
    tr2Td5 = document.createElement('td'),

    table.append(tr2);
    tr2.append(tr2Td1);
    tr2.append(tr2Td2);
    tr2.append(tr2Td3);
    tr2.append(tr2Td4);
    tr2.append(tr2Td5);

    tr2Td1.innerHTML='lucke'
    tr2Td2.innerHTML='blonde'
    tr2Td3.innerHTML='172'
    tr2Td4.innerHTML='planet name'
    tr2Td5.innerHTML='20000'
// ========================= tr3 ======================
    tr3 = document.createElement('tr'),
    tr3Td1 = document.createElement('td'),
    tr3Td2 = document.createElement('td'),
    tr3Td3 = document.createElement('td'),
    tr3Td4 = document.createElement('td'),
    tr3Td5 = document.createElement('td'),

    table.append(tr3);
    tr3.append(tr3Td1);
    tr3.append(tr3Td2);
    tr3.append(tr3Td3);
    tr3.append(tr3Td4);
    tr3.append(tr3Td5);

    tr3Td1.innerHTML='lucke'
    tr3Td2.innerHTML='blonde'
    tr3Td3.innerHTML='172'
    tr3Td4.innerHTML='planet name'
    tr3Td5.innerHTML='200000'
// ========================= tr4 ======================
    tr4 = document.createElement('tr'),
    tr4Td1 = document.createElement('td'),
    tr4Td2 = document.createElement('td'),
    tr4Td3 = document.createElement('td'),
    tr4Td4 = document.createElement('td'),
    tr4Td5 = document.createElement('td'),

    table.append(tr4);
    tr4.append(tr4Td1);
    tr4.append(tr4Td2);
    tr4.append(tr4Td3);
    tr4.append(tr4Td4);
    tr4.append(tr4Td5);

    tr4Td1.innerHTML='lucke'
    tr4Td2.innerHTML='blonde'
    tr4Td3.innerHTML='172'
    tr4Td4.innerHTML='planet name'
    tr4Td5.innerHTML='200000'
// ========================= tr5 ======================
    tr5 = document.createElement('tr'),
    tr5Td1 = document.createElement('td'),
    tr5Td2 = document.createElement('td'),
    tr5Td3 = document.createElement('td'),
    tr5Td4 = document.createElement('td'),
    tr5Td5 = document.createElement('td'),

    table.append(tr5);
    tr5.append(tr5Td1);
    tr5.append(tr5Td2);
    tr5.append(tr5Td3);
    tr5.append(tr5Td4);
    tr5.append(tr5Td5);

    tr5Td1.innerHTML='lucke'
    tr5Td2.innerHTML='blonde'
    tr5Td3.innerHTML='172'
    tr5Td4.innerHTML='planet name'
    tr5Td5.innerHTML='200000'
// ========================= tr6 ======================
    tr6 = document.createElement('tr'),
    tr6Td1 = document.createElement('td'),
    tr6Td2 = document.createElement('td'),
    tr6Td3 = document.createElement('td'),
    tr6Td4 = document.createElement('td'),
    tr6Td5 = document.createElement('td'),

    table.append(tr6);
    tr6.append(tr6Td1);
    tr6.append(tr6Td2);
    tr6.append(tr6Td3);
    tr6.append(tr6Td4);
    tr6.append(tr6Td5);

    tr6Td1.innerHTML='lucke'
    tr6Td2.innerHTML='blonde'
    tr6Td3.innerHTML='172'
    tr6Td4.innerHTML='planet name'
    tr6Td5.innerHTML='200000'
// ========================= tr7 ======================
    tr7 = document.createElement('tr'),
    tr7Td1 = document.createElement('td'),
    tr7Td2 = document.createElement('td'),
    tr7Td3 = document.createElement('td'),
    tr7Td4 = document.createElement('td'),
    tr7Td5 = document.createElement('td'),

    table.append(tr7);
    tr7.append(tr7Td1);
    tr7.append(tr7Td2);
    tr7.append(tr7Td3);
    tr7.append(tr7Td4);
    tr7.append(tr7Td5);

    tr7Td1.innerHTML='lucke'
    tr7Td2.innerHTML='blonde'
    tr7Td3.innerHTML='172'
    tr7Td4.innerHTML='planet name'
    tr7Td5.innerHTML='200000'
// ========================= tr8 ======================
    tr8 = document.createElement('tr'),
    tr8Td1 = document.createElement('td'),
    tr8Td2 = document.createElement('td'),
    tr8Td3 = document.createElement('td'),
    tr8Td4 = document.createElement('td'),
    tr8Td5 = document.createElement('td'),

    table.append(tr8);
    tr8.append(tr8Td1);
    tr8.append(tr8Td2);
    tr8.append(tr8Td3);
    tr8.append(tr8Td4);
    tr8.append(tr8Td5);

    tr8Td1.innerHTML='lucke'
    tr8Td2.innerHTML='blonde'
    tr8Td3.innerHTML='172'
    tr8Td4.innerHTML='planet name'
    tr8Td5.innerHTML='200000'
// ========================= tr9 ======================
    tr9 = document.createElement('tr'),
    tr9Td1 = document.createElement('td'),
    tr9Td2 = document.createElement('td'),
    tr9Td3 = document.createElement('td'),
    tr9Td4 = document.createElement('td'),
    tr9Td5 = document.createElement('td'),

    table.append(tr9);
    tr9.append(tr9Td1);
    tr9.append(tr9Td2);
    tr9.append(tr9Td3);
    tr9.append(tr9Td4);
    tr9.append(tr9Td5);

    tr9Td1.innerHTML='lucke'
    tr9Td2.innerHTML='blonde'
    tr9Td3.innerHTML='172'
    tr9Td4.innerHTML='planet name'
    tr9Td5.innerHTML='200000'
// ========================= tr10 ======================
    tr10 = document.createElement('tr'),
    tr10Td1 = document.createElement('td'),
    tr10Td2 = document.createElement('td'),
    tr10Td3 = document.createElement('td'),
    tr10Td4 = document.createElement('td'),
    tr10Td5 = document.createElement('td'),

    table.append(tr10);
    tr10.append(tr10Td1);
    tr10.append(tr10Td2);
    tr10.append(tr10Td3);
    tr10.append(tr10Td4);
    tr10.append(tr10Td5);

    tr10Td1.innerHTML='lucke'
    tr10Td2.innerHTML='blonde'
    tr10Td3.innerHTML='172'
    tr10Td4.innerHTML='planet name'
    tr10Td5.innerHTML='200000'
// ========================= tr11 ======================
    tr11 = document.createElement('tr'),
    tr11Td1 = document.createElement('td'),
    tr11Td2 = document.createElement('td'),
    tr11Td3 = document.createElement('td'),
    tr11Td4 = document.createElement('td'),
    tr11Td5 = document.createElement('td'),

    table.append(tr11);
    tr11.append(tr11Td1);
    tr11.append(tr11Td2);
    tr11.append(tr11Td3);
    tr11.append(tr11Td4);
    tr11.append(tr11Td5);

    tr11Td1.innerHTML='lucke'
    tr11Td2.innerHTML='blonde'
    tr11Td3.innerHTML='172'
    tr11Td4.innerHTML='planet name'
    tr11Td5.innerHTML='200000'





let ourSource = 'https://swapi.dev/api/people/';


