const containerDiv = document.getElementById('container')

const node = (value = null, next = null) => {
    return {
        value: value,
        next: next,
    }
}

const linkedList = () => {
   return {
    head: null,
    size: size = 0,

    // add new node to end of list
    append: append = (value) => {
        const lastNode = node(value)
        if (!head) head = lastNode
        else {
            const tail = head
            while (node.next != null) tail = node.next
        }

        next = lastNode
        size++
    },

    prepend: prepend = (value) => {
        const firstNode = node(value)
        head = firstNode
        size++
    },

    insertAt: insertAt = (value, index) => {
        if (index > 0 && index > size) return append(value)
        if (index === 0) return prepend(value)

        const newNode = node(value)
        let current, previous
        current = head
        let count = 0
        while (count < index) {
            previous = current
            count++
            current = next        
        }

        newNode = current
        previous = newNode
        size++
    },

  printListValue: printListValue = () => {
    let current = head
        let dataList = []
        while(current) {
            console.log(current.value)
            dataList.push(`${current.value} -> `)
            
            current = node.next
            if (!current) {
                dataList.push('null')
            }
        }
        console.log(dataList)
  } 

    }
}

const myList = linkedList()
myList.prepend(100)
myList.append(200)

myList.printListValue()




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
        this.size++
    }

    //insert last node
    insertLast(data) {
        let node = new Node(data)
        let current
        if (!this.head) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }

        this.size++
    }

    // insert at index
    insesrtAt(data, index) {

        if (index > 0 && index > this.size) return this.insertLast(data)
        if (index === 0) return this.insertFirst(data)

        const node = new Node(data)
        let current, previous
        current = this.head
        let count = 0
        while(count < index) {
            previous = current
            count++
            current = current.next
        }

        node.next = current
        previous.next = node

        this.size++
    }

    //get at index
    getAt(index) {

        let current = this.head
        let count = 0

        while (current) {
            if (count === index) {
                console.log(current.data)
            }
            count++
            current = current.next
        }

        return
    }

 
    //remove at index
    removeAt(index) {

        if (index < 0 && index > this.size) return 'Invalid index, unable to remove.'

        let current = this.head
        let previous
        let count = 0

        if (index === 0) this.head = current.next
        else {

            while(count < index) {
                count++
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.size--
    }


    //remove last
    removeLast() {

        let lastIndex = this.size
        lastIndex--
        this.removeAt(lastIndex)
    }

    //contains same value
    isSame(data) {
        let current = this.head

        while (current) {
            if (data === current.data) {
                console.log(true)
                return true
            }
           
            current = current.next
        }

        console.log(false)
        return false
    }

    // return data index
    getData(data) {
        let current = this.head
        let index = 0

        while (current) {
            if (data === current.data) {
                console.log(`Data at index: ${index}`)
               return index
            }
           
            current = current.next
            index++
        }

        console.log('null, data not found')
        return null
    }

    //clear list
    clearList() {
        this.head = null;
        this.size = 0
    }
    
    //print list data
    printListData() {
        let current = this.head
        let dataList = []
        while(current) {
            dataList.push(`${current.data} -> `)
            
            current = current.next
            if (!current) {
                dataList.push('null')
            }
        }
        console.log(dataList)
    }
}

// const ll = new LinkedList()

// ll.insertFirst(100)
// ll.insertFirst(200)
// ll.insertFirst(300)
// ll.insertLast(400)
// ll.insesrtAt(500, 10)

// ll.getAt(5)
// // ll.isSame(500)
// console.log(ll.getData(500))
// // ll.removeLast()

// // ll.removeAt(4)
// // ll.clearList()
// ll.printListData()