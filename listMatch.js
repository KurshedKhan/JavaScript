function Match_item(){
    let item_match = document.getElementsByClassName("item_match")[0].value.toLowerCase();
    let list_item = document.querySelectorAll(".list_item li");

    list_item.forEach((item)=> {
        let text = item.innerText.toLowerCase();

        if(text.includes(item_match)){
            item.classList.add("highlight");
        }
        else{
            item.classList.remove("highlight");
        }
    });
}