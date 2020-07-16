package com.welfare.portal.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.welfare.portal.Entity.AdminEntity;

@Repository
public interface AdminRepository extends CrudRepository<AdminEntity,Long> {


	AdminEntity findByEmail(String email);

}
