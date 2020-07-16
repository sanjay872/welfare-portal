export class signup{
    public firstname:String;
    public lastname:String;
    public email:String;
    public group:String;
    public orgname:String;
    public address:String;
    public pincode:String;
    public phonenumber:String;
    public password:String;
    constructor(firstname:String,lastname:String,email:String,group:String,orgname:String
        ,address:String,pincode:String,phonennumber:String,password:String){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.group=group;
        this.orgname=orgname;
        this.address=address;
        this.pincode=pincode;
        this.phonenumber=phonennumber;
        this.password=password;
    }
}