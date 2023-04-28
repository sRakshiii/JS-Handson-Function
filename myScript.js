// function sum() {
//     let a = 10;
//     let b = 20;
//     let res = a + b ;
//     console.log(res);  
// }
// sum();

// function sum(a,b) {
//     var result = a + b ;
//     console.log(result);
// }
// sum(3,4);

// var myFunction = (a,b) => {
//     let res = a * b;
//     console.log(res);
// }
// myFunction(3,4);

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = 1; i <= n; i++){
        answer = answer * i;
      }
      return answer;
    }
      
  }
  let n = 5;
  answer = factorial(n)
  console.log("Factorial of " + n + " : " + answer);
