type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
}

interface Point {
    x: number;
    y: number;
}

type ReadOnlyPoint = MyReadonly<Point>;

type MyNonNullable<T> = T extends null | undefined ? never : T;

const regularPoint:Point = {
    x: 5,
    y: 10
}

const readonlyPoint: ReadOnlyPoint = {
    x: 20,
    y: 30
}

regularPoint.x = 15;
console.log(regularPoint);

//  ------------------------------------------------------------------------------------------------------------------




