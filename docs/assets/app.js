var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        this._reinitBttn = document.body.querySelector('.js-reinit');
        this._modules = {};
        this._currentModules = [];
        // Call `init()` to start any event listeners
        this.init();
        this.initModules();
    }
    /**
     * Parses supplied string and returns an array of module names.
     * @returns `string[]`
     * @param { string } data - a string taken from an elements `data-modules` attribute
     */
    getModuleNames(data) {
        // Trim whitespace and spit the string by whitespace
        let modules = data.trim().split(/\s+/gi);
        // Fixes array for empty `data-module` attributes
        if (modules.length === 1 && modules[0] === '') {
            modules = [];
        }
        return modules;
    }
    initModules() {
        console.log('Getting modules');
        const modulesRequired = Array.from(document.body.querySelectorAll('[data-module]'));
        if (!modulesRequired.length) {
            console.log('No modules were required');
            return;
        }
        const undefinedModules = [];
        modulesRequired.forEach((module) => {
            const moduleNames = this.getModuleNames(module.dataset.module);
            if (!moduleNames.length) {
                console.log('Empty module attribute detected');
                return;
            }
            moduleNames.forEach((id) => {
                if (this._modules[id] !== undefined && module.dataset.uuid === undefined) {
                    console.log(`Module ${id} is defined`);
                    const newUUID = this.uuid();
                    const newModule = new this._modules[id].default.prototype.constructor(module, newUUID);
                    module.setAttribute('data-uuid', newUUID);
                    this._currentModules.push(newModule);
                }
                else {
                    let alreadyRequested = false;
                    undefinedModules.map((alreadyRequestedId) => {
                        if (id === alreadyRequestedId) {
                            alreadyRequested = true;
                        }
                    });
                    if (!alreadyRequested) {
                        undefinedModules.push(id);
                    }
                }
            });
        });
        if (undefinedModules.length) {
            this.importModules(undefinedModules);
        }
    }
    importModules(requestedModules) {
        requestedModules.forEach((moduleId) => {
            if (this._modules[moduleId] === undefined) {
                console.log(`Getting module ${moduleId}`);
                (() => __awaiter(this, void 0, void 0, function* () {
                    const uri = `${window.location.origin}${window.location.pathname}assets/${moduleId.toLowerCase()}.js`;
                    try {
                        const module = yield import(uri);
                        this._modules[moduleId] = module;
                    }
                    catch (e) {
                        console.log('Error', e);
                    }
                }))();
            }
        });
    }
    /**
     * Generates a UUID
     * @see https://stackoverflow.com/a/2117523/11154271
     */
    uuid() {
        //@ts-ignore
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
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
        this._reinitBttn.addEventListener('click', () => { this.initModules(); });
    }
}
/**
 * IIFE for launching the application
 */
(() => {
    new App();
})();
//# sourceMappingURL=app.js.map