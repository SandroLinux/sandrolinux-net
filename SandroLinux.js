 

  
function greeting()

{

   var today = new Date();

   var hrs = today.getHours();

  

   document.write("<P><U></P>");

   if (hrs < 6)

      document.write("Good Night</U>");
      
   else if (hrs < 12)

      document.write("Good Morning</U>");
      
   else if (hrs < 17)

      document.write("Good Afternoon</U>");
      
   else if (hrs <= 19)

      document.write("Good Evening</U>");

   else if (hrs < 23)

      document.write("Good Night</U>");

   document.writeln("</B></P>");

  

}

greeting();

