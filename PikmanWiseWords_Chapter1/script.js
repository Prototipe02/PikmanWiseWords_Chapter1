

function PikmanWiseWords()
{

var num1 = 2;
var num2 = 1;
var randomNumber = parseInt( Math.random() * 5);

if(randomNumber == 0)
{
    alert("pikman está te observando...");
}
if(randomNumber == 1)
{
   var answer = prompt("você gosta de pikman?")

   if(answer == "sim")
   {
     alert("pikman está sorrindo");
   }
   else
   {alert("lembre-se, pikman nunca esquece o nome daqueles que falam mal dele...")}
}
if(randomNumber == 2)
{alert("pikman está tímido😳👉👈");}
if(randomNumber == 3)
{alert("pikman sussura em seu ouvido: ...poyo...");}
if(randomNumber == 4)
{alert("pikman não sabe o que dizer");}

}