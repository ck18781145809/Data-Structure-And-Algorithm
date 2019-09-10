/*
 * 顺序栈
 * @author ChenKuo
 * @date 2019-09-10 13:52:04
 * */
class ArrayStack {
	constructor() {
		this.items = [];
	}
	
	/*
	 * 添加元素到栈顶
	 * @author ChenKuo
	 * @date 2019-09-10 13:53:47
	 * */
	push(item) {
		this.items.push(item);
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
	 * 返回栈顶元素，不操作栈
	 * @author ChenKuo
	 * @date 2019-09-10 13:57:37
	 * */
	peek() {
		return this.items[this.items.length - 1];
	}
	
	/*
	 * 判断栈是否为空
	 * @Description: 栈里没有任何元素返回 true 否则为 false
	 * @author ChenKuo
	 * @date 2019-09-10 13:59:07
	 * */
	isEmpty() {
		return this.items.length === 0;
	}
	
	/*
	 * 返回栈的长度
	 * @author ChenKuo
	 * @date 2019-09-10 14:00:29
	 * */
	size() {
		return this.items.length;
	}
	
	/*
	 * 显示栈里面所有数据
	 * @author ChenKuo
	 * @date 2019-09-10 14:04:11
	 * */
	display() {
		// eslint-disable-next-line no-restricted-syntax
		for (const item of this.items) {
			console.log(item);
		}
	}
}
