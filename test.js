// const entries = new Map([
//     ['id', 42 ],['Name', 'Bruce','Edy'] ,['occup', 'doc'],['age', 34]
//   ]);
  

//   const obj = Object.fromEntries(entries);
  
//   console.log(obj);
  // Expected output: Object { foo: "bar", baz: 42 }

  const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
  let file = csv.split('\n');
  let updated = file.map((user) => user.split(','))

  
       obj = Object.fromEntries(updated);

console.log(obj);