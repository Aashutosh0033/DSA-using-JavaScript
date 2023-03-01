// This is the code for Stack (First in Last out) DS


//With built in functions
// const arr  = [3,4,1,5,6,7,1,6,3];

// function pop(){
//     console.log(arr.pop());
// }
// function push(num){
//     console.log(arr.push(num));
// }

// function print(){
//     console.log(arr);
// }

// pop();
// pop();
// print();
// push(1);
// push(2);
// push(3);


//Without using pop and push

const arr1  = [3,4,1,5,6,7,1,6,3];

let p = 8;

function pop(){
    if(p === -1){
        console.log("Stack Underflow") 
    }
    else{
        console.log(arr1[p]);
        console.log();
        p = p-1;
    }
}

function push(num){
    p+=1;
    arr1[p] = num;
}

function print(){

    if(p===-1){
        console.log("No Elements");
    }
    else{
        for(let i=0;i<=p;i++){
            console.log(arr1[i]);
        }
        console.log();
    }
}

pop();
pop();
print();
push(10);
push(10);
print();
pop();
pop();
pop();
pop();
pop();
print();