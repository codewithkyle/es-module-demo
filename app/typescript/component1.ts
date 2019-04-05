export default class Component1{

    private _name:  string;

    constructor(){
        console.log('Component 1 started');
        this._name  = null;
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