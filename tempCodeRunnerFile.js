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