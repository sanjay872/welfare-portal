package com.welfare.portal.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.welfare.portal.Entity.PostEntity;

@Repository
public interface PostRepository extends CrudRepository<PostEntity, Long> {

}
