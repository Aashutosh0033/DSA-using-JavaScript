class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null;
      this.size = 0;
  
    }
  
  //Insert First Node
    insertFirst (data){
      this.head = new Node (data, this.head);
      this.size++;
    }
  
  
  
  //Insert Last Node
  insertLast(data){
  
    let node = new Node(data);
    if(!this.head){
      this.head = node;
      this.size++;
    }
  
    else{
      let current = this.head;
      let previous;
      while(current){
        previous = current;
        current = current.next;
        
      }
      previous.next = node;
    }
  
    this.size++;
    
  }
    
  
  
  //Insert at Index
  
  insertIndex(pos , data){
    if(pos>0 && pos>this.size){
      return;
    }
  
    else if(pos === 0){
      this.insertFirst(data);
    }
  
    else{
      let current = this.head;
      let previous;
  
      const node = new Node(data);
  
      let count = 0;
      while(count<pos){
        previous = current;
        count++;
        current = current.next;
      }
      previous.next = node;
      node.next = current;
      
      
    }
  
    this.size++;
  
  }
  
  //Get at index
  
  getAt(index){
    if(index>0 && index>this.size){
      console.log("\nOut of Index");
    }
    else{
      let current = this.head;
      let count = 0;
  
      while(count<index){
        current  = current.next;
        count++;
  
      }
  
      console.log("\n"+ current.data);
    }
  }
  
  
  //Remove  at index
  
  removeNode(index){
    
  
    if(index>0 && index>this.size){
      console.log("\nOut of Index");
      return;
    }
  
    
      let current = this.head;
      let previous;
      let count = 0;
  
      if(index === 0){
        this.head = current.next;
  
      }
  
      else{ 
        while(count<index){
          previous = current;
          current = current.next;
          count++;
        }
        previous.next = current.next;
    
          
      
    }
      
  
    this.size--;
  }
  
  
  
  //Clear List
  
  clearList(){
    this.head = null;
    this.size = 0;
  }
  
  //Print list data
  
  printListData(){
    let current = this.head;
    while(current){
      process.stdout.write(`(Data:${current.data}, Next)->`);
      
      current = current.next;
    }
  }
  
  }
  
  
  
  const ll = new LinkedList();
  // ll.insertFirst(100);
  // ll.insertFirst(200);
  // ll.insertLast(300);
  // ll.insertIndex(4,150)
  // ll.clearList();
  // ll.printListData();
  // ll.getAt(4)
  // ll.removeNode(0);
  
  
  
  
  
  
  