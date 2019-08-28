/*
 * 用js实现链表，这里只选取单向链表和双向循环链表
 * @author ChenKuo
 * @date 2019-08-28 11:32:12
 * */


/*
 * Singly Linked List Node 单向链表数据结构
 * @author ChenKuo
 * @date 2019-08-28 13:58:56
 * @param {}
 * */
class SLLN {
	cosntructor(data) {
		return {
			data,
			next: null
		}
	}
}


/*
 * Singly Linked List 单向链表
 * @author ChenKuo
 * @date 2019-08-28 14:02:52
 * */
class SLL {
	constructor() {
		this.head = new SLLN('head'); //  链表头对象
	}
	
	
	/*
	 * 查找指定数据在链表中的节点
	 * @author ChenKuo
	 * @date 2019-08-20 11:29:27
	 * @param {} data：查找的数据
	 * @return {LinkedListNode} currentNode 目标数据所在的节点
	 * */
	find(data) {
		let currentNode = this.head;
		
		while (currentNode.data !== data) {
			currentNode = currentNode.next;
		}
		
		return currentNode;
	}
	
	
	/*
     * 插入数据
     * @author ChenKuo
     * @date 2019-08-20 11:27:26
     * @param {} newData : 需要插入链表的数据
     * @param {LinkedListNode} targetNode : 插入数据的位置（插入在此位置之后）
     * */
	insert(newData, targetNode) {
		const newNode = new SLL(newData);
		
		const target = this.find(targetNode);
		
		newNode.next = target.next;
		target.next = newNode;
	}
	
	
	/*
     * 显示所有数据
     * @author ChenKuo
     * @date 2019-08-20 11:27:09
     * */
	display() {
		let currentNode = this.head;
		
		while (currentNode.next !== null) {
			// eslint-disable-next-line no-console
			console.log(currentNode.next.data);
			currentNode = currentNode.next;
		}
	}
	
	
	/*
     * 获取目标节点上一个节点
     * @Description: 单链表需要从头开始遍历一次，有点浪费时间的感觉呀
     * @author ChenKuo
     * @date 2019-08-20 11:40:41
     * @param {}
     * */
	prev(targetNode) {
		let currentNode = this.head;
		
		while (currentNode.next !== null && currentNode.next !== targetNode) {
			currentNode = currentNode.next;
		}
		
		return currentNode;
	}
	
	
	/*
	 * 替换数据
	 * @author ChenKuo
	 * @date 2019-08-28 14:09:12
	 * @param newData: 替换的数据
	 * @param targetData：被替换的数据
	 * */
	replace(newData, targetData) {
		let currentNode = this.head;
		const newNode = new SLL(newData);
		const targetNode = this.find(targetData);
		
		while (currentNode.next !== targetNode) {
			currentNode = currentNode.next;
		}
		
		newNode.next = currentNode.next.next;
		currentNode.next.next = undefined;
		currentNode.next = newNode;
	}
	
	
	/*
	 * 删除链表中的数据
	 * @author ChenKuo
	 * @date 2019-08-28 14:10:56
	 * @param targetData
	 * */
	remove(targetData) {
		let currentNode = this.head;
		
		const targetNode = this.find(targetData);
		
		while (currentNode.next !== targetNode) {
			currentNode = currentNode.next;
		}
		
		currentNode.next = currentNode.next.next;
	}
}


/*
 * 双向循环链表数据结构
 * @author ChenKuo
 * @date 2019-08-26 14:18:48
 * */
class DBLN {
	constructor(data) {
		return {
			data,
			prev: null,
			next: null,
		};
	}
}


/*
 * 双向循环列链表
 * @author ChenKuo
 * @date 2019-08-26 14:22:06
 * */
class DBL {
	constructor() {
		const head = new DBLN('head');
		
		this.head = head;
		
		/*
		   * 双向循环链表的最大区别就是初始化的时候 next 和 prev 是指向 head 节点本生的
		   * */
		this.head.prev = head;
		this.head.next = head;
	}
	
	/*
	 * 查找指定数据节点
	 * @author ChenKuo
	 * @date 2019-08-26 14:22:33
	 * @param data: 需要查找的数据
	 * */
	find(data) {
		let currentNode = this.head;
		
		/*
		   * 终止循环有两个条件
		   * 1、找到指定数据
		   * 2、下一个数据是 head （即循环结束即将重开）
		   * */
		while (currentNode.data !== data && currentNode.next.data !== 'head') {
			currentNode = currentNode.next;
		}
		
		return currentNode;
	}
	
	/*
	 * 查找链表中最后一位数据
	 * @author ChenKuo
	 * @date 2019-08-27 13:55:21
	 * @param data: 需要查找的数据
	 * */
	findLast() {
		const currentNode = this.head;
		
		return currentNode.prev;
	}
	
	/*
	 * 插入数据
	 * @Description:
	 * @author ChenKuo
	 * @date 2019-08-26 14:30:06
	 * @param newData: 插入链表的数据
	 * @param targetData: 插入到此目标数据的后面
	 * */
	insert(newData, targetData) {
		const newNode = new DBLN(newData);
		const targetNode = this.find(targetData);
		
		newNode.next = targetNode.next;
		newNode.prev = targetNode;
		targetNode.next.prev = newNode;
		targetNode.next = newNode;
	}
	
	/*
	 * 删除数据
	 * @author ChenKuo
	 * @date 2019-08-27 13:51:36
	 * @param targetData 目标删除数据
	 * */
	remove(targetData) {
		const targetNode = this.find(targetData);
		
		targetNode.prev.next = targetNode.next;
		targetNode.next.prev = targetNode.prev;
		targetNode.next = null;
		targetNode.prev = null;
	}
	
	/*
	 * 展示链表所有的数据
	 * @author ChenKuo
	 * @date 2019-08-26 14:35:19
	 * */
	display() {
		let currentNode = this.head;
		
		/*
		   * 用 do while 语句的好处
		   * 1、容易理解
		   * 2、判断条件更加简单，只需要判断当前节点是不是 head 节点
		   * */
		do {
			console.log(currentNode.data);
			currentNode = currentNode.next;
		}
		while (currentNode.data !== 'head');
	}
}


