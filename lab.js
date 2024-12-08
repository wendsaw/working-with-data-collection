
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let cell1 = "";
// let row = "";
// for (const char of csv) {
//     if (char !== "\n" && char !== ",") {
//         cell1 += char;
//     } else if (char === ",") {
//         row += cell1 + " ";
//         cell1 = "";
//     } else if (char === "\n") {
//         row += cell1;
//         console.log(row);
//         row = "";
//         cell1 = "";
//     }
// }
// if (cell1) {
//     row += cell1;
//     console.log(row);
// }

// let colum=2

let text =csv.split('\n');
console.log(text);

let updated= text.map((user) => user.split(','))
console.log(updated);
// console.log(updated[0][0]);

// let updated= text.map((user) => 'hi') 
// console.log(updated);

// let file=csv;
// let rows=file.split('\n');
// let columns=rows[0].split(',')
// let data=[];
// for (let i = 1; i < rows.length;  i++) {
//     let cells=rows[i].split(',')

//     let rowsObj=   {}
//     for (let j=0;j<columns.length; j++){
//         rowsObj[columns[j]]=cells[j]

//     }
//     data.push(rowsObj)   
// }
// console.log(data);
// let result=[];
// for(let i=1; i<rows.length; i++ ){
// let objetc={};
// for (let j=0; j< columns.length; j++){
//          let y =data[0][j];
//          objetc[y.toLowerCase()]=data[i][j]    
// }
// result.push(objetc)
// }
// console.log(result);
// create object to store data 
let objectfile=[
    { id:'',name:'',occupation:'',age:''}

]
console.log(objectfile)
for(let i=0; i<updated.length; i++){
    objectfile[i]=updated[i];
    for(let j=0 ;j<4; j++){
        objectfile[i][j]=updated[i][j]
    }
}
console.log(objectfile, typeof objectfile);
console.log(objectfile.name);
