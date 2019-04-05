"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor() {
        this.handleLoad = (e) => {
            const target = e.currentTarget;
            const component = target.dataset.componentId;
            console.log(component);
        };
        this._buttons = Array.from(document.body.querySelectorAll('.js-button'));
        for (let button of this._buttons) {
            button.addEventListener('click', this.handleLoad);
        }
        this.init();
    }
    /**
     * Called when the class has be initiated
     */
    init() {
    }
}
exports.default = App;
/**
 * IIFE for launching the application
 */
(() => {
    new App();
})();
//# sourceMappingURL=app.js.map