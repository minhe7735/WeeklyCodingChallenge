var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length
    let half = Math.floor(len/2)
    let A = nums1
    let B = nums2
    if(A.length > B.length){
        [A, B] = [B,A]
    }
    let left = 0
    let right = A.length-1
    let res
    while(true){
        let midA = Math.floor((left+right)/2)
        let midB = half - midA - 2
        
        let ALeft = A[midA] != undefined ? A[midA] : -Infinity
        let ARight = A[midA+1] != undefined ? A[midA+1] : Infinity
        let BLeft = B[midB] != undefined ? B[midB] : -Infinity
        let BRight = B[midB+1] != undefined ? B[midB + 1] : Infinity
        if(BLeft <= ARight && ALeft <= BRight){
            if(len%2 == 0){
                res = (Math.max(ALeft,BLeft) + 
                                   Math.min(ARight, BRight))/ 2
            } else{
                res = Math.min(ARight,BRight)
            }
            return res
        }
        
        if(ALeft > BRight){
            right = midA-1
        }else left = midA+1
    }
};