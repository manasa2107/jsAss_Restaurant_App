let currTable, itemCount, targetId, orderData;
let tableHeader=document.querySelector(".table-name");
let popUp=document.querySelector(".table-list");
let totalTables=document.querySelectorAll(".table-item");
let billAmount=document.getElementById("total");
let tableBody = document.querySelector(".bill");

//create popup when a particular table is clicked.

for (let eachTable of totalTables) {
    eachTable.addEventListener("click", (e) => {
      popUp.style.display = "block";
      toggle();
      tableHeader.textContent = tableList.get(eachTable.id).name + " | Order Details";
      currTable = tableList.get(e.currentTarget.id);
      totalBill();
      orderDetails = tableList.get(eachTable.id).itemList;
      for (let [item, count] of orderDetails) {
        tableBody.append(addRows(item, count));
      }
    });
  }

  //to add blur effect in background

  function toggle(){
    var blur=document.getElementById("blur");
    blur.classList.add("active");
    var pop=document.getElementById("pop")
    pop.classList.add("active");
  }

  //To display updated amount in the popup

  function totalBill() {
    billAmount.textContent = "Total : " + currTable.bill;
  }

  //function to add and delete rows.

function addRows(item, count) {
    let newRow = document.createElement("tr");
    let itemName = document.createElement("td");
    itemName.textContent = item;
    newRow.appendChild(itemName);
    let itemPrice = document.createElement("td");
    itemPrice.textContent = getCost(item);
    newRow.appendChild(itemPrice);
    let itemQuantity = document.createElement("td");
    let inputBar = document.createElement("input");
    inputBar.setAttribute("min", "1");
    inputBar.onchange =  (e) => {
      alterItem(item, parseInt(e.currentTarget.value));
      totalBill();
      targetId = document.getElementById(currTable.id);
      targetId.lastChild.lastChild.textContent ="| Total items:" + currTable.noOfItems;
      targetId.lastChild.firstChild.textContent = "Rs. " + currTable.bill;
      totalPrice.textContent=currTable.itemList.get(item)*getCost(item);
    };
    inputBar.setAttribute("type", "number");
    inputBar.setAttribute("class", "inputInc");
    inputBar.value = count;
    itemQuantity.appendChild(inputBar);
    newRow.appendChild(itemQuantity);
    let totalPrice=document.createElement("td");
    totalPrice.textContent=currTable.itemList.get(item)*getCost(item);
    newRow.appendChild(totalPrice);
    let deleteItem = document.createElement("td");
    //let deleteIcon = document.createElement("span");
     deleteIcon = document.createElement("img"); 
    deleteIcon.src = "delete.jpg";
   //deleteIcon.textContent="Delete";
    deleteIcon.setAttribute("class", "trash");
    deleteIcon.onclick = (e) => {
      currTable.bill -= currTable.itemList.get(item) * getCost(item);
      currTable.noOfItems -= currTable.itemList.get(item);
      totalBill();
      deleteFoodItem(item);
      tableBody.removeChild(newRow);
      targetId = document.getElementById(currTable.id);
      targetId.lastChild.lastChild.textContent ="| Total items:" + currTable.noOfItems;
      targetId.lastChild.firstChild.textContent = "Rs. " + currTable.bill;
    };
    deleteItem.appendChild(deleteIcon);
    newRow.appendChild(deleteItem);
    return newRow;
}

  //to get cost of each item

  function getCost(item) {
    for (let m of menuList){
        if(m[1].name===item){
            return m[1].cost;
        }
    }
  }

  //To update each table values.

  function alterItem(item, value) {
    let prev = currTable.itemList.get(item);
    cost = getCost(item);
    itemCount = value - prev;
    currTable.bill += (value - prev) * cost;
    currTable.noOfItems += itemCount;
    currTable.itemList.set(item, value);
  }

  //To generate the final bill.

  function generateBill(){
    orderData="";
    for(let i of tableBody.childNodes){
        orderData+=i.firstChild.textContent+"  Cost: ";
     orderData+=getCost(i.firstChild.textContent)+"  Quantity: ";
     let foodQty=i.children[3].textContent/i.children[1].textContent
     orderData+=foodQty+"  Total: ";
     orderData+=(foodQty*getCost(i.firstChild.textContent))+" \n";
    }
    orderData+="\n\n\nTotal Bill: "+currTable.bill;
    return orderData;
  }
  
//To show bill

  function giveAlert(){
    window.alert((generateBill()));
    targetId=document.getElementById(currTable.id)
    targetId.lastChild.lastChild.textContent="| Total items:" + 0;
    targetId.lastChild.firstChild.textContent = "Rs. " + 0;
  }

//to delete the item from table's itemList

  function deleteFoodItem(foodItem) {
    currTable.itemList.delete(foodItem);
  }
  
//To close the table popup and remove blur effect.

  function closePopUp() {
    popUp.style.display = "none";
    tableBody.textContent = "";
    var blur=document.getElementById("blur");
    blur.classList.remove("active");
    var pop=document.getElementById("pop")
    pop.classList.remove("active");

  }