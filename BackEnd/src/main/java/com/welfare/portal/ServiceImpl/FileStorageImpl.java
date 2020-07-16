package com.welfare.portal.ServiceImpl;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.welfare.portal.Entity.FileEntity;
import com.welfare.portal.Repository.ImageRepository;
import com.welfare.portal.Service.FileStorageService;



@Service
public class FileStorageImpl implements FileStorageService {
	
		@Autowired
		ImageRepository imageRepository;
	
	
	 public void storeFile(MultipartFile file,String id) {
	        // Normalize file name
	        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

	        try {
	            // Check if the file's name contains invalid characters
	            if(fileName.contains("..")) {
	                throw new RuntimeException("Sorry! Filename contains invalid path sequence " + fileName);
	            }

	            FileEntity  File = new FileEntity(id,fileName, file.getContentType(), file.getBytes());

	             imageRepository.save(File);
	        } catch (IOException ex) {
	            throw new RuntimeException("Could not store file " + fileName + ". Please try again!", ex);
	        }
	    }
	 	
	  public FileEntity getFile(String id) {
	        return imageRepository.findByUserid(id);
	    }

	@Override
	public boolean imageexist(String id) {
		if(imageRepository.findByUserid(id)==null) {
			return false;
		}
		return true;
	}

	@Override
	public void replaceimage(MultipartFile file, String id) throws IOException {
		FileEntity usr=imageRepository.findByUserid(id);
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		usr.setData(file.getBytes());
		usr.setFileName(fileName);
		usr.setFileType(file.getContentType());
		imageRepository.save(usr);
	}

}
