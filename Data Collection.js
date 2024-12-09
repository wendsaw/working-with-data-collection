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


//2) Declare a variable that stores the number of columns in each row of data within the CSV.

let file = csv.split('\n');

// console.log(file);

// 3) Store your results in a two-dimensional array.

let updated = file.map((user) => user.split(','))
console.log(updated);

let objectfile=[
    { id:'',name:'',occupation:'',age:''},
    { id:'',name:'',occupation:'',age:''},
    { id:'',name:'',occupation:'',age:''},
    { id:'',name:'',occupation:'',age:''},
    { id:'',name:'',occupation:'',age:''},
]
// for (let i=1; i<5; i++){
//     objectfile[i][0]=updated[i][0]
//     console.log(objectfile);
    
// }
// console.log(objectfile)
for(let i=1; i<5; i++){
    objectfile[i]=updated[i];
    for(let j=0 ;j<4; j++){
    objectfile[i][j]=updated[i][j];
    }
    
}
console.log(objectfile);

// 4) Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// Remove the last element from the sorted array.

let remove=objectfile.pop();
console.log(remove);
console.log(objectfile);
// Insert the following object at index 1:
objectfile.unshift("7","bilbo","none","111")
console.log(objectfile);

// 5) full circle
let text=objectfile.toString();
console.log(text);

