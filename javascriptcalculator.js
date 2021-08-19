console.log("hello world");
let panel=document.getElementsByClassName("panel")[0];
// panel.innerHTML="hello";


let operatoroutput=[0,0,0,0,0];


function clear(){
    // console.log("AC pressed");
    let panelval=panel.innerHTML;
    panel.innerHTML="";
}





let equal=document.getElementById("equal");
equal.addEventListener("click",function pr1(){
let idx;
for (let i = 0; i < operatoroutput.length; i++) {
    if(operatoroutput[i]!=0){
        idx=i;
    }
}
    if(idx==0){
        let stringofno_2=panel.innerHTML;
        let val2=parseInt(stringofno_2,10);
        let sum=val2+operatoroutput[0];
        console.log(sum);
        // let finalans=parseInt(sum,10);
        clear();
        panel.innerHTML=`${sum}`;
        operatoroutput[0]=0;
    }

    if(idx==1){
        let stringofno_2=panel.innerHTML;
        let val2=parseInt(stringofno_2,10);
        let diff=operatoroutput[1]-val2;
        console.log(diff);
        
        clear();
        panel.innerHTML=`${diff}`;
        operatoroutput[1]=0;

    }

    if(idx==2){
        let stringofno_2=panel.innerHTML;
        let val2=parseInt(stringofno_2,10);
        let product=operatoroutput[2]*val2;
        console.log(product);
        
        clear();
        panel.innerHTML=`${product}`;
        operatoroutput[2]=0;

    }
    if(idx==3){
        let stringofno_2=panel.innerHTML;
        let val2=parseInt(stringofno_2,10);
        let product=operatoroutput[3]/val2;
        console.log(product);
        
        clear();
        panel.innerHTML=`${product}`;
        operatoroutput[3]=0;

    }
    if(idx==4){
        let stringofno_2=panel.innerHTML;
        let val2=parseInt(stringofno_2,10);
        let percent=(operatoroutput[4]*val2)/100;
        console.log(percent);
        
        clear();
        panel.innerHTML=`${percent}`;
        operatoroutput[4]=0;

    }

});




//number printing
let one=document.getElementById("one");
one.addEventListener("click",function pr1(){
    console.log("one pressed");
    panel.innerHTML+="1"
});
let two=document.getElementById("two");
two.addEventListener("click",function pr1(){
    console.log("two pressed");
    panel.innerHTML+="2"
});
let three=document.getElementById("three");
three.addEventListener("click",function pr1(){
    console.log("three pressed");
    panel.innerHTML+="3"
});
let four=document.getElementById("four");
four.addEventListener("click",function pr1(){
    console.log("four pressed");
    panel.innerHTML+="4"
});
let five=document.getElementById("five");
five.addEventListener("click",function pr1(){
    console.log("five pressed");
    panel.innerHTML+="5"
});
let six=document.getElementById("six");
six.addEventListener("click",function pr1(){
    console.log("six pressed");
    panel.innerHTML+="6"
});
let seven=document.getElementById("seven");
seven.addEventListener("click",function pr1(){
    console.log("seven pressed");
    panel.innerHTML+="7"
});
let eight=document.getElementById("eight");
eight.addEventListener("click",function pr1(){
    console.log("eight pressed");
    panel.innerHTML+="8"
});
let nine=document.getElementById("nine");
nine.addEventListener("click",function pr1(){
    console.log("nine pressed");
    panel.innerHTML+="9"
});
let zero=document.getElementById("zero");
zero.addEventListener("click",function pr1(){
    console.log("zero pressed");
    panel.innerHTML+="0"
});
//backspace
let cross=document.getElementById("cross");
cross.addEventListener("click",function pr1(){
    console.log("cross pressed");
    let panelval=panel.innerHTML;
    panel.innerHTML=panelval.substr(0,panelval.length-1);
});

//clear button
let AC=document.getElementById("AC");
AC.addEventListener("click", function AC(){
    
    console.log("AC pressed");
    let panelval=panel.innerHTML;
    panel.innerHTML="";
});

//plus
let plus=document.getElementById("plus");
plus.addEventListener("click",function add(){
    console.log("plus pressed");

    let var1str=panel.innerHTML;
    operatoroutput[0]=parseInt(var1str,10);

panel.innerHTML+="+";
// let numbtn=document.getElementsByClassName("numbtn");
clear();

});





//minus

let minus=document.getElementById("minus");
minus.addEventListener("click",function add(){
    console.log("minus pressed");
    let var1str=panel.innerHTML;
    operatoroutput[1]=parseInt(var1str,10);

panel.innerHTML+="-";
// let numbtn=document.getElementsByClassName("numbtn");
clear();

});

//multiply
let multiply=document.getElementById("multiply");
multiply.addEventListener("click",function add(){
    console.log("multiply pressed");
    let var1str=panel.innerHTML;
    operatoroutput[2]=parseInt(var1str,10);

panel.innerHTML+="*";
// let numbtn=document.getElementsByClassName("numbtn");
clear();

});

//divide
let divide=document.getElementById("divide");
divide.addEventListener("click",function add(){
    console.log("divide pressed");
    let var1str=panel.innerHTML;
    operatoroutput[3]=parseInt(var1str,10);

panel.innerHTML+="/";
// let numbtn=document.getElementsByClassName("numbtn");
clear();

});

//percent

let percent=document.getElementById("percentage");
percent.addEventListener("click",function add(){
    console.log("percent pressed");
    let var1str=panel.innerHTML;
    operatoroutput[4]=parseInt(var1str,10);

panel.innerHTML+="%";
// let numbtn=document.getElementsByClassName("numbtn");
clear();

});


