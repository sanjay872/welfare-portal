package com.welfare.portal.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.welfare.portal.Dto.PostDto;
import com.welfare.portal.Entity.PostEntity;
import com.welfare.portal.Repository.PostRepository;
import com.welfare.portal.RequestModel.CreatePost;
import com.welfare.portal.Service.PostService;

@Service
public class PostServiceImpl implements PostService {

	@Autowired
	PostRepository postRepository;
	
	@Override
	public void createpost(CreatePost post) {
		PostEntity entity=new PostEntity();
		BeanUtils.copyProperties(post, entity);
		postRepository.save(entity);
	}

	@Override
	public List<PostDto> getPost(String id) {
		List<PostDto> returnvalue=new ArrayList<>();
		ModelMapper modelMapper=new ModelMapper();
		Iterable<PostEntity> post=postRepository.findAll();
		for (PostEntity postEntity:post) {
			if(postEntity.getUserid().equals(id)) {
				returnvalue.add(modelMapper.map(postEntity,PostDto.class));
			}
		}
		return returnvalue;
	}
	
	@Override
	public List<PostDto> getallPost() {
		List<PostDto> returnvalue=new ArrayList<>();
		ModelMapper modelMapper=new ModelMapper();
		Iterable<PostEntity> post=postRepository.findAll();
		for (PostEntity postEntity:post) {
				returnvalue.add(modelMapper.map(postEntity,PostDto.class));
		}
		return returnvalue;
	}

	@Override
	public List<PostDto> getPostbycate(String cate) {
		List<PostDto> returnvalue=new ArrayList<>();
		ModelMapper modelMapper=new ModelMapper();
		Iterable<PostEntity> post=postRepository.findAll();
		for (PostEntity postEntity:post) {
			if(postEntity.getCate().equals(cate)) {
				returnvalue.add(modelMapper.map(postEntity,PostDto.class));
			}
		}
		return returnvalue;
	}

}
