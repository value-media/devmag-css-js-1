function LogClass(target: Function, context: ClassDecoratorContext) {
    console.log(`Class was defined!`, { target, context})
}

function LogMethod(target:any, context: ClassMethodDecoratorContext) {
    console.log(`Method "${context.name.toString()}" was called.`, { target, context})
}

@LogClass
class MyClass {
    constructor() {}

    @LogMethod
    myMethod() {
        console.log('Inside method.')
    }
}

const instace = new MyClass();
instace.myMethod();

