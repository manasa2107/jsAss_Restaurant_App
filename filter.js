//to search table

function searchTable() { 
    let input = document.getElementById('search-table').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('table-item'); 
    for (i = 0; i < x.length; i++) {  
        let value=x[i].getElementsByTagName("h2");
        finalValue=value[0].innerHTML.toLowerCase();
        if(finalValue.indexOf(input)>-1){
            x[i].style.display=""
        }
        else{
            x[i].style.display="none";
        }
        } 
    } 
    
//to search menu

    function searchMenu(e) { 
        for(let item of menuList){
            let id=document.getElementById(item[1].id);
            id.removeAttribute("style");
        }       
        for(let item of menuList){
            let itemName=item[1].name;
            let itemCategory=item[1].category;
            let regex=new RegExp(e.target.value,"i");
            if((!regex.test(itemName))&&(!regex.test(itemCategory))){
                let id=document.getElementById(item[1].id);
                id.style.display="none";
            }
        }
 } 
 document.getElementById("search-menu").addEventListener("input",searchMenu);