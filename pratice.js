// STRING METHODS


// let str="" ---> string literals 

// if we want define asa a object----->need to use String constructor

// let str= new String("hello");   is a stinrg object



// now we create a object using string contructor

let str="hello";
console.log(typeof(str));  // primitive datatype
let str2=new String("hii");
console.log(typeof(str2));  /// string acts a object so non primitive data type
console.log(str2);

// prototype: is a genius of string 
// in this prototype there is string methods is there\



// to define function as a propertie is called as a method

// let obj={

//     propertie:function (){

//     }
// }



// list of string methods:

// 1:charAt() :TO ACCESS THE INDEX OF THE VARIABLE

let string_methods="wellcome";
let index=str.charAt(2);  // -ve value does support
let index2=str.at(-5); // to get neg values of the string begings with -1
console.log(index);
console.log(index2);

// 2.string.length : to access the string length

let str3="namaskaram";
console.log(`${str3.length} is string length`);


//3. slice-method(start,end):to access the pieces of the string

let str4="sometimes";
let slice=str4.slice(2,5);
console.log(`${slice} slice `);

// 4.charcodeAt():it  will returns the unicode value of the character

console.log(str4.charCodeAt(2),"unicode value");

//5.substring(start/end):this also same as slice 
let str5="javascript";
let st=str5.substring(2,5);
console.log(st);

// note:here neg values takes as a 0 

//6.SUBSTR():WE CAN EXTRACT THE A PART OF THE STRING
let guvi="guviplatform";
console.log(guvi.substr(4));
// note:first parameter is the starting index and second parameter is length of the string

// 7.toUpperCase()&toLowerCase()
let upperlower="helloWOrlLd";
console.log(upperlower.toUpperCase());
console.log(upperlower.toLowerCase());
// note:toUpperCase is returns all elements should be uppercase
// toLowerCase returns all elements should be lower case


//8. concat():concat the strings
let s1="bala";
let s2="venkata";
let s3="veeraswamy";
let result=s1.concat(s2,s3);
console.log(result )
// note:concates all the strings

//9. trim():it will returns the new modifyied string
let w1="    javascript   ";
console.log(w1.length);
let print=w1.trim();
console.log(print.length);
// returns new string by removing empty spaces at starting and end

// trimStart():it returns new string by removing empty space of the starting index
let start=w1.trimStart();
console.log(start)
// trimEnd():it returns new string by removing empty space of the end of the string

let end=w1.trimEnd();
console.log(end);

// 10.padstart():it returns what we have placed in the length
let y="javascript";
let o=y.padStart(12,"   ");
console.log(o);
console.log(y.padEnd(20,"so")) // it add so until the string length reaches


// 11.repeat():we can repeat a string multiple times
let g="hii";
console.log(g.repeat(3));

// 12.replace(old,new):it will replace the one string to another string
let k="hello hello hello HELLO";
console.log(k.replace(/hello/ig,"hi"));
// note:it will replace the first one
// replacing all matches with case insensitivec
// 13.replaceAll():it will replace the same string string as multiples
let r="my name bala venkata bala venkata";
console.log(r.replaceAll("bala","veeraswamy"));

// ṣtring search  methods

let j="venkatposina";
let op=j.indexOf("a");
console.log(op);
// returns index of the character in string if it is present and returns -1 if nit available

let h="javascript";
let p=h.lastIndexOf("p");
console.log(p);


// problems

// to check each character is uppercase or not
let string="hjhjkJhhuhkjGFTFJHjjhh";
function stringConversion(){
    for(i=0;i<string.length;i++)
        {
            if(string[i]==string[i].toUpperCase()){
                console.log(string[i].toLowerCase())
            }
            else{
                console.log(`${string[i].toUpperCase()} is lower to upper`)
            }
        
        }
        
        
}

stringConversion();


// to check one character of the array of strings

let ui=["fuel","excel","some","react","js","irregular","html","css"]

for(i=0;i<ui.length;i++){
  if(ui[i].indexOf('e')==-1){
    console.log(` e is not availble in ${ui[i]}`)
  }
  else{
    console.log(`e is avaliable in ${ui[i]} at ${ui[i].indexOf(`e`)}`);
  }
}



