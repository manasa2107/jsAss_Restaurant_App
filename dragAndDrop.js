function allowDrop(event)
{
  event.preventDefault();
}
function drag(event)
{   event.target.classList.add("dragging");
}
function drop(event){
  const current=document.getElementsByClassName("dragging");
  const container=event.target;
  const menuId=current[0].id;
  const tableId=container.id;
  const cost=menuList.get(menuId).cost;
  const item=menuList.get(menuId).name;
  const prevTot=tableList.get(tableId).bill;
  previous=container.getElementsByTagName("span");
  const newTot=prevTot+cost;
  const prevItems=tableList.get(tableId).noOfItems;
  const newItems=prevItems+1;
  for(let table of tableList){
    if (table[1].id===container.id)
    {
      table[1].bill=newTot;
      table[1].noOfItems=newItems;
      if(!table[1].itemList.has(item)){
        x=0;
      }
      else{
        x=table[1].itemList.get(item);
      }
      table[1].itemList.set(item,x+1);
      break;
    }
  }
  previous[0].innerHTML="Rs. "+newTot;
  previous[1].innerHTML="| Total items: "+newItems;
  current[0].classList.remove("dragging");
}
