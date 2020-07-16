export class admin{
    public userid:string;
    public firstname:string;
    public lastname:string;
    public orgname:string;
    public orgid:string;
    public email:string;
    public phonenumber:string;

    constructor(userid:string,firstname:string,lastname:string,orgid:string,orgname:string,email:string,phonenumber:string){
        this.userid=userid;
        this.firstname=firstname;
        this.lastname=lastname;
        this.orgid=orgid;
        this.orgname=orgname;
        this.email=email;
        this.phonenumber=phonenumber;
    }
}