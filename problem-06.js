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
