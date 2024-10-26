
function printTable(){
    let tableNum = document.getElementById('NumToPrint').value;
    let minLenght = document.getElementById('minLenght').value;
    let maxLenght = document.getElementById('maxLenght').value;

    for(let i=minLenght; i<=maxLenght; i++){
        document.getElementById('display-table').innerHTML += `${tableNum}x ${i} = ${ tableNum*i}<br>`
        
    }
    console.log('work');

}
function refresh(){
     document.getElementById('NumToPrint').value="";
     document.getElementById('minLenght').value="";
    document.getElementById('maxLenght').value="";
    document.getElementById('display-table').innerHTML="";


}
