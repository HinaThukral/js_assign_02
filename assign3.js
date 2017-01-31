let arr=['1','2','3','7'];
let i=3;
function arrIndex(array,index){
    console.log(array);
    for(let i=0; i<=index; i++){
        
         let a=array[i];
         
         a =+a + +2;
         console.log("array after adding 2:"+ "for index position:"+ i+ ":" +a);
         
    }
    
         
         
}
arrIndex(arr,i);
