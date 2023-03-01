// This is the code for Queue(First in First out) DS 

const queue = [3,2,1]
pi = queue.length - 1;
po = 0;


function enqueue(num){
    if(pi === -1 && po === -1){
        pi+=1;
        po+=1;
        queue[pi] = num;
    }
    else{
        pi+=1;
        queue[pi] = num;
    }
   
}

function dequeue(){
    if(pi < 0 && po < 0){
        console.log("Queue underflow");
    }
    else if((po === pi) && (po>-1 && pi>-1)){
        console.log(queue[po]);
        console.log();
        po = -1;pi = -1;
    }
    else{
        console.log(queue[po]);
        console.log();
        po+=1;
    }
    
}

function print(){
    for(let i = po;i<=pi;i++){
        console.log(queue[i]);
    }
    console.log();
}

print();
enqueue(4);
enqueue(5);
print();
dequeue();
dequeue();
dequeue();
print();
dequeue();
dequeue();
dequeue();
enqueue(4);
enqueue(4);
enqueue(4);
print();


