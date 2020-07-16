export class email{
    public to_address:string;
    public subject:string;
    public body:string;
    constructor(to_address:string,subject:string,body:string){
        this.to_address=to_address;
        this.subject=subject;
        this.body=body;
    }
}