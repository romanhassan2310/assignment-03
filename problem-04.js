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