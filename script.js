const groceries = document.getElementsByClassName
("groceries")[0];
const cart = document.getElementById("cart");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");


cart.addEventListener("click", function(){
    allItems.innerHTML = "";
})

userInput.addEventListener("keydown", function(event){
    if (event.key =="Enter")
    addItem();
})

function addItem() {
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through"; /*when click, will draw through the item */
    })
    allItems.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
}
