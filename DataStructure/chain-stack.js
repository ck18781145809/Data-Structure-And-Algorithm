/*
 * 链式栈
 * 用的是最简单的单向链表来承载数据
 * */

class LinkedListData {
    constructor( data ) {
        return {
            data: data,
            next: null,
        };
    }
}

/*
 * 单向链表
 * @Description: 配合链式栈使用，只实现了 1、查找最后一个结点 2、向链尾添加数据 3、删除链尾数据 4、展示链表所有结点数据
 * @author ChenKuo
 * @date 2019-09-10 16:23:01
 * */
class linkedList {
    constructor() {
        this.head = new LinkedListData('head')
    }
    
    /*
	 * 查找最后一个结点
	 * @author ChenKuo
	 * @date 2019-09-10 16:24:03
	 * */
    findLast() {
        let currentNode = this.head;
        
        while(currentNode.next !== null) {
            currentNode = currentNode.next
        }
        
        return currentNode;
    }
    
    /*
	 * 添加一个结点到链尾
	 * @author ChenKuo
	 * @date 2019-09-10 16:24:25
	 * */
    append(data) {
        let lastNode = this.findLast();
        
        const NEW_NODE = new LinkedListData(data);
        
        NEW_NODE.next = null;
        lastNode.next = NEW_NODE;
    }
    
    /*
	 * 删除最后一个结点
	 * @author ChenKuo
	 * @date 2019-09-10 16:24:45
	 * */
    pop() {
        let lastNode = this.findLast();
        let currentNode = this.head;
        
        //  找到倒数第二个节点
        while(currentNode.next.data !== lastNode.data) {
            currentNode = currentNode.next
        }
        
        currentNode.next = null;
        
        return lastNode.data;
    }
    
    /*
	 * 显示链表中的所有数据
	 * @author ChenKuo
	 * @date 2019-09-10 16:25:17
	 * */
    display() {
        let currentNode = this.head;
        
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
            console.log(currentNode.data)
        }
    }
}


/*
 * 链式栈
 * @author ChenKuo
 * @date 2019-09-10 16:34:29
 * */
class ChainStack {
    constructor() {
        this.items = new linkedList();
    }
    
    /*
	 * 添加元素到栈顶
	 * @author ChenKuo
	 * @date 2019-09-10 13:53:47
	 * */
    push(item) {
        this.items.append(item);
    }
    
    /*
	 * 移除栈顶元素
	 * @author ChenKuo
	 * @date 2019-09-10 13:54:41
	 * */
    pop() {
        return this.items.pop();
    }
    
    /*
	 * 显示栈里面所有数据
	 * @author ChenKuo
	 * @date 2019-09-10 14:04:11
	 * */
    display() {
        this.items.display();
    }
}

let chainStack = new ChainStack();

'HelloWorld'.split('').forEach((itm) => {
    chainStack.push(itm)
});

chainStack.pop();

chainStack.display();
