

function greeting()

{

   var today = new Date();

   var hrs = today.getHours();

  

   document.write("<H2><U>");

   if (hrs < 6)

      document.write("Good Night");
      
   else if (hrs < 12)

      document.write("Good Morning");
      
   else if (hrs < 17)

      document.write("Good Afternoon");
      
   else if (hrs <= 19)

      document.write("Good Evening");

   else if (hrs < 23)

      document.write("Good Night");

   document.writeln("</U></H2>");

  

}

greeting();