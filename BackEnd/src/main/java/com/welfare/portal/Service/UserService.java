package com.welfare.portal.Service;

import com.welfare.portal.Dto.UserDto;
import com.welfare.portal.RequestModel.UpdateUser;
import com.welfare.portal.ResponseModel.UserDetails;
import com.welfare.portal.ResponseModel.UserResponse;

public interface UserService {
	boolean	createUser(UserDto user);
	UserResponse verifywelfareuser(UserDto user);
	UserResponse verifydonoruser(UserDto user);
	UserDetails getwelfaredetails(String id);
	UserDetails getdonordetails(String id);
	void updatewelfareuser(String id, UpdateUser user);
	void updatedonoruser(String id, UpdateUser user);
	boolean checkactive(String id);
}
