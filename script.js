// let collapsable = document.querySelectorAll(".collapsable");
// let collapse = document.querySelectorAll(".collapse");

// collapse.forEach(function (item, index) {
//     item.addEventListener("click", ()=>{
//         // collapsable.forEach((divItem)=>{
//         //     divItem.classList.remove("collapsed");
//         // });

//         if(collapsable[index].classList.contains("collapsable")){
//             collapsable[index].classList.add("collapsed");
//             collapsable[index].classList.remove("collapsable"); 
//         } 
        
//         else if(collapsable[index].classList.contains("collapsed")){
//             collapsable[index].classList.remove("collapsed")
//             collapsable[index].classList.add("collapsable");
//         }
//     });
// });

let card_title = document.querySelectorAll(".card-title");
let card_content = document.querySelectorAll(".card-content");

card_title.forEach(function(item, index){
    item.addEventListener("click", ()=>{
        item.classList.toggle("active");
        if(item.classList.contains("active")){
            // card_content[index].style.maxHeight = card_content[index].scrollHeight + "px";
            card_content[index].style.maxHeight = 100 + '%';
        } else{
            card_content[index].style.maxHeight = null;
        }
    });
});