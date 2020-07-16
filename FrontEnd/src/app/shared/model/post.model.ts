export class post{
    public userid:string;
    public firstname:string;
	public lastname:string;
	public email:string;
	public address:string;
	public pincode:string;
	public phonenumber:string;
    public orgname:string;
    public desc:string;
    public cate:string;
    public time:Date;
    constructor(userid:string,firstname:string,lastname:string,email:string
        ,address:string,pincode:string,phonenumber:string,orgname:string,desc:string,cate:string,time:Date){
        this.userid=userid;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.address=address;
        this.pincode=pincode;
        this.phonenumber=phonenumber;
        this.orgname=orgname;
        this.desc=desc;
        this.cate=cate;
        this.time=time;
    }
}