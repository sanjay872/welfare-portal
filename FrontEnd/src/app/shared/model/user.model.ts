export class user{
    public firstname:string;
	public lastname:string;
	public email:string;
	public address:string;
	public pincode:string;
	public phonenumber:string;
    public orgname:string;
    constructor(firstname:string,lastname:string,email:string
        ,address:string,pincode:string,phonenumber:string,orgname:string){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.address=address;
        this.pincode=pincode;
        this.phonenumber=phonenumber;
        this.orgname=orgname;
    }

}