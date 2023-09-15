const MinHeap = function(){
    this.arr = []
}
MinHeap.prototype.peek = function(){
    return this.arr.length
}
MinHeap.prototype.poll = function(){
    if(!this.arr.length) return null
    let node = this.arr[0]
    this.arr[0] = this.arr[this.arr.length - 1]
    this.arr.pop()
    this.heapifyDown()
    
    return node
}
MinHeap.prototype.add = function(node){
    if(node){
        this.arr.push(node)
        this.heapifyUp()
    } 
}
MinHeap.prototype.heapifyDown = function(){
    let index = 0
    let lChild = 2 * index + 1
    let rChild = 2 * index + 2
    while((this.arr[lChild] && this.arr[index].val > this.arr[lChild].val) || 
          (this.arr[rChild] && this.arr[index].val > this.arr[rChild].val)){
        
        if(!this.arr[rChild] || this.arr[lChild].val < this.arr[rChild].val){
            [this.arr[index] , this.arr[lChild]] = [this.arr[lChild],this.arr[index]]
            index = lChild
        }else{
            [this.arr[index] , this.arr[rChild]] = [this.arr[rChild],this.arr[index]]
            index = rChild
        }
        lChild = 2 * index + 1
        rChild = 2 * index + 2
        
    }
}
MinHeap.prototype.heapifyUp = function(){
    let index = this.arr.length - 1
    let pIndex = Math.floor((index-1)/2)
   
    while(this.arr.length > 1 && pIndex > -1 && this.arr[index].val < this.arr[pIndex].val){
        [this.arr[index], this.arr[pIndex]] = [this.arr[pIndex],this.arr[index]]
        index = pIndex
        pIndex = Math.floor((index-1)/2)
    }
}

var mergeKLists = function(lists) {
    let res = new ListNode()
    let temp = res
    let heap = new MinHeap()
    let len = 0
    for(let list of lists){
        while(list){
            let next = list.next
            let node = list
            node.next = null
            list = next
            heap.add(node)
        }
    }
    while(heap.peek()){
        temp.next = heap.poll()
        temp = temp.next
    }
    return res.next
};