// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }

    size() {
        let size = 0
        let data = this.head
        while (data) {
            size++
            data = data.next
        }
        return size
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if (!this.head) return null;
        let data = this.head;
        while (data) {
            if (data.next) data = data.next
            else return data
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) return

        if (!this.head.next) {
            this.head = null
            return
        }
        let prev = this.head;
        let node = this.head.next

        while (node.next) {
            prev = node
            node = node.next
        }
        prev.next = null
    }

    insertLast(data) {
        const last = this.getLast()

        if (last) {
            last.next = new Node(data)
        } else {
            this.head = new Node(data)
        }
    }

    getAt(idx) {
        let data = this.head
        let counter = 0
        while (data) {
            if (counter === idx){
                console.log('datais ',data)
                console.log('head is ',this.head)
                return data
            }
            data = data.next
            counter++
        }
        return null;
    }
}

module.exports = {
    Node,
    LinkedList
};