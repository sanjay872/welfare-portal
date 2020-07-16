package com.welfare.portal.Entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity(name="post")
public class PostEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3311873888668068443L;
	
	@Id
	@GeneratedValue
	@Column(nullable=false)
	private long Id;
	
	@Column(nullable=false)
	private String userid;
	
	@Column(nullable=false)
	private String firstname;
	
	@Column(nullable=false)
	private String lastname;
	
	@Column(nullable=false)
	private String email;
	
	@Column(nullable=false)
	private String address;
	
	@Column(nullable=false)
	private String pincode;
	
	@Lob
	@Column(name="msg",nullable=false)
	private String desc;
	
	@Column(nullable=false)
	private String cate;
	
	@Column(nullable=false)
	private String phonenumber;
	
	@Column(nullable=true)
	private String orgname;

	@Column(nullable=false)
	private Date time;
	  
	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getOrgname() {
		return orgname;
	}

	public void setOrgname(String orgname) {
		this.orgname = orgname;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getCate() {
		return cate;
	}

	public void setCate(String cate) {
		this.cate = cate;
	}	
	
	
	
}
