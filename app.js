                   // CHAPTER 21-25

//Task 1
// var first_name=prompt("Enter your first name: ");
// var Last_name=prompt("Enter your Last name: ");
// var fullname =first_name +  Last_name;
// alert(fullname)

//Task 2
// var fav_mob=prompt("Enter your fav Mobile phone Model: ");
// var len=fav_mob.length;
// alert(fav_mob +"\n Length of string: "+ len)  

//Task 3
// var a="Pakistani";
// var ind=a.indexOf('n');
// alert("String: "+a +"\n Index of 'n':"+ind)

//Task 4
// var a="Hello World";
// var ind=a.lastIndexOf('l');
// alert("String: "+a +"\n Index of 'l':"+ind)

//Task 5
// var a="Pakistani";
// var ind=a.charAt(3);
// alert("String: "+a +"\n Character at Index 3 :"+ind)

//Task 6
// var first_name=prompt("Enter your first name: ");
// var Last_name=prompt("Enter your Last name: ");
// var fullname =first_name.concat(Last_name);
// alert(fullname)

//Task 7
// var a="Hyderabad";
// var ind=a.replace('Hyder','Islam');
// alert("City: "+a +"\n After replacement :"+ind)


//Task 8
// var message = ("Ali and Sami are best friends. They play cricket and football together.");
// var ind=message.replace(/and/g,'&');
// document.write(ind)


//Task 9
// var a="472";
// var b=typeof a;
// var c=Number(a);
// var d=typeof c;
// document.write("Value: " + a +"<br> Type: " + b + "<br> Value: " + c + "<br> Type: " + d )


//Task 10
// var a=prompt("Enter any word ");
// var b = a.toUpperCase();
// alert("User Input: " + a + "\n Upper case: " + b)


//Task 11
// var a=prompt("Enter any word ");
// var b = a[0].toUpperCase();
// var c= a.slice(1);
// alert("User Input: " + a + "\n Title case: " + b + c)


//Task 12
// var num=35.36;
// var str=num.toString();
// var dot=str.replace(".","");
// alert("Number: " + num + "\n Result: " + dot)


//Task 13
// var username=prompt("Enter your Username")
// if(username =="@" && "!" && ","&&"."){
//  alert("Please Enter a valid Username")
// }
// else{
//     alert(username)
// }


//Task 14
// var arr = ["cake", "biscuit", "cookie", "chips", "patties"]
// var a = prompt("Welcome to ABC bakery! What do you want to order sir/ma'am? :)");
// a = a.toLowerCase();
// var search = arr.includes(a);
// if (search == true){
//     alert("Yes "+a+ " is available at index: "+ arr.indexOf(a)+ "in our bakery");
// }
// else{
//     alert("We are Sorry! we dont have "+a);
// }


//Task 16

// var university = "university of karachi"
// var uni_split = university.split("")
// for( var i = 0; i<university.length; i++){
//     document.write("<br>"+uni_split[i])
// }


// Task # 17

// var userInput = prompt("Enter any word");
// var lastChar = userInput.charAt(userInput.length-1);
// alert("Word: "+userInput+"\nLast alphabet: "+lastChar);


// Task # 18

// var occuranceMessage = "The quick brown for jumps over the lazy dog";
// occuranceMessage = occuranceMessage.toLowerCase();
// var occurNum = occuranceMessage.match(/the/g);
// alert("there are "+occurNum.length+" occurance(s) of word 'The'");
        

                                    // CHAPTER 26-30
    
 //Task 1                                   
// var pos_int=+prompt("Enter positive Number");
// var rnd=Math.round(pos_int);
// var flr=Math.floor(pos_int);
// var cei=Math.ceil(pos_int);
// document.write(pos_int +"<br>"+ rnd +"<br>"+ flr +"<br>"+ cei)


 //Task 2                            
// var pos_int=+prompt("Enter Negative Number");
// var rnd=Math.round(pos_int);
// var flr=Math.floor(pos_int);
// var cei=Math.ceil(pos_int);
// document.write(pos_int +"<br>"+ rnd +"<br>"+ flr +"<br>"+ cei)


//Task 3            
// var pos_int=+prompt("Enter any Number");
// var rnd=Math.abs(pos_int);
// alert("Absolute value of " + pos_int + " is " + rnd)


//Task 4           
// var pos_int=Math.random()
// alert("random dice value is " + pos_int )


//Task 5
// var a=Math.floor(Math.random() * 2)+1;
// console.log(a)
// if(a==1){
// console.log("random coin value: Tails")
// }
// else{
//     console.log("random coin value: Heads")
// }


//Task 6
// var a=Math.floor(Math.random() * 100)+1;
// console.log("random number betweeen 1 to 100 is: "+a)

//Task 7
// var weight = prompt("Enter your weight in Kilograms");
// var ConvWeight = parseInt(weight);
// alert("The weight of user in kilograms is "+ConvWeight);

//Task 8
// var a=Math.floor(Math.random() * 10)+1;
// var b=+prompt("Enter any number between 0 and 10")
// if(a===b){
// console.log("Congratulation ")
// }
// else{
//     console.log("Try Again Later ") 
// }



                            // Chapter  31-34

// Task  1

 //var NewDate = new Date();
// document.writeln("Current date is ".bold()+"<br>"+NewDate);

// Task  2

// var month = new Array();
//   month[0] = "January";
//   month[1] = "February";
//   month[2] = "March";
//   month[3] = "April";
//  month[4] = "May";
//   month[6] = "July";
//   month[7] = "August";
//   month[8] = "September";
//   month[9] = "October";
//  month[10] = "November";
//   month[11] = "December";

//   var MyDate = new Date();
//   var MonthName = month[MyDate.getMonth()];
//   alert("Current month is "+MonthName);

// Task  3

// var dayName = new Array();
// dayName[0] = "Sun";
// dayName[1] = "Mon";
// dayName[2] = "Tue";
// dayName[3] = "Wed";
// dayName[4] = "Thur";
// dayName[5] = "Fri";
// dayName[6] = "Sat";
//   var tdy = new Date();
//   var dayz = dayName[tdy.getDay()];
//   alert("today is "+dayz)

// Task  4

// var DName = new Array();
// DName[0] = "Sun";
// DName[1] = "Mon";
// DName[2] = "Tue";
// DName[3] = "Wed";
// DName[4] = "Thur";
// DName[5] = "Fri";
// DName[6] = "Sat";
//   var today = new Date();
//   var din = DName[today.getDay()];
//   alert("today is "+din)
//   if(din == "Sat"){
//       alert("Today is fun Day!");
//   }
//   else if(din == "Sun"){
//     alert("Today is fun Day!");
// }
// else{
//     alert("Kaam pr jao aaj!");
// }

// Task  5

// var t = new Date();
// var TodaysDate = t.getDate();
// if(TodaysDate < 15){
//     alert("Today's date is "+TodaysDate+"\nFirst 15 days of month");
// }
// else{
//     alert("Today's date is "+TodaysDate+"\nLast 15 days of month");    
// }

// Task 6

// var CurDate = new Date();
// var milliSeconds = CurDate.getTime();
// var mins = Math.floor(milliSeconds / 60000);
// document.writeln("Current date is ".bold()+CurDate+"<br>"+"<br>"+"Milliseconds since midnight, Jan. 1,1970: ".bold()+milliSeconds+"<br>"+"<br>"+"Minutes since midnight, Jan. 1970: ".bold()+mins);


// Task  7

// var AjKiDate = new Date();
// var hourz = AjKiDate.getHours();
// if(hourz > 12){
//     alert("Time is "+hourz+"\nIts P.M")
// }
// else{
//     alert("Time is "+hourz+"\nIts A.M")
// }

// Task  8

// var LaterDay = new Date(new Date().getFullYear(), 11, 31);
// document.writeln("Last Day of this year is: ".bold()+LaterDay);

// Task  9

// var date_1 = new Date('04/25/2020');
// var date_2 = new Date();
// var diff_Time = Math.abs(date_2 - date_1);
// var diff_Days = Math.ceil(diff_Time / (1000 * 60 * 60 * 24));
// alert(diff_Days + " days have passed since 1st Ramadan 2020");



// Task  10

// var date1 = new Date();
// var date2 = new Date("Dec 05, 2015 20:15:16");
// var seconds = Math.abs(date1 - date2) / 1000;
// alert("From reference date: "+date2+"\n"+Math.ceil(seconds)+" seconds have passed away");

// TAsk  11

// var presentDate = new Date();
// document.writeln("Current date is: ".bold()+presentDate);
// presentDate.setHours(presentDate.getHours() - 1);
// document.writeln("<br> One hour ago: ".bold()+presentDate);

// TAsk  12

// var DateAgo = new Date();
// document.writeln("Current date is: ".bold()+DateAgo);
// DateAgo.setFullYear(DateAgo.getFullYear() - 100);
// document.writeln("<br> 100 years ago date was: ".bold()+DateAgo);

// Task  13

// var My_Date = new Date();
// var CurrentAge = +prompt("enter age")
// My_Date.setFullYear(My_Date.getFullYear() - CurrentAge);
// var YearOfBirth = My_Date.getFullYear()
// document.writeln("<br> Your year of birth is: ".bold()+YearOfBirth);

// Task  14

// var ConsumerName = prompt("Enter your name");
// var CurrentMonth = prompt("Enter current month");
// var NumOfUnits = +prompt("Enter number of units");
// var ChargesPerUnit = 16, LatePaymentCharges = 350, NetPayment = (NumOfUnits * ChargesPerUnit), Late_Payment = (NumOfUnits * ChargesPerUnit) + LatePaymentCharges;
// document.writeln("K-Electric Bill".bold()+"<br> Consumer Name: "+ConsumerName+"<br> Current Month: "+CurrentMonth+"<br> No. of Units: "+NumOfUnits+"<br> Per Unit Charges: "+ChargesPerUnit);
// document.writeln("<br><br> Net Payable Amount (Within Due Date): "+Math.round(NetPayment)+"<br> Gross Payable Amount (After Due Date): "+Math.round(Late_Payment)+"<br> Late Payment Charges: "+LatePaymentCharges);



                            // Chapter  35-38

// Task  1

// function tellDateAndTime() {
//     var now = new Date();
//     document.writeln(now)
// }
// tellDateAndTime();

// Task  2

// function NameGreeting(){
//     var First_Name = prompt("Enter your first name");
//     var Last_Name = prompt("Enter your last name");
//     alert("Welcome "+First_Name+" "+Last_Name);
// }
// NameGreeting();

// Task  3

// function addition(First_Num,Second_Num,Result_Num){
//     First_Num = +prompt("enter first number");
//     Second_Num = +prompt("Enter second number");
//     Result_Num = First_Num + Second_Num
//     alert(Result_Num)
// }
// addition();

// Task  4

// function calculator(Num_1, Num_2, Res_3, opt){
//     Num_1 = +prompt("Enter 1st operand")
//     Num_2 = +prompt("Enter 2nd operand")
//     opt = prompt("Enter operator")
//     if(opt === "+"){
//         Res_3 = Num_1 + Num_2
//         alert(Res_3)
//     }
//     else if(opt === "-"){
//         Res_3 = Num_1 - Num_2
//         alert(Res_3)
//     }
//     else if(opt === "*"){
//         Res_3 = Num_1 * Num_2
//         alert(Res_3)
//     }
//     else if(opt === "/"){
//         Res_3 = Num_1 / Num_2
//         alert(Res_3)
//     }
//     else{
//         alert("Invalid operator")
//     }
// }
// calculator();

// Task  5

// function squaring(a){
//     a= +prompt("enter any num");
//     alert("Square of your number is "+a*a)
// }
// squaring();

// Task  6

// function factorial(){
//     var input = +prompt("Enter the number for factorial");
//     var result = input;

// for(var i=1;i < input;i++){
//   result = i * result;
// }
// alert("The factorial of "+input+" is "+result);
// }
// factorial();

// Task  7

// function counting(){
//     var startNum = +prompt("Enter starting num")
//     var endNum = +prompt("Enter ending num")
//     for(var j = startNum; j <= endNum; j++){
//         document.writeln(j+"<br>")
//     }
// }
// counting();

// Task  8

// function findHypotenuse(base, per)
//     { 
//         base = +prompt("Enter value for base");
//         per = +prompt("Enter value for perpendicular");
//         var h = Math.sqrt((base * base) + (per * per)); 
//         alert("The value of hypotenuse is "+h) 
//     } 
// findHypotenuse();

// Task  9

// function CalculateArea(height,widht,area){
//     height = +prompt("Enter value for Height")
//     widht = +prompt("Enter value for Widht")
//     area = height*widht;
//     alert("Area of rectangle is "+area);
// }
// CalculateArea();

// TAsk  10

// function ReverseString(strOne, strTwo) {
//     strOne = prompt("enter word");
//     strTwo = strOne; 
// strOne =  strOne.split('').reverse().join('') 
// if (strTwo === strOne){
//     alert("Its a palindrome")
// }
// else{
//     alert("Its a Not palindrome")
// }
// } 
// ReverseString()

// Task  11

// function first_letter_capital(letterOne)
// {
//  return letterOne.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// document.writeln(first_letter_capital('the quick brown fix'));

// Task  12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.writeln("The longest word is "+find_longest_word('Web Development Tutorial'));

// task  13

// function character_counting(str_1, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str_1.length; position++) 
//  {
//     if (str_1.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(character_counting('w3resource.com', 'o'));



// Task  14

// function calcCircumference(){
//     var radius = +prompt("Enter radius to calculate circumference")
//     var circum = (2 * 3.14 *radius);
//     alert("The circumference is "+circum);
// }
// function calcArea(){
//     var radius_1 = +prompt("Enter radius to calculate are of circle")
//     var area_1 = (3.14 *(radius_1*radius_1));
//     alert("The area is "+area_1);
// }
// calcCircumference();
// calcArea();

















