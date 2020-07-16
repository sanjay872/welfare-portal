package com.welfare.portal.Service;

import java.util.List;

import com.welfare.portal.Dto.PostDto;
import com.welfare.portal.RequestModel.CreatePost;

public interface PostService {

	void createpost(CreatePost post);

	List<PostDto> getPost(String id);
	List<PostDto> getallPost();

	List<PostDto> getPostbycate(String cate);
	
}
