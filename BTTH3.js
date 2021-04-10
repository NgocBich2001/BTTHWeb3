var listIndex = 0;
var list =  document.getElementsByClassName("silde_img");
for(x of list) {
    x.style.display = "none";
}
list[listIndex].style.display = "block";
function ShowLeft(){
    for(x of list) {
        x.style.display = "none";
    }
    if(listIndex == 0)
    {
        listIndex =  list.length-1;
    } else {
        listIndex = listIndex -1;
    } 
    list[listIndex].style.display = "block";
    setTimeout(ShowLeft,5000);
}
function ShowRight(){
    for(x of list) {
        x.style.display = "none";
    }
    if(listIndex == list.length-1)
    {
        listIndex =  0;
    } else {
        listIndex = listIndex + 1;
    } 
    list[listIndex].style.display = "block";
    setTimeout(ShowRight,5000);
}



