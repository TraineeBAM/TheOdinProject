class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }

    insertAtTail(data) {
        const newNode = new LinkedListNode(data, null)
        let current = this.head
        while (current.next !== null){
            current = current.next
        }
        current.next = newNode
        this.length++
    }

    getHeadValue() {
        return this.head.value
    }

    getTailValue() {
        let current = this.head
        while (current.next !== null){
            current = current.next
        }
        return current.value
    }

    popTailValue(){
        let current = this.head
        while (current.next !== null && current.next.next !== null){
            current = current.next
        }
        current.next = null
    }

    contains(value){
        let current = this.head
        for (let i = 0; i < this.length; i++){
            current = current.next
            if (current.value === value){
                return true
            }
            if (current.value !== value && current.next === null){
                return false
            }
        }
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0; i < index; i++){
            current = current.next
        }
        return current.value
    }

    print() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

LinkedList.fromValues = function(...values) {
    const ll = new LinkedList()
    for (let i = values.length -1; i >= 0; i--){
        ll.insertAtHead(values[i])
    }
    return ll
}

module.exports = LinkedList