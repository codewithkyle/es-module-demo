class App{

    private _buttons:       Array<HTMLButtonElement>;
    private _reinitBttn:    HTMLButtonElement;    

    private _modules:   Module;

    constructor(){

        // Build an array of all the buttons
        this._buttons       = Array.from(document.body.querySelectorAll('.js-button'));
        this._reinitBttn    = document.body.querySelector('.js-reinit');
        
        this._modules   = {};

        // Call `init()` to start any event listeners
        this.init();
        this.initModules();
    }

    /**
     * Called when an element with the class of `.js-button` is clicked.
     * Gets the component ID for the dynamic importer method.
     */
    private handleLoad:EventListener = (e:Event)=>{
        const target = <HTMLElement>e.currentTarget;
        const component = target.dataset.componentId;


    }

    /**
     * Parses supplied string and returns an array of module names.
     * @returns `string[]`
     * @param { string } data - a string taken from an elements `data-modules` attribute
     */
    private getModuleNames(data:string): Array<string>{
        // Trim whitespace and spit the string by whitespace
        let modules = data.trim().split(/\s+/gi);

        // Fixes array for empty `data-module` attributes
        if(modules.length === 1 && modules[0] === ''){
            modules = [];
        }

        return modules;
    }

    private initModules():void{
        const modulesRequired:Array<Element> = Array.from(document.body.querySelectorAll('[data-module]'));

        if(!modulesRequired.length){
            console.log('No modules were required');
            return;
        }

        const undefinedModules:Array<string> = [];

        modulesRequired.forEach((module:HTMLElement)=>{
            const moduleNames = this.getModuleNames(module.dataset.module);
            
            if(!moduleNames.length){
                console.log('Empty module attribute detected');
                return;
            }

            moduleNames.forEach((id:string)=>{
                if(this._modules[id] !== undefined){
                    console.log(`Module ${ id } is defined`);
                    new this._modules[id].default.prototype.constructor(module);
                }else{
                    undefinedModules.push(id);
                }
            });
        });

        if(undefinedModules.length){
            this.importModules(undefinedModules);
        }

    }

    private importModules(requestedModules:Array<string>):void{
        requestedModules.forEach((moduleId:string)=>{
            (async ()=>{
                const uri = `${ window.location.origin }${ window.location.pathname }assets/${ moduleId.toLowerCase() }.js`;
                try{
                    const module = await import(uri);
                    this._modules[moduleId] = module;
                }catch(e){
                    console.log('Error', e);
                }
            })();
        });
    }

    /**
     * Called when the class has be initiated.
     * Used to assign event listeners to DOM elements.
     */
    private init():void{
        // Assign the `click` event listener to each of the buttons
        for(let button of this._buttons){
            button.addEventListener('click', this.handleLoad);
        }

        this._reinitBttn.addEventListener('click', ()=>{ this.initModules() });
    }
}

/**
 * IIFE for launching the application
 */
(()=>{
    new App();
})();