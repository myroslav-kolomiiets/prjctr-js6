/**
 * Єдиний спосіб робити приватні властивості в класах #
 */

class AbstractClass {
    #privateProperty; // Don't forget about declaration
    constructor() {
        this.#privateProperty = 'privateProperty' // Real private property
        this._pseudoPrivateProperty = '_pseudoPrivateProperty' // Not private at all
        this.test = 'test' // Regular property
    }
    someMethod () {
        console.log('#privateProperty - ', this.#privateProperty)
        console.log('_pseudoPrivateProperty - ', this._pseudoPrivateProperty)
        console.log('test - ', this.test)
    }
}

const abstractClassInstance = new AbstractClass();

abstractClassInstance.someMethod();

// abstractClassInstance.#privateProperty = null; // Reference Error (!) because it's really private

abstractClassInstance._pseudoPrivateProperty = null; // Not error

abstractClassInstance.test = null; // Not error

console.log(abstractClassInstance);
