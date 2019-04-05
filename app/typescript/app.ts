export default class App{

    private _buttons:   Array<HTMLButtonElement>;

    constructor(){
        this._buttons   = Array.from(document.body.querySelectorAll('.js-button'));

        for(let button of this._buttons){
            button.addEventListener('click', this.handleLoad);
        }
        
        this.init();
    }

    private handleLoad:EventListener = (e:Event)=>{
        const target = <HTMLElement>e.currentTarget;
        const component = target.dataset.componentId;
        console.log(component);
    }

    /**
     * Called when the class has be initiated
     */
    private init():void{
        
    }
}

/**
 * IIFE for launching the application
 */
(()=>{
    new App();
})();