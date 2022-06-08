let hasvalue = true;
let count = 1;
let single = 'hello';

const person = {
  name: {
    first: 'tomo',
    last: 'miya',
  },
  age: 21,
};

// 配列
//配列の前に必ず型を書く
const fruits: string[] = ['Apple', 'Banana', 'Grape'];

// タプル型
// タプル型　配列内の型を確立する
const book: [string, number, boolean] = ['business', 1500, true];
// 配列に追加は可能
book.push(21);
// ただし参照する場合（console.log(book[3])）はエラーが出る
// 配列に4番目の方がないためエラーが出る

// 列挙型
// 列挙型特定のグループのみを受け入れる
// enumは冗長の時に使用すると見やすくなる（型が4つ以上の場合）
enum coffeeSize {
  SHORT,
  TALL = 'TALL',
  GRANDE = 1,
  VENTI,
}

const coffee = {
  hot: true,
  size: coffeeSize.TALL,
};

coffee.size = coffeeSize.SHORT;
console.log(coffeeSize.SHORT);

// any型
// any型はなんでも受け入れてしまう型（絶対に使わない）
let anything: any = 1;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.tomomo = 'tomomo';
// （注意）変数宣言した方の中にもany型を使用した変数が使えてしまう
let banana = 'banana';
banana = anything;

// ユニオン型
// ユニオン型は変数に二つ以上の型を型注釈したい場合に使用する
let unionType: number | string = 10;
// 配列の場合
let unionTypes: (number | string)[] = [21, 'hello'];

// typeエイリアス
// 変数に型を入れる方法
type CloseSize = 'small' | 'medium' | 'large';
// let clothSize: 'small' | 'medium' | 'large' = 'large';を
// let clothSize: CloseSize = 'large';にできる

// リテラル型
// letの場合は変数の型（string,numberなど）になる
// constの場合はリテラル型（ただの文字や数字の事)になる
const apple = 'apple';
let clothSize: CloseSize = 'large';
const cloth: {
  color: string;
  size: CloseSize;
} = {
  color: 'white',
  size: 'medium',
};

// 関数宣言した関数に型を適応させる方法
// function 関数名(引数1: 型, 引数2: 型): 戻り値の型 {関数の内容}
// 戻り値の方はドキュメントの効果があるため書いた方がよい
function ad(num1: number, num2: number): number {
  return num1 + num2;
}
// void型
// void型はundefind型を返す型（何もしないという型）
function sayHell(): void {
  console.log('Hello');
}
console.log(sayHell());
// 補足　undefined型、nill型のある

// 関数型を使用して特定の関数のみを代入できる変数を作成方法
// 型注釈させる場合　function 関数名: (引数1: 型, 引数2: 型)=> 戻り値の型 {関数の内容}
const anotherAdd: (n1: number, n2: number) => number = function (num1, num2) {
  return num1 + num2;
};
const doubleNumber: (num: number) => number = (num) => num * 2;

// callback関数
function doubleAndHandle(num: number, cd: (num: number) => void): void {
  const doubleNum = cd(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

// unknow型
let unknowInput: unknown;
let anyInput: any;
let text: string;
unknowInput = 'hello';
unknowInput = 21;
unknowInput = true;
text = anyInput;
if (typeof unknowInput === 'string') {
  text = unknowInput;
}

// never型
// 起こり得ない型を使用する型
function error(message: string): void {
  throw error(message);
}
console.log(error('error'));
