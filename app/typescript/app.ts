export default class App{

    private _buttons:   Array<HTMLButtonElement>;

    constructor(){

        // Build an array of all the buttons
        this._buttons   = Array.from(document.body.querySelectorAll('.js-button'));
        
        // Call `init()` to start any event listeners
        this.init();
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
     * Called when the class has be initiated.
     * Used to assign event listeners to DOM elements.
     */
    private init():void{
        // Assign the `click` event listener to each of the buttons
        for(let button of this._buttons){
            button.addEventListener('click', this.handleLoad);
        }
    }
}

/**
 * IIFE for launching the application
 */
(()=>{
    new App();
})();