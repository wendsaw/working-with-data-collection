
// let objt = {
//     Firstname:"",
//     Lastname: "",
//     birthdate: "05/26/1982",
//     SocialNumber: 99999999999,
// }
// let file=[[{ LastName:'',FirstName:'',Country:""}],
//            [{ LastName:'',FirstName:'',Country:""}]    
// ]



// objt.Firstname = "wendpingre";
// objt.Lastname = "sawadogo";
// objt.birthdate = "05261982";
// objt.SocialNumber = 636889917;
// objt.Firstname = "anita";
// objt.Lastname = "someo";
// objt.birthdate = "05261982";
// objt.SocialNumber = 636889917;

// // for (let i=1; i<objt.lenght; i++){

// // }

// // console.log(objt.Firstname,objt.Lastname,objt.birthdate,objt.SocialNumber);

// console.log(objt);

// file[0][0]='sawadogo';
// file[0][1]='wendpingre';
// file[0][2]='Burkina Faso';




// file[1][0]='Anita';
// file[1][1]='Some';
// file[1][2]='USA';
// console.log(file);

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let file = csv.split('\n');

// console.log(file);

// 3) Store your results in a two-dimensional array.

let updated = file.map((user) => user.split(','))
console.log(updated);
const obj={};
for(let i=o; i<4; i++){
 obj = Object.fromEntries(updated[i][0]);

}
console.log(obj);