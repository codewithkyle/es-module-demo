export default class Component2{
    public el:      HTMLElement;
    public uuid:    string;

    constructor(el:HTMLElement, uuid:string){
        this.el = el;
        this.uuid = uuid;
        console.log('Component 2 started');
    }
}