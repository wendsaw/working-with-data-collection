const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let colums=[''];
let save='';

for (let i = 0; i < csv.length; i++) {
    save = save + '' + csv[i]

    if (save[i] == ',') {
        save = save.replace(',', ' ');

    }
    
    if (save[i] == '\n') {

        save = (save.replace('/', " "));
        // console.log(save);     
        colums=save    
    
    }



}
console.log(colums);
