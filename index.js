var hasvalue = true;
var count = 10;
var single = 'hello';
var hello; //any
var person = {
    name: {
        first: 'tomo',
        last: 'miya'
    },
    age: 21
};
// 配列
//配列の前に必ず型を書く
var fruits = ['Apple', 'Banana', 'Grape'];
// タプル型
// タプル型　配列内の型を確立する
var book = ['business', 1500, true];
// 配列に追加は可能
book.push(21);
// ただし参照する場合（console.log(book[3])）はエラーが出る
// 配列に4番目の方がないためエラーが出る
// 列挙型
// 列挙型特定のグループのみを受け入れる
// enumは冗長の時に使用すると見やすくなる（型が4つ以上の場合）
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);
// any型
// any型はなんでも受け入れてしまう型（絶対に使わない）
var anything = 1;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.tomomo = 'tomomo';
// （注意）変数宣言した方の中にもany型を使用した変数が使えてしまう
var banana = 'banana';
banana = anything;
// ユニオン型
// ユニオン型は変数に二つ以上の型を型注釈したい場合に使用する
var unionType = 10;
// 配列の場合
var unionTypes = [21, 'hello'];
// let clothSize: 'small' | 'medium' | 'large' = 'large';を
// let clothSize: CloseSize = 'large';にできる
// リテラル型
// letの場合は変数の型（string,numberなど）になる
// constの場合はリテラル型（ただの文字や数字の事)になる
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
// 関数に型を適応させる方法
// function 関数名(引数1: 型, 引数2: 型): 戻り値の型 {関数の内容}
// 戻り値の方はドキュメントの効果があるため書いた方がよい
function add(num1, num2) {
    return num1 + num2;
}
// void型
// void型は何もしないという型
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());