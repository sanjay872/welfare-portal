package com.welfare.portal.ServiceImpl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.welfare.portal.Dto.UserDto;
import com.welfare.portal.Entity.DonorEntity;
import com.welfare.portal.Entity.WelfareEntity;
import com.welfare.portal.Repository.DonorRepository;
import com.welfare.portal.Repository.UserRepository;
import com.welfare.portal.Repository.WelfareRepository;
import com.welfare.portal.RequestModel.UpdateUser;
import com.welfare.portal.ResponseModel.UserDetails;
import com.welfare.portal.ResponseModel.UserResponse;
import com.welfare.portal.Service.UserService;
import com.welfare.portal.Shared.Utils;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	Utils utils;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	WelfareRepository welfareRepository; 
	
	@Autowired
	DonorRepository donorRepository;
	
	@Override
	public boolean createUser(UserDto user) {
		if(user.getOrgname()==null) {
			DonorEntity donorEntity=new DonorEntity();
			DonorEntity storeduser=donorRepository.findByEmail(user.getEmail());
			if(storeduser!=null)
				return false;
			BeanUtils.copyProperties(user, donorEntity);
			donorEntity.setUserId(utils.generateUserId(10));
			donorRepository.save(donorEntity);
			return true;
		}else {
			WelfareEntity welfareEntity=new WelfareEntity();
			WelfareEntity storeduser=welfareRepository.findByEmail(user.getEmail());
			if(storeduser!=null)
				return false;
			BeanUtils.copyProperties(user, welfareEntity);
			welfareEntity.setUserId(utils.generateUserId(10));
			welfareRepository.save(welfareEntity);
			return true;
		}
		//UserEntity entity=new UserEntity();
		//UserEntity storeduser=userRepository.findByEmail(user.getEmail());
//		if(storeduser!=null) 
//			return false;
//		BeanUtils.copyProperties(user, entity);
//		entity.setUserId(utils.generateUserId(10));
//		userRepository.save(entity);
//		return true;
	}

	@Override
	public UserResponse verifywelfareuser(UserDto user) {
		UserResponse res=new UserResponse();
		WelfareEntity storeduser=welfareRepository.findByEmail(user.getEmail());
		if(storeduser==null)
			return null;
		if(!storeduser.getPassword().equals(user.getPassword())) {
			return null;
		}
		res.setUserId(storeduser.getUserId());
		res.setGroup(storeduser.getGroup());
		return res;
	}
	@Override
	public UserResponse verifydonoruser(UserDto user) {
		UserResponse res=new UserResponse();
		DonorEntity storeduser=donorRepository.findByEmail(user.getEmail());
		if(storeduser==null)
			return null;
		if(!storeduser.getPassword().equals(user.getPassword())) {
			return null;
		}
		res.setUserId(storeduser.getUserId());
		res.setGroup(storeduser.getGroup());
		return res;
	}


	@Override
	public UserDetails getwelfaredetails(String id) {
		UserDetails res=new UserDetails();
		WelfareEntity userdetails=welfareRepository.findByUserId(id);
		BeanUtils.copyProperties(userdetails, res);
		return res;
	}
	@Override
	public UserDetails getdonordetails(String id) {
		UserDetails res=new UserDetails();
		DonorEntity userdetails=donorRepository.findByUserId(id);
		BeanUtils.copyProperties(userdetails, res);
		return res;
	}

	@Override
	public void updatewelfareuser(String id, UpdateUser user) {
		WelfareEntity userdetails=welfareRepository.findByUserId(id);
		BeanUtils.copyProperties(user, userdetails);
		welfareRepository.save(userdetails);
	}
	@Override
	public void updatedonoruser(String id, UpdateUser user) {
		DonorEntity userdetails=donorRepository.findByUserId(id);
		BeanUtils.copyProperties(user, userdetails);
		donorRepository.save(userdetails);
	}

	@Override
	public boolean checkactive(String id) {
		WelfareEntity userdetails=welfareRepository.findByEmail(id);
		if(userdetails.getActive()==null) {
			return false;
		}
		return true;
	}

}
