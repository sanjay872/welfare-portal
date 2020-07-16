package com.welfare.portal.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.welfare.portal.Entity.WelfareEntity;

@Repository
public interface WelfareRepository extends CrudRepository<WelfareEntity,Long> {

	WelfareEntity findByEmail(String email);

	WelfareEntity findByUserId(String id);

}
