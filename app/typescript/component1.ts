export default class Component1{

    public el:      HTMLElement;
    public uuid:    string;

    private _name:  string;

    constructor(el:HTMLElement, uuid:string){
        this.el = el;
        this.uuid = uuid;

        this._name  = null;

        console.log('Component 1 started', this.el);
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