const countValue=document.querySelector('#counter')

let increment=()=>{
    //get the value from UI
    let value=parseInt(countValue.textContent);
    //update value
    value=value+1;
    //set the value onto UI
    countValue.textContent=value;
}

let decrement=()=>{
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
}