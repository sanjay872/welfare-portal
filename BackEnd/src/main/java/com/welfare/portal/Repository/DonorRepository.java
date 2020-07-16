package com.welfare.portal.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.welfare.portal.Entity.DonorEntity;
@Repository
public interface DonorRepository extends CrudRepository<DonorEntity,Long> {

	DonorEntity findByEmail(String email);

	DonorEntity findByUserId(String id);

}
