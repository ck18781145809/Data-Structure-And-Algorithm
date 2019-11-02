/*
 * 选择排序
 * @author ChenKuo
 * @date 2019-10-30 17:14:05
 * */
// eslint-disable-next-line no-unused-vars
function selectionSort(_arr) {
  for (let i = 0; i < _arr.length; i += 1) {
    let index = i;

    for (let j = i + 1; j < _arr.length; j += 1) {
      //  arr[index]只要遇见比自己小的arr[j]，就把两值互换
      if (_arr[index] > _arr[j]) {
        index = j;
      }
    }

    if (i === index) return;

    const k = _arr[i];
    _arr[i] = _arr[index];
    _arr[index] = k;
  }
}
