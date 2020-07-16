package com.welfare.portal.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;



@Entity
@Table(name = "profileimage")
public class FileEntity {
    @Id
    @GeneratedValue()
    private long id;
    
    @Column(unique=true)
    private String userid;

    @Column()
    private String fileName;

    @Column()
    private String fileType;

    @Lob
    private byte[] data;

    public FileEntity() {

    }

    public FileEntity(String userid,String fileName, String fileType, byte[] data) {
    	this.userid=userid;
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
    }

    
    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}
    
    
}