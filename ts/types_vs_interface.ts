// https://catcherholms.medium.com/typescript-interface-and-type-is-not-similar-d249c22b01fb


type WithId = {
    id: string;
}

interface List<T> {
    elements: T[];
    get(id: string): T | undefined;
}

abstract class ListAbstract<T extends WithId> implements List<T> {
    elements: T[];
    get(id: string): T | undefined {
        return this.elements.find(el => el.id == id);
    }
}

interface Animal {
    id: string;
    type: string;
}

interface Account {
    id: string;
    getBalance(): number;
} 

class AnimalList extends ListAbstract<Animal> {}
class AccountList extends ListAbstract<Account> {}

type Transaction = {
    status: number;
}

// typowe zastosowania typów:
type MyInputType = 'text' | 'password';
type MyNullable<T> = T | null;
type MyCallback = (name:string) => Promise<number>;
type UserStatus = Pick<Transaction, 'status'>;

/*
    Conclusion
    Use INTERFACE for:

    - describing data structure (DTO, parameters, forms, React props, classes)
    - describing behavior (public methods, view models, API)

    Use TYPE for:

    - defining primitive types
    - defining complex types — conditional, union, exclusion, picking and other combination of data types
*/
