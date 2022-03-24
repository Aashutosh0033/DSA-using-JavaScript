//Implementing Stack Data Structure


class Stack{    
    constructor(){
        this.items = []
        this.count = 0;

    }


    //Add an element to top of stack 
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    //Return and remove the top element in the stack
    //return undefined if stack is empty
    pop(){

        if(this.isEmpty()) return `Stack is Empty`;
         
        let pop = this.items[this.count - 1];
        console.log(`${pop}  removed`);
        this.count--;
        return pop
    }


    //Check top elements in stack 
    peek(){

        if(this.isEmpty()) return `Stack is Empty`;
        return this.items[this.count-1];

    }

    //Check if stack is empty
    isEmpty(){
        this.count === 0 ? `Stack is Empty` : `Stack is not Empty`;
    }


    //Check the size of the stack 
    size(){
        return this.count;
    }


    //Print elements in stack 
    print(){
        if(this.isEmpty()) return undefined;
        let str ='';
        for(let i=0;i<this.count;i++){
            str+=this.items[i] + " ";

        }

        return str;
    }


    //Clear stack 
    clear(){
        this.items = [];
        this.count = 0;
        return this.items
    }

}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.pop();
stack.pop();
stack.clear();
console.log(stack.peek());
console.log(`The size of the stack is ${stack.size()}`);
console.log(stack.print());


