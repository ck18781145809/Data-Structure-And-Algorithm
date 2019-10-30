/*
 * 选择排序
 * @author ChenKuo
 * @date 2019-10-30 17:14:05
 * */
function selectionSort( arr ) {
    for( let i = 0; i < arr.length; i ++ ) {
        let index = i;
        
        for( let j = i + 1; j < arr.length; j ++ ) {
            //  arr[index]只要遇见比自己小的arr[j]，就把两值互换
            if( arr[index] > arr[j] ) {
                index = j;
            }
        }
        
        if( i === index ) return;
        
        let k = arr[i];
        arr[i] = arr[index];
        arr[index] = k;
    }
}
