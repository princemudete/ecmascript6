window.onload = function() {
    function log(num=10) {
        console.log(num);
    }
    log(5);

    function logNinja(name, belt, age) {
        console.log("My name is " + name +
                    " and my belt colour is " + belt +
                    " and my age is " + age);
    }
    logNinja("Shaun", "Orange", 66);

    var nums1 =[ 1, 2, 3];
    var nums2 = [nums1, 4, 5, 6];

    console.log(nums2);

    var nums = [3, 5, 7];

    function addNums(a,b,c) {
        console.log(a + b + c);
    }
    addNums(...nums);
}    