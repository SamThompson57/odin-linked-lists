/*

find(value) - returns the index of the node 
containing value, or null if not found.

toString - represents your LinkedList objects as 
strings, so you can print them out and preview 
them in the console. The format should be: 
( value ) -> ( value ) -> ( value ) -> null

Extra Credit

insertAt(value, index) - that inserts a new node 
with the provided value at the given index.

removeAt(index) - that removes the node at the 
given index.

Extra Credit Tip: When you insert or remove a 
node, consider how it will affect the existing 
nodes. Some of the nodes will need their 
nextNode link updated.
*/

const node = (value = null, nextNode = null ) => {
    return {value, nextNode}
}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    

    append(value) {
        const newNode = node(value)
        if (this.size == 0) {
            this.size ++ 
            this.tail = newNode, 
            this.head = newNode
        }
        else {
            this.size ++
            this.tail.nextNode = newNode
            this.tail = newNode
        } 
    }

    prepend(value) {
        const newNode = node(value, this.head)
        this.head = newNode
        if(this.size < 1) this.tail = newNode
        this.size ++
    }

    at(index, node = this.head){
        if (node == null ) return 'No node'
        if (index == 0) return node
        return this.at(index-1, node.nextNode)
    }

    pop() {
        const newTail = this.at(this.size-2)
        newTail.nextNode = null
        this.tail = newTail
        this.size -- 
    }
    contains(value, node = this.head) {
        if (node === null) {
            return false
        }
        if (node.value == value) {
            return true
        }
        return this.contains(value, node.nextNode)
        } 

    find(value, node = this.head, index = 0) {
        if (node === null) return 'Value not found'
        if (node.value == value) return `${value} is at index:${index}`;
        index ++
        return this.find(value, node.nextNode, index)
    }

    toString(theString = "", node = this.head, index = 0) {
        console.log(`${index} The string is currently ${theString}`)
        if (this.size === 1) return `( ${node.value} ) => null`
        if (index === this.size) return theString += ` null `
        index ++
        theString += `( ${node.value} ) => `
        return this.toString(theString, node.nextNode, index)
    }

}

let theList = new linkedList()


theList.append('Sarah')
theList.append('Charlie')
theList.prepend('John')

console.log(theList.size)

console.log(theList.head.value)
console.log(theList.tail.value)
console.log(theList.at(2).value)

console.log(theList.contains('Charlie'))
theList.pop()
console.log(theList.contains('Charlie'))

console.log(theList.find('Sarah'))
console.log(theList.find('Sam'))


console.log(theList.toString())
