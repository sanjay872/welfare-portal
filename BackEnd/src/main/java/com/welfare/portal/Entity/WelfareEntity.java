package com.welfare.portal.Entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity()
@Table(name="welfare")
public class WelfareEntity implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3395514872186043210L;
	@Id
	@GeneratedValue
	@Column(nullable=false)
	private long Id;
	
	@Column(nullable=false)
	private	String userId;
	
	@Column(nullable=false)
	private String firstname;
	
	@Column(nullable=false)
	private String lastname;
	
	@Column(nullable=false,unique=true)
	private String email;
	
	@Column(nullable=false,name="org_group")
	private String group;
	
	@Column(nullable=false)
	private String orgname;
	
	@Column(nullable=false)
	private String address;
	
	@Column(nullable=false)
	private String pincode;
	
	@Column(nullable=false)
	private String phonenumber;
	
	@Column(nullable=false)
	private String password;
	
	@Column(nullable=true)
	private String active;
	
	@Column(nullable=false)
	private String orgid;
	
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

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getOrgname() {
		return orgname;
	}

	public void setOrgname(String orgname) {
		this.orgname = orgname;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getActive() {
		return active;
	}

	public void setActive(String active) {
		this.active = active;
	}

	public String getOrgid() {
		return orgid;
	}

	public void setOrgid(String orgid) {
		this.orgid = orgid;
	}

	
	
	
}
	
	
