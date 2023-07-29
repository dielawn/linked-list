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
    append(value) {
        const lastNode = node(value);
  
        if (!this.head) {
          this.head = lastNode;
        } else {
          let tail = this.head;
          while (tail.next !== null) {
            tail = tail.next;
          }
          tail.next = lastNode;
        }
  
        this.size++;
      },

    prepend(value) {
        const firstNode = node(value, this.head)
        this.head = firstNode
        this.size++
    },

    insertAt(value, index) {
        if (index > 0 && index >= this.size) return this.append(value);
        if (index === 0) return this.prepend(value);
  
        const newNode = node(value);
        let current = this.head;
        let previous = null;
        let count = 0;
  
        while (count < index) {
          previous = current;
          count++;
          current = current.next;
        }
  
        newNode.next = current;
        previous.next = newNode;
        this.size++;
      },

    getAt(index) {
        let current = this.head
        let count = 0

        while (current) {
            if (count === index) {
                return current.value
            }
            count++
            current = current.next
        }
    },

    removeAt(index) {
        if (index < 0 && index > this.size) return 'Invalid index'

        let current = this.head
        let previous
        let count = 0

        if (index === 0) this.head = current.next
        else {
            while (count < index) {
                count++
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.size--
    },

    removeLast() {
        let lastIndex = this.size
        lastIndex--
        this.removeAt(lastIndex)
    },

    isListed(value) {
        let current = this.head

        while (current) {
            if (value === current.value) {
                console.log(true, `${value} is listed`)
                return true
            }

            current = current.next
        }

        console.log(false, `${value} not found`)
        return false        
    },

    getIndex(value) {
        let current = this.head
        let index = 0

        while (current) {
            if (value === current.value) {
                console.log( `${value} found at index: ${index}`)
                return index
            }

            current = current.next
            index++
        }
        console.log(`${value} not found`)
        return null
    },

    remove(value) {
        let valueIndex = this.getIndex(value)
        this.removeAt(valueIndex)
    },

    clearList() {
        this.head = null
        this.size = 0
    },

    printListValue() {
        let current = this.head;
        let dataList = [];
  
        while (current) {
          console.log(current.value)
          dataList.push(`${current.value} -> `)
  
          current = current.next
          if (!current) {
            dataList.push('null')
          }
        }
  
        console.log(dataList.join(''))
      },
    
    async delayElementRender() {

        let current = this.head
        while (current) {
            
            const listItem = document.createElement('p')
            listItem.classList.add('listItem')
            listItem.innerHTML = `${current.value} --> `           
            containerDiv.appendChild(listItem)

            await new Promise((resolve) => setTimeout(resolve, 1000))

            current = current.next

            if (current === null) {

                const nullItem = document.createElement('p')
                nullItem.classList.add('listItem')
                nullItem.innerHTML = 'null'
                containerDiv.appendChild(nullItem)
            }
          
        }     
   },

   isReady(boolean) {
    if (boolean) return true
    else return false
   },

  

   }
}    

const myList = linkedList()

    
    myList.append(100),
    myList.append(200),
    myList.append(300),
    myList.append(400),
    myList.append(500),
    myList.append(600),
    myList.append(800),
    myList.prepend(50),
    myList.insertAt(150, 2),
    myList.insertAt(700, 8)
    
    myList.append(900)






// myList.removeAt(2)
console.log('getting index 2', myList.getAt(2))
// myList.removeLast()
myList.isListed(200)
myList.getIndex(600)
myList.remove(500)
myList.printListValue()

// myList.delayElementRender(myList)


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

        return current
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