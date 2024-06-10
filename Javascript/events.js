// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
let button = document.getElementById("btn")


// Adding an event listener
                     //   event    function 
button.addEventListener("click", () => {  
    document.getElementById("target").textContent = "You have been hacked!"
})


button.addEventListener("dblclick", () => {  
    document.getElementById("target").textContent = "Just Kidding. LOL!"
})

button.addEventListener("contextmenu", () => {   // right click
    document.getElementById("target").textContent = "Why Right Click??"
})


button.addEventListener("keydown", (event) => {  
    console.log(event)
    if(event.key == "Enter"){
        let enter = confirm("Are you sure?")
        if(enter){
            document.getElementById("target").after("Got it.")
        }
    }
})