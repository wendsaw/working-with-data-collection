// csv data collection
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let colums = [''];
// let save = [''];


// for (let i = 0; i < csv.length; i++) {
//     save = save + '' + csv[i]

//     if (save[i] == ',') {
//         save = save.replace(',', ' ');

//     }

//     if (save[i] == '\n') {

//         save = (save.replace('/', " "));



//     }



// }
// console.log(save);


// Declare a variable that stores the number of columns in each row of data within the CSV.

let file = csv.split('\n');

console.log(file);

// Store your results in a two-dimensional array.

let updated = file.map((user) => user.split(','))
console.log(updated);
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

