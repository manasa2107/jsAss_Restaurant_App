//tables item class

class Table{
    constructor(id,name){
        this.id=id
        this.name=name
        this.noOfItems=0
        this.bill=0
        this.itemList=new Map()
    }
}

//creating each table to add into tables section

function createTable(id,name,noOfItems,bill){
    let newTable=document.createElement("div");
    newTable.setAttribute("class","table-item");
    newTable.setAttribute("id",id);
    newTable.setAttribute("ondragover","allowDrop(event)");
    newTable.setAttribute("ondrop","drop(event)");
    let tableName=document.createElement("h2");
    tableName.textContent=name;
    newTable.append(tableName);
    let container=document.createElement("div");
    let totBill=document.createElement("span");
    totBill.textContent="Rs. "+bill;
    container.append(totBill);
    let nItems=document.createElement("span");
    nItems.textContent="| Total items: "+noOfItems;
    container.append(nItems);
    newTable.append(container);
    return newTable;
}


//filling table section

function fillTablesSec(tableList,container){
    for(let eachTable of tableList){
        container.append(createTable(eachTable.id,eachTable.name,eachTable.noOfItems,eachTable.bill));
    }
}

//creating list of tables

let tableList=new Map();
tableList.set("table-1",new Table("table-1","Table-1"));
tableList.set("table-2",new Table("table-2","Table-2"));
tableList.set("table-3",new Table("table-3","Table-3"));

//create a container to add each table

let tableContainer=document.querySelector("#tables");
fillTablesSec(tableList.values(),tableContainer);

//menu item class

class MenuItems{
    constructor(id,category,name,cost){
        this.id=id
        this.category=category
        this.name=name
        this.cost=cost
    }
}

//creating each menu item to add into menu section

function createMenuItem(id,category,name,cost){
    let newItem=document.createElement("div");
    newItem.setAttribute("class","menu-item");
    newItem.setAttribute("draggable","true");
    newItem.setAttribute("ondragstart","drag(event)")
    newItem.setAttribute("id",id);
    let itemName=document.createElement("h2");
    itemName.textContent=name;
    newItem.append(itemName);
    let container=document.createElement("div");
    let itemCost=document.createElement("span");
    itemCost.textContent="Rs. " + cost;
    container.append(itemCost);
    let itemCat=document.createElement("span");
    itemCat.setAttribute("class","categ");
    itemCat.textContent=category;
    container.append(itemCat);
    newItem.append(container);
    return newItem;
}

//filling menu section

function fillMenuSec(menuList,container){
    for(let eachItem of menuList){
        container.append(createMenuItem(eachItem.id,eachItem.category,eachItem.name,eachItem.cost));
    }
}

//create list of menu items

const menuList=new Map();
menuList.set("item-1",new MenuItems("item-1","starters","Chicken Chettinad",300));
menuList.set("item-2",new MenuItems("item-2","starters","Chicken Majestic",280));
menuList.set("item-3",new MenuItems("item-3","starters","Chicken 555",260));
menuList.set("item-4",new MenuItems("item-4","starters","Apolo Fish ",320));
menuList.set("item-5",new MenuItems("item-5","starters","Chilli Paneer",250));
menuList.set("item-6",new MenuItems("item-6","starters","Chilli mushroom",240));
menuList.set("item-7",new MenuItems("item-7","main course","Chicken Dum Biryani",270));
menuList.set("item-8",new MenuItems("item-8","main course","Chicken Fry Biryani",250));
menuList.set("item-9",new MenuItems("item-9","main course","Prawn Biryani",300));
menuList.set("item-10",new MenuItems("item-10","main course","Veg Fried Rice",200));
menuList.set("item-11",new MenuItems("item-11","main course","Fish Biryani",350));
menuList.set("item-12",new MenuItems("item-12","main course","Mutton Biryani",380));
menuList.set("item-13",new MenuItems("item-13","main course","Potlam Biryani",250));
menuList.set("item-14",new MenuItems("item-14","main course","Chicken Tikka Biryani",250));
menuList.set("item-15",new MenuItems("item-15","mocktails","Orange Cran Spritzer",150));
menuList.set("item-16",new MenuItems("item-16","mocktails","Ginger Peach Soda",160));
menuList.set("item-17",new MenuItems("item-17","mocktails","Grape Fruit Blast",100));
menuList.set("item-18",new MenuItems("item-18","desert","Apricot Delight",280));
menuList.set("item-19",new MenuItems("item-19","mocktails","Mint Lemonade",100));
menuList.set("item-20",new MenuItems("item-20","mocktails","Arnold Palmer",140));

//create a container to add each menu item

const menuContainer=document.querySelector("#menu");
fillMenuSec(menuList.values(),menuContainer);
