// properties to remember
// mouseover - when we bring mouse over anything
// mouseout - when remove mouse from anything

const box = document.getElementsByClassName("square")

for(let item of box){
    item.addEventListener("mouseover",()=>{

        for(let t of box){
            if(t.id != item.id){
                t.style.backgroundColor = "#6F4E37"

            }
        }
    })
    item.addEventListener("mouseout",()=>{
        for(let t of box){
            t.style.backgroundColor = "#E6E6FA"
        }
    })
}

