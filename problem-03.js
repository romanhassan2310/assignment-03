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
