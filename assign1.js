var a=['1','2'];
console.log("array before adding value:");
console.log(a);
var v=a.splice(2,0,6);

function arrP(array,val){
    
    console.log("array after adding value:" +array);
    console.log(array);
}

arrP(a,v);