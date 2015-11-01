declare function xtend <A> (a: A): A;
declare function xtend <A, B> (a: A, b: B): A & B;
declare function xtend <A, B, C> (a: A, b: B, c: C): A & B & C;
declare function xtend <A, B, C, D> (a: A, b: B, c: C, d: D): A & B & C & D;
declare function xtend <A, B, C, D, E> (a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;

export = xtend;
