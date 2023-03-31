// [program no: 1]
{var a=200,b=50;
    console.log("a is a maximum number.");
}
// [program no: 2]
{
    var x=25,y=40,z=35;
    console.log("y is a maximum number.");
}
// [program no: 3]
{
    var usernumber =("-75 ");
    if(usernumber > 0)
    {
        console.log("The number is positive.");
    }
   else if(usernumber < 0)
    {
        console.log("The number is nagetive.");
    }
   else if(usernumber == 0)
    {
        console.log("The number is zero.");
    }
}
// [program no: 4]
{
    var usernumber = ("110");
    if (usernumber % 5 == 0 && usernumber % 11 == 0 )
    {
        console.log("This number is divisible by 5 or 11");
    }
}
// [program no: 5]
{
    var usernumber = ("700");
    if (usernumber % 2 == 0)
    {
        console.log("%d is a even number" ,usernumber);
    }
    else 
    {
        console.log("%d is a odd number" ,usernumber);
    }
}
// [program no: 6]
{
    var year = ("2023");
    if (year % 4 == 0)
    {
        console.log("%d is a leap year" ,year);
    }
    else
    {
        console.log("%d is not a leap year" ,year);
    }
}
// [program no: 7]
{
    var ch = ("K");
if(ch > "a" && ch < "z" )
    console.log("This character is a alphabet");
else if (ch > "A" && ch < "Z")
    console.log("This character is a alphabet");
else
    console.log("This character is not a alphabet");   
}
// [program no: 8]
{
    var vowel="o"
if(vowel=="a")
     console.log("Your entered word is vowel");
else if(vowel=="e")
     console.log("Your entered word is vowel");
else if(vowel=="i")
     console.log("Your entered word is vowel");
else if(vowel=="o")
     console.log("Your entered word is vowel");
else if(vowel=="u")
     console.log("Your entered word is vowel");
else if(vowel=="A")
     console.log("Your entered word is vowel");
else if(vowel=="E")
     console.log("Your entered word is vowel");
else if(vowel=="I")
     console.log("Your entered word is vowel");
else if(vowel=="O")
     console.log("Your entered word is vowel");
else if(vowel=="U")
     console.log("Your entered word is vowel");
else
    console.log("Your entered word is not a vowel");
}
// [program no: 9]
{
    var ch = ("@")
if (ch > "a" && ch < "z")
    console.log("Your entered word is alphabet");
else if (ch > "A" && ch < "Z")
    console.log("Your entered word is alphabet");
else if (ch > "1" && ch < "9")
    console.log("Your entered word is digit");
else
    console.log("Your entered word is special character");
}
// [program no: 10]
{
    var ch = ("Q")
if (ch > "A" && ch < "Z")
    console.log("Your entered word is uppercase alphabet");
else if (ch > "a" && ch < "z")
    console.log("Your entered word is lowercase alphabet");
}
// {
//     var weak = ("1")
//     if (weak )
// }
// [program no: 12]
{
    var month = (2)
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 ||month == 12)
        console.log("month no:%d has 31 days",month);
    else if (month == 2)
        console.log("%dnd month has 28 days",month);    
    else
        console.log("month no:%d has 30 days",month);    
}
// [program no: 13]
{
    var a=105,b=10,c=45;
    z = a*(c-b);
    console.log("The answer of z is",z);
}
// [program no: 14]
{
    var a=45,b=47,c=45;
    if ( a==b && b==c && c==a)
      console.log("Triangle is valid ");
    else
      console.log("Triangle is not valid ");  
}
// [program no: 15]
{
   var sideA = "10cm",sideB = "10cm",sideC = "10cm";
   if ( sideA == sideB && sideB == sideC && sideA == sideC)
      console.log("This triangle is valid");
   else  
      console.log("This triangle is not valid");
}
// [program no: 16]
{
    var a=56,b=90,c=34;
    if ( a==56 && b==90 && c==34)
       console.log("This triangle is scalene triangle");
    else   
       console.log("This triangle is not scalene triangle");  
}
// [program no: 18]
// "If the amount of money in the variable is less than 10,000,
// then we incur a loss, and if it is more than 10,000, we make a profit."
{   
    var money=5000 ;
    if (money < 10000)
       console.log("We got Loss");
    if (money > 10000)
       console.log("We got Profit");
}
// [program no: 19]
{
    var  Physics=95, Chemistry=95, Biology=95, Mathematics=95, Computer=95;
    var Totalnumber = "95%" ;
    if (Totalnumber > "90%" )
       console.log("Grade A");
    else if (Totalnumber > "80%" )
       console.log("Grade B");
    else if (Totalnumber > "70%" )
       console.log("Grade C");
    else if (Totalnumber > "60%" )
       console.log("Grade D");
    else if (Totalnumber > "50%" )
       console.log("Grade E");
    else if (Totalnumber > "40%" )
       console.log("Grade F");
    else if (Totalnumber < "40%" )
       console.log("Failed");
}