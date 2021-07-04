// convert faharenheit to celcious.
const convertc= (number) => ((number-32)*5/9);
// convert celcious to faharenheit.
const convertf= (number) => ((number*9/5)+32);

// defination of calculator() function 
const calculator=() =>{
    const number=document.getElementById('num').value;
    const val=document.getElementById('sel');
    const a=sel.options[val.selectedIndex].value;
    console.log(a);
let res;
    if(a=='fer'){
        res=convertc(number);
        document.getElementById('sp').innerHTML=`${res} °Celsius`;
    }else{
        res=convertf(number);
        document.getElementById('sp').innerHTML=`${res} °Fahrenheit`;
    }
}
