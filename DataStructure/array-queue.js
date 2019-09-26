/*
 * 队列
 * @Description: 顺序队列
 * @author ChenKuo
 * @date 2019-09-26 16:49:34
 * */
class Queue {
	constructor() {
		this.container = [];
	}
	
	/*
	 * 掺入数据
	 * @Description: 队尾插入
	 * @author ChenKuo
	 * @date 2019-09-26 17:05:48
	 * @param item：数据
	 * */
	enqueue(item) {
		this.container.push(item);
	}
	
	/*
	 * 取出数据
	 * @Description: 队首取出
	 * @author ChenKuo
	 * @date 2019-09-26 17:06:20
	 * */
	dequeue() {
		return this.empty() ? 'This queue is EMPTY!' : this.container.shift()
	}
	
	/*
	 * 判断队列是否为空
	 * @author ChenKuo
	 * @date 2019-09-26 17:07:12
	 * @return {Boolean} isEmpty：为空返回false，否则为true
	 * */
	empty() {
		return this.container.length === 0
	}
	
	/*
	 * 返回队首元素
	 * @author ChenKuo
	 * @date 2019-09-26 17:07:41
	 * @return item：队首元素
	 * */
	front() {
		return this.empty() ? 'This queue is EMPTY!' : this.container[0]
	}
	
	/*
	 * 返回队尾元素
	 * @author ChenKuo
	 * @date 2019-09-26 17:09:16
	 * @return item：队尾元素
	 * */
	end() {
		return this.empty() ? 'This queue is EMPTY!' : this.container[this.container.length - 1]
	}
	
	/*
	 * 打印队列
	 * @author ChenKuo
	 * @date 2019-09-26 17:09:46
	 * */
	display() {
		console.log(this.container)
	}
	
	/*
	 * 清空队列
	 * @author ChenKuo
	 * @date 2019-09-26 17:09:58
	 * */
	clear() {
		delete this.container;
		this.container = [];
	}
}
