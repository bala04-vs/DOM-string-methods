// task:

let om=["html","css","JAVASCRIPT","react","ANGULAR"];
let op=[];

for(i=0;i<om.length;i++){
    if(om[i]==om[i].toUpperCase()){
        op=om[i].toLowerCase();
        
        console.log(op);
    }
    


    else if(om[i]==om[i].toLowerCase()){
        op=om[i].toUpperCase();
       
        console.log(op);
        
    }
   
  
}
