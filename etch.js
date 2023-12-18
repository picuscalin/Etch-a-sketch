 const container=document.querySelector(".container");


function board(rowNum,columnNum){
    const wrapper= document.createElement("div");
    wrapper.classList.add("wrapper");
     for(let i=0;i<rowNum;i++){
        let row=document.createElement("div");
        row.classList.add("row")
        for(let j=0;j<columnNum;j++){
            let column=document.createElement("div")
            column.addEventListener("mouseenter",()=>{
                column.style.backgroundColor="blue";
            })
           
            
            column.classList.add("column")
            row.appendChild(column)
        }
        wrapper.appendChild(row)
        
       
    }
    container.appendChild(wrapper)
}

 
board(16,16);
console.log(container)
let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    let user=Number(prompt("enter the size you want"));
    while(user>100){
        user=Number(prompt("enter the size you want"));


    }
    const wrap=document.querySelector(".wrapper")
    
    if(!wrap){
        board(user,user)
    }else{
        wrap.remove()
        board(user,user)
    }
   
  
    
})




