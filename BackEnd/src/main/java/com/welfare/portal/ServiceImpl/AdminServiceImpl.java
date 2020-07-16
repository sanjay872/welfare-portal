package com.welfare.portal.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.welfare.portal.Dto.AdminDto;
import com.welfare.portal.Entity.AdminEntity;
import com.welfare.portal.Entity.WelfareEntity;
import com.welfare.portal.Repository.AdminRepository;
import com.welfare.portal.Repository.WelfareRepository;
import com.welfare.portal.RequestModel.AdminRequest;
import com.welfare.portal.Service.AdminService;
@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	WelfareRepository  welfareRepository;
	
	@Autowired
	AdminRepository adminRepository;
	
	@Override
	public List<AdminDto> getwelfareProfile() {
		List<AdminDto> returnvalue=new ArrayList<>();
		ModelMapper modelMapper=new ModelMapper();
		Iterable<WelfareEntity> welfare=welfareRepository.findAll();
		for (WelfareEntity welfareEntity:welfare) {
			if(welfareEntity.getActive()==null) {
				returnvalue.add(modelMapper.map(welfareEntity,AdminDto.class));
			}
		}
		return returnvalue;
	}

	@Override
	public boolean verifyadmin(AdminRequest admin) {
		AdminEntity adminEntity=new AdminEntity();
		adminEntity=adminRepository.findByEmail(admin.getEmail());
		if((adminEntity!=null)&&(adminEntity.getPassword().equals(admin.getPassword()))) {
			return true;
		}
		return false;
	}

	@Override
	public boolean checkadmin(String id) {
		AdminEntity adminEntity=new AdminEntity();
		adminEntity=adminRepository.findByEmail(id);
		if(adminEntity!=null) {
			return true;
		}
		return false;
	}

	@Override
	public void setactive(String id) {
		WelfareEntity welfare=new WelfareEntity();
		welfare=welfareRepository.findByUserId(id);
		welfare.setActive("active");
		welfareRepository.save(welfare);
	}

}
