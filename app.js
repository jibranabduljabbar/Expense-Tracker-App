var getInput = document.getElementById('tracker');
var getBal = document.getElementById('get');
var getmain = document.getElementById('main');
var getIncome = document.getElementById("h");

var income = 0;

income += eval(income)




function addIncome(){ 

    if(getInput.value == ""){
        var CON = getIncome
        CON += CON.nodeValue();
           }
    // var createElement = document.createElement('h1');
   getIncome.style.fontSize="40px"
   getIncome.style.marginBottom="-24px"
   getIncome.style.marginLeft="15px"
   getIncome.style.marginTop="15px"
   getIncome.style.fontFamily="Arial, Helvetica, sans-serif";

   income += parseInt(document.getElementById("tracker").value);
   document.getElementById("h").innerText = income
    // var h1 = document.getElementById("h").innerText = income;

    // var text = document.createTextNode(getInput.value);
    // var input = text;
    // var num = Number(text.nodeValue);
    // var num1 = num - getSecondInput.value
    // console.log(num1)
    // console.log(num)
    // h1.appendChild(text)


    // createElement.appendChild(text)
    
    // getBal.appendChild(createElement)
    getInput.value = ""
    getDate.value = ""
}
var getSecondInput = document.getElementById('expense-Val');
var getDate = document.getElementById('date');
var getSelect = document.getElementById('select');
var getVal = document.getElementById('value');
var amount = document.getElementById("amount");
var ulList = document.getElementById("list")

function add(){
    // getmain.childNodes[5].childNodes[1].childNodes[1] = "hello"
// console.log(getmain)

    // var amount1 = h1 -= getSecondInput.value ;
// console.log(amount1)

// var i = " ";

// income -= document.getElementById("expense-Val").value 



var createLi = document.createElement("li");
createLi.className = "listStyle"

ulList.appendChild(createLi)


income -= parseInt(document.getElementById("expense-Val").value);
   document.getElementById("h").innerText = income
   

var create = document.createElement('p')
var createTextNode = document.createTextNode(getDate.value)
create.appendChild(createTextNode)
createLi.appendChild(create)

var createSecond = document.createElement('p')
var createTextNodeSecond = document.createTextNode(getSelect.value)
createSecond.appendChild(createTextNodeSecond)
createLi.appendChild(createSecond)

var createThird = document.createElement('p')
var createTextNodeThird = document.createTextNode(getSecondInput.value)
createThird.appendChild(createTextNodeThird)
createLi.appendChild(createThird)

var createFour = document.createElement('button')
createFour.setAttribute('onclick','del(this)')
createFour.style.height = "30px";
createFour.style.borderRadius = "5px";
createFour.style.margin = "10px";
createFour.style.backgroundColor = "white";
createFour.style.color = "green";
createFour.style.marginTop = "10px"
var createTextNodeFour = document.createTextNode('Delete')
createFour.appendChild(createTextNodeFour)
createLi.appendChild(createFour)

var createFive = document.createElement('button')
createFive.setAttribute('onclick','edit(this)')
createFive.style.height = "30px";
createFive.style.marginLeft = "10px";
createFive.style.margin = "10px";
createFive.style.backgroundColor = "white";
createFive.style.color = "green";
createFive.style.borderRadius = "5px";
createFive.style.marginTop = "10px";
var createTextNodeFive = document.createTextNode('Edit')
createFive.appendChild(createTextNodeFive)
createLi.appendChild(createFive)

// getVal.appendChild(ulList);

getDate.value = ""
getSecondInput.value = "";

}
function edit(Edit){
    var editValue = prompt("Enter Your Amount","Your Amount Is:",Edit.parentNode.childNodes[2].childNodes[0])
Edit.parentNode.childNodes[2].childNodes[0].nodeValue = editValue;
}

function del(Val){
    Val.parentNode.remove()
}


