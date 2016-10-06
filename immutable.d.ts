declare function xtend <A> (a: A | null | undefined): A;
declare function xtend <A, B> (a: A | null | undefined, b: B | null | undefined): A & B;
declare function xtend <A, B, C> (a: A | null | undefined, b: B | null | undefined, c: C | null | undefined): A & B & C;
declare function xtend <A, B, C, D> (a: A | null | undefined, b: B | null | undefined, c: C | null | undefined, d: D | null | undefined): A & B & C & D;
declare function xtend <A, B, C, D, E> (a: A | null | undefined, b: B | null | undefined, c: C | null | undefined, d: D | null | undefined, e: E | null | undefined): A & B & C & D & E;

export = xtend;
