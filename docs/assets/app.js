"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor() {
        /**
         * Called when an element with the class of `.js-button` is clicked.
         * Gets the component ID for the dynamic importer method.
         */
        this.handleLoad = (e) => {
            const target = e.currentTarget;
            const component = target.dataset.componentId;
        };
        // Build an array of all the buttons
        this._buttons = Array.from(document.body.querySelectorAll('.js-button'));
        // Call `init()` to start any event listeners
        this.init();
    }
    /**
     * Called when the class has be initiated.
     * Used to assign event listeners to DOM elements.
     */
    init() {
        // Assign the `click` event listener to each of the buttons
        for (let button of this._buttons) {
            button.addEventListener('click', this.handleLoad);
        }
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