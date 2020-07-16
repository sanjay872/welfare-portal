package com.welfare.portal.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.welfare.portal.Entity.FileEntity;

@Repository
public interface ImageRepository extends JpaRepository<FileEntity, Long> {
		FileEntity findByUserid(String id);
		
}
