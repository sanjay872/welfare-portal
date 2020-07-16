package com.welfare.portal.Service;

import java.util.List;

import com.welfare.portal.Dto.AdminDto;
import com.welfare.portal.RequestModel.AdminRequest;


public interface AdminService {
	List<AdminDto> getwelfareProfile();
	boolean checkadmin(String id); 
	boolean verifyadmin(AdminRequest admin);
	void setactive(String id);
}
