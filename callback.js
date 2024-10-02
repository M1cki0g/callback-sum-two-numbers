function inputs(num1 , num2 , res) {
          if(num1 && num2 ){
              res(num1,num2);
            }
            else{
                  console.log("please enter a number");
              }
          }
          
          inputs(2 , 2 , function(num1, num2){
                console.log(`sum:  ${num1}+${num2} = ${num1 + num2}`);
            });
