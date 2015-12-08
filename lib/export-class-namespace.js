class Hoge {
    a() {
    }
}
(function (Hoge) {
    function A() {
    }
    Hoge.A = A;
})(Hoge || (Hoge = {}));
export default Hoge;
