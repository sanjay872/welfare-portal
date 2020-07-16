export class signin{
    constructor(private _userId:string,private _group:string){}
    set group(group:string){
        this._group=group;
    }
    set userId(userId:string){
        this._userId=userId;
    }
    get group(){
        return this._group;
    }
    get userId(){
        return this._userId;
    }
    
   
}