// ES2017
// https://2ality.com/2016/02/ecmascript-2017.html

// Major new features:

// Async Functions (Brian Terlson)
async function fetchJson(url) {
  try {
    let res = await fetch(url);
    let text = await request.text();
    return JSON.parse(text)
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
  }
}

// Shared memory and atomics (Lars T. Hansen)
// http://js-next.hatenablog.com/entry/2015/09/30/225251
/*
JSで大きな処理を効率良く捌きたい時、今までもWorker等でスレッド立てて処理を分割する事はできたが、
スレッド間のやり取りの方法は制限されたものしかなく、バッファを共有することもできなかった。
そこで新しく導入されたSharedArrayBufferを用いると、スレッド間で共同利用できるバッファを作る事ができる。
atomics apiを使うと、このshared array bufferの操作やスレッド制御ができる。
*/

// Minor new features:

// Object.values/Object.entries (Jordan Harband)
// syntax: Object.entries(value : any) : Array<[string,any]>
// syntax: Object.values(value : any) : Array<any>

Object.entries({ one: 1, two: 2 }) // [ [ 'one', 1 ], [ 'two', 2 ] ]

let map = new Map(Object.entries({
  one: 1,
  two: 2,
}));
console.log(JSON.stringify([...map])); // [["one",1],["two",2]]

Object.values({ one: 1, two: 2 }) // [ 1, 2 ]

// String padding (Jordan Harband, Rick Waldron)
// String.prototype.padStart(maxLength, fillString=' ')

// このメソッドは、その長さがmaxLengthになるまで、レシーバーにfillStringをプレフィックスとして（おそらく繰り返し）付けます。
'x'.padStart(5, 'ab') // 'ababx'

// 必要に応じてfillStringの破片が使われ（'ab'の内aのみ）、結果はmaxLengthと同じ長さになります
'x'.padStart(4, 'ab') // 'abax'

// もし既にStringのLengthがmaxLengthより大きい場合は元の文字列が返ります
'abcd'.padStart(2, '#') // 'abcd'

// もしmaxLengthとfillStringのLengthが同じ場合はfillStringの最後が文字列によってマスクされた結果が返ります
'abc'.padStart(10, '0123456789') // '0123456abc'

// fillStringを指定しなければ' 'が代わりに使用されます
'x'.padStart(3) // '  x'


// String.prototype.padEnd(maxLength, fillString=' ')
// padStartとほぼ同じ、足されるのが後ろなだけ
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
'abcd'.padEnd(2, '#') // 'abcd'
'abc'.padEnd(10, '0123456789') // 'abc0123456'
'x'.padEnd(3) // 'x  '

// Object.getOwnPropertyDescriptors() (Jordan Harband, Andrea Giammarchi)
// Trailing commas in function parameter lists and calls (Jeff Morrison)
