class Test {
    #privateField
    constructor() {
        this.#privateField = 'privateField';
        this.publicField = 'publicField';
        this._pseudoPrivateField = '_pseudoPrivateField';
    }

    methodThatUsePrivateField = () => {
        return this.#privateField + ' very private';
    }
}

const test = new Test();
test._pseudoPrivateField = 'sd';
console.log(test.methodThatUsePrivateField())
