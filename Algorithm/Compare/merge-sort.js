/*
 * 合并函数
 * @description 在这里将 s～q 和 q+1～e 两部分合并
 * @param {Array} _arr 需要排序的数组
 * @param {Number} s 排序的起始索引
 * @param {Number} q 排序的中间索引
 * @param {Number} e 排序的结束索引
 * */
function mergeSortMerge(_arr, s, q, e) {
  let p1 = s; //  s～q的指针
  let p2 = q + 1; //  q+1～e的指针
  const tmpArr = []; //  存放已排好序的元素的临时数组

  //  比较两个子部分的大小，直到循环完一部分
  while (p1 <= q && p2 <= e) {
    if (_arr[p1] > _arr[p2]) {
      tmpArr.push(_arr[p2 += 1]);
    } else {
      tmpArr.push(_arr[p1 += 1]);
    }
  }

  let start;
  let end;

  //  确定有剩余数据的子部分
  if (p1 <= q) {
    start = p1;
    end = q;
  } else {
    start = p2;
    end = e;
  }

  //  将剩余数据拷贝到临时数组中
  while (start <= end) {
    tmpArr.push(_arr[start += 1]);
  }

  //  将临时数组中的数据替换到正式数组中
  for (let i = 0; s <= e; i++, s++) {
    _arr[s] = tmpArr[i];
  }
}


/*
 * 分离函数
 * @description 在这里调用分离函数，将数组分成两部分
 * @param {Array} _arr 需要排序的数组
 * @param {Number} s 排序的起始索引
 * @param {Number} e 排序的结束索引
 * */
function mergeSortSplit(_arr, s, e) {
  if (s >= e) return; //  起始位置大于等于结束位置则数组只有一个元素

  const q = Math.floor((s + e) / 2); //  起始索引和结束索引的中间索引

  //  将当前排序区域分成两个，再次排序
  mergeSortSplit(_arr, s, q);
  mergeSortSplit(_arr, q + 1, e);

  //  将两个区域合并
  mergeSortMerge(_arr, s, q, e);
}


/*
 * 归并主函数
 * @description 在这里调用分离函数，将数组分成两部分
 * */
function mergeSort(arr) {
  mergeSortSplit(arr, 0, arr.length - 1);
}
