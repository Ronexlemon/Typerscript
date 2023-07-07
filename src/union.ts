function kgToLbs(weight: number |string):number{
 //Narrowing
 if(typeof(weight)=== 'number'){
    return weight*4;
 }
 else{
    return parseInt(weight)*2.2;
 }
}