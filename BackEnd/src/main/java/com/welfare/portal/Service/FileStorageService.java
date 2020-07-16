package com.welfare.portal.Service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.welfare.portal.Entity.FileEntity;

public interface FileStorageService {

	void storeFile(MultipartFile file,String id);
	FileEntity getFile(String id);
	boolean imageexist(String id);
	void replaceimage(MultipartFile file, String id) throws IOException;

}
