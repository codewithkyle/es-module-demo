export default class Component1 {
    constructor(el, uuid) {
        this.changeColor = (e) => {
            const randomColor = `${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}, ${this.getRandomInt(0, 255)}`;
            this.el.style.borderColor = `rgb(${randomColor})`;
            this.el.style.boxShadow = `0 4px 16px rgba( ${randomColor}, 0.15 )`;
            this.el.style.color = `rgba(${randomColor}, 0.87)`;
        };
        this.el = el;
        this.uuid = uuid;
        this._name = null;
        console.log('Component 1 started', this.el);
        this.init();
    }
    getRandomInt(min, max) {
        return Math.random() * (max - min) + min;
    }
    init() {
        this.el.addEventListener('mousemove', this.changeColor);
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