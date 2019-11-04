/*
 * 插入排序
 * @author ChenKuo
 * @date 2019-11-04 11:14:47
 * */
function insertionSort(_arr) {
  for (let i = 1; i < _arr.length; i += i) {
    for (let j = i; j >= 0; j -= 1) {
      if (_arr[j] < _arr[j - 1]) {
        const K = _arr[j];
        _arr[j] = _arr[j - 1];
        _arr[j - 1] = K;
      } else {
        break;
      }
    }
  }
}
