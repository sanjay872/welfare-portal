export class updateuser{
    public firstname:string;
    public lastname:string;
    public orgname:string;  
    public address:string;
    public pincode:string;
    public phonenumber:string;
    constructor(firstname:string,lastname:string,orgname:string,address:string,pincode:string,phonenumber:string){
        this.firstname=firstname;
        this.lastname=lastname;
        this.orgname=orgname;
        this.address=address;
        this.pincode=pincode;
        this.phonenumber=phonenumber;
    }
}