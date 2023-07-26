const containerDiv = document.getElementById('container')

const linkedList = () => {
   return {
    head: null,
    // add new node to end of list
    append: append = (value) => {
        const newNode = node(value)
        if (head === null) head = newNode
        else {
            const tail = head
            while (next != null) tail = next
        }
        next = newNode
    },

    }
}



const node = (value = null, next = null) => {
    return {
        value: value,
        next: next,
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
    }
    //insert last node
    // insert at index
    //get at index
    //remove at index
    //clear list
    //print list data
    
}

const ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
console.log(ll)