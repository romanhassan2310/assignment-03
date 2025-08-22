//-------01--------
/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
var result = area / 2;
console.log(result);


//----------02----------
/** Problem -02 ( Cycle or Laptop ) */
var money = 45000;
//write your code here
if(money >= 25000){
    console.log('Laptop');
}
else if( money>= 10000 ){
    console.log('Cycle');
}
else{
    console.log('Chocolate');
}

//---------03--------------
/** Problem -03 ( Medicine Planner ) */
var lastDay = 4 ;
//write your code here
for(let day= 1; day<=lastDay; day++){
   if (day % 3!==0){
     console.log(`${day} - rest`);
  
}
else{
    console.log(`${day} - medicine`);
}
}


//---------04-------------
/** Problem 04 - (Delete / Store) */
var fileName= "docx.xpdf";
//write your code here

if (fileName[0] === '#'){
    console.log('Store');
}
else if (fileName.endsWith('.pdf')){
    console.log('Store');
}
else if(fileName.endsWith('docx')){
    console.log('Store');
}
else{
    console.log('Delete')
}

//---------05-------------
/** Problem 05 - ( PH Email Generator )  */
var student= { name: "monu" , roll: 99,department: "eee"  };
//write your code here
let email =student.name + student.roll + '.'+ student.department + '@ph.ac.bd';
console.log(email);


//------------06-----------
/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
let currentSalary = startingSalary;
for(let i=1; i<= experience; i++){
    // 5% increment per year.
 incrementSalary =(currentSalary *5 /  100);
 currentSalary = currentSalary + incrementSalary;

}
console.log(currentSalary.toFixed(2));