//자바스크립트에서 함수는 값 이기도 하다.

var f = function(){
    console.log(1+2);
    console.log(1+3);
}
var a = [f];
a[0]();

var o = {
    func:f
}
o.func();