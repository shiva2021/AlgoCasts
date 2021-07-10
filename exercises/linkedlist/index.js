// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head)
    }

    size(){
        let size = 0
        let data = this.head
        while(data){
            size++
            data = data.next
        }
        return size
    }

    getFirst(){
        return this.head
    }

    getLast(){
        if(!this.head) return null;
        let data = this.head;
        while(data){
            if(data.next) data= data.next
            else return data
        }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head) return
        this.head = this.head.next
    }

    removeLast(){
        if(!this.head) return

        if(!this.head.next) {
            this.head = null
            return
        }
        let prev = this.head;
        let node = this.head.next

        while(node.next){
            prev = node
            node = node.next
        }
        prev.next = null
        console.log(prev, this.head)
    }

    insertLast(data){
        if(!this.head) {
            this.head = new Node(data)
            return
        }
        if(!this.head.next) {
            this.head.next = new Node(data)
            return
        }
        let prev = this.head;
        let node = this.head.next;
        while(node.next){
            prev = node;
            node = node.next
        }

        prev.next = new Node(data)
    }
}

module.exports = { Node, LinkedList };
