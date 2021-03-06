/*
 * 冒泡排序
 * @author ChenKuo
 * @date 2019-10-30 17:12:32
 * */
// eslint-disable-next-line no-unused-vars
function bubbleSort(_arr) {
  for (let i = 0; i < _arr.length; i += 1) {
    let flag = false; //  排序状态，有排序动作为true，没有发生排序动作为false

    //  一次大循环就能从后往前确定一个值（大的放后面），所以待排序区长度就减少一位
    for (let j = 0; j < _arr.length - i - 1; j += 1) {
      //  每次比较相邻两个数据，大的放后面
      if (_arr[j] > _arr[j + 1]) {
        const k = _arr[j];
        _arr[j] = _arr[j + 1];
        _arr[j + 1] = k;

        flag = true; //  发生排序动作，改变状态
      }
    }

    if (!flag) break; //  没有排序动作代表排序完成，退出循环
  }
}
