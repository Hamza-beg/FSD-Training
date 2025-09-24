// let a=542;
// if(a>100){
//     let a=300;
//     console.log("a inside:"+a)
// }
// else{
//     console.log("else condition");
//     // 
// }

// let a="38"
// if(a===38)
//     console.log("equal data")
// else 
//     console.log("not equal data")


// const myname="Humza"
// console.log(`My name is ${myname}`)



// function msg(name)
// {
// return name+"WELCOME TO JAVASCRIPT ENVIRONMENT"
// }

//  let data=msg("Humza ")
//  console.log(data)
//  const data=()=>console.log("hello world")
//   data()

// (()=>console.log("welcome to abes"))();

// setTimeout(()=>{
//     console.log("Hello world")
// },1000);

// setInterval(()=>console.log("Hello World"),1000);


// function greetings(msg="wellcome"){
//     console.log(`HII ${msg}`);
// }
//  greetings()

function selectlanguage(lang){
    let data;
    if(lang=='java'){
        function javacompiler(){
            return "Java Compiler selected"
        }
        data=javacompiler();

    }
    else if(lang=='C'){
        function CCompiler(){
            return "C Compiler selected"
        }
        data=CCompiler();

    }
    else{
        function PythonCompiler(){
            return "Python Compiler is selected"
        }
        data=PythonCompiler();
    }
    return data;
}

console.log(selectlanguage("Java"))