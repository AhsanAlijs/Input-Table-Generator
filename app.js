



function genrate(){
    const input = document.getElementById("inputTable").value;
    const tableDisplay = document.getElementById("table-div");
    tableDisplay.innerHTML = ''
for(let i = 1;i <= 10; i++){
    tableDisplay.innerHTML += `${input} x ${i} = ${i*input} <br/>`;
}
}