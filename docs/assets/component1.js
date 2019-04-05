"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Component1 {
    constructor() {
        console.log('Component 1 started');
        this._name = null;
    }
    /**
     * Sets the components name.
     * @param newName - `string`
     */
    setName(newName) {
        this._name = newName;
    }
    /**
     * Gets the components name.
     * @returns `string`
     */
    getName() {
        return this._name;
    }
}
exports.default = Component1;
//# sourceMappingURL=component1.js.map