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
                return data
            }
            data = data.next
            counter++
        }
        return null;
    }

    removeAt(idx){
        if(!this.head) return null
        if(idx > this.size()-1) return null 
        if(idx==0){
            return this.head = this.head.next
        }
        let prevNode = this.getAt(idx-1);
        let nextNode = this.getAt(idx+1);

        prevNode.next = nextNode;

        return prevNode;
    }

    insertAt(data, idx){
        console.log(this.head, data, idx)
        if(!this.head || idx == 0) return this.insertFirst(data)
        
        if(idx > this.size()-1 || idx === this.size()-1) return this.insertLast(data)

        let previous = this.getAt(idx-1)
        let node = new Node(data, previous.next);
        previous.next = node ;

    }

    forEach (fn){
        let data = this.head
        let counter = 0
        while (data){
            fn(data, counter)
            data = data.next
            counter++ 
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node
            node = node.next
        }
    }
}

module.exports = {
    Node,
    LinkedList
};