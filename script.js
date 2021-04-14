function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    if(principal<= 0){
        document.writeln("Enter a positive number");
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    document.writeln("If you deposit ",principal,"\n" );
    document.writeln("at an interest rate of", rate,"\n");
    document.writeln("You will receive an amount of",175000,"\n");
    document.writeln("in the year", years.value,"\n");

}
          function updateRate() 
      {
          var rateval = document.getElementById("rate").value;
          document.getElementById("rate_val").innerText=rateval;
      }
