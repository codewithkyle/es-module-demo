export default class Component1{

    public el:      HTMLElement;
    public uuid:    string;

    private _name:  string;

    constructor(el:HTMLElement, uuid:string){
        this.el = el;
        this.uuid = uuid;

        this._name  = null;

        console.log('Component 1 started', this.el);

        this.init();
    }

    private changeColor:EventListener = (e:Event)=>{
        const randomColor = `${ this.getRandomInt(0, 255) }, ${ this.getRandomInt(0, 255) }, ${ this.getRandomInt(0, 255) }`;
        this.el.style.borderColor = `rgb(${ randomColor })`;
        this.el.style.boxShadow = `0 4px 16px rgba( ${ randomColor }, 0.15 )`;
        this.el.style.color = `rgba(${ randomColor }, 0.87)`;
    }

    private getRandomInt(min:number, max:number):number{
        return Math.random() * (max - min) + min;
    }

    private init():void{
        this.el.addEventListener('mousemove', this.changeColor);
    }

    /**
     * Sets the components name.
     * @param newName - `string`
     */
    public setName(newName:string):void{
        this._name = newName;
    }

    /**
     * Gets the components name.
     * @returns `string`
     */
    public getName():string{
        return this._name;
    }
}