export default class Component1 {
    constructor(el, uuid) {
        this.el = el;
        this.uuid = uuid;
        this._name = null;
        console.log('Component 1 started', this.el);
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
//# sourceMappingURL=component1.js.map