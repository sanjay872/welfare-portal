package com.welfare.portal.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.internet.AddressException;

import java.io.IOException;
import java.lang.reflect.Type;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.welfare.portal.Dto.AdminDto;
import com.welfare.portal.Dto.PostDto;
import com.welfare.portal.Dto.UserDto;
import com.welfare.portal.Entity.FileEntity;
import com.welfare.portal.RequestModel.AdminRequest;
import com.welfare.portal.RequestModel.CreatePost;
import com.welfare.portal.RequestModel.UpdateUser;
import com.welfare.portal.RequestModel.UserLogin;
import com.welfare.portal.RequestModel.UserRequest;
import com.welfare.portal.ResponseModel.AdminResponse;
import com.welfare.portal.ResponseModel.EmailResponse;
import com.welfare.portal.ResponseModel.UserDetails;
import com.welfare.portal.ResponseModel.UserPost;
import com.welfare.portal.ResponseModel.UserResponse;
import com.welfare.portal.Service.AdminService;
import com.welfare.portal.Service.FileStorageService;
import com.welfare.portal.Service.PostService;
import com.welfare.portal.Service.UserService;
import com.welfare.portal.email.EmailMessage;

import javax.mail.Message;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

@RestController()
@CrossOrigin(origins="*")
public class Controller {
	@Value("${gmail.username}")
	private String username;
	@Value("${gmail.password}")
	private String password;
	
	@Autowired
	UserService userService;
	
	@Autowired
	PostService postService;
	
	@Autowired
	FileStorageService fileStorageService;
	
	@Autowired
	AdminService adminService;
	
	@PostMapping("/create")
	public void CreateUser(@RequestBody UserRequest req ) {
		UserDto dto=new UserDto();
		BeanUtils.copyProperties(req, dto);
		boolean user=userService.createUser(dto);
		if(!user) throw new RuntimeException("user already exist"); 
	}
	
	@PostMapping("/login/welfare")
	public UserResponse welfareLogin(@RequestBody UserLogin user) {
		UserResponse res=new UserResponse();
		UserDto dto=new UserDto();
		BeanUtils.copyProperties(user, dto);
		UserResponse userid=userService.verifywelfareuser(dto);
		if(userid==null) throw new RuntimeException("user does not exist");
		if(userService.checkactive(user.getEmail())) {
			BeanUtils.copyProperties(userid, res);
			return res;
		}else {
			throw new RuntimeException("account is not activated");
		}
	}
	@PostMapping("/login/donor")
	public UserResponse donorLogin(@RequestBody UserLogin user) {
		UserResponse res=new UserResponse();
		UserDto dto=new UserDto();
		BeanUtils.copyProperties(user, dto);
		UserResponse userid=userService.verifydonoruser(dto);
		BeanUtils.copyProperties(userid, res);
		if(userid==null) throw new RuntimeException("user does not exist");
		return res;
	}
	
	@GetMapping("/getdetails/welfare/{id}")
	public UserDetails welfareuserDetails(@PathVariable String id) {
		UserDetails de=new UserDetails();
		de=userService.getwelfaredetails(id);
		return de;
	}
	@GetMapping("/getdetails/donor/{id}")
	public UserDetails donoruserDetails(@PathVariable String id) {
		UserDetails de=new UserDetails();
		de=userService.getdonordetails(id);
		return de;
	}
	
	@PutMapping("/updateprofile/welfare/{id}")
	public void updatewelfareprofile(@PathVariable String id,@RequestBody UpdateUser user) {
		userService.updatewelfareuser(id,user);
	}
	@PutMapping("/updateprofile/donor/{id}")
	public void updatedonorprofile(@PathVariable String id,@RequestBody UpdateUser user) {
		userService.updatedonoruser(id,user);
	}
	@PostMapping("/createpost")
	public void createpost(@RequestBody CreatePost post) {
		postService.createpost(post);
	}
	
	@GetMapping("/getpost/{id}")
	public List<UserPost> getpost(@PathVariable String id ) {
		List<UserPost> post=new ArrayList<>();
		List<PostDto> Dto=postService.getPost(id);
			if (Dto != null &&!Dto.isEmpty()) {
				Type listType = new TypeToken<List<UserPost>>() {
				}.getType();
				post = new ModelMapper().map(Dto,listType);
		}
		return post;
	}
	
	@GetMapping("/getallpost")
	public List<UserPost> getallpost() {
		List<UserPost> post=new ArrayList<>();
		List<PostDto> Dto=postService.getallPost();
			if (Dto != null &&!Dto.isEmpty()) {
				Type listType = new TypeToken<List<UserPost>>() {
				}.getType();
				post = new ModelMapper().map(Dto,listType);
		}
		return post;
	}
	@GetMapping("/getallpost/{cate}")
	public List<UserPost> getpostbycate(@PathVariable String cate) {
		String cate_all="All Category";
		List<UserPost> post=new ArrayList<>();
		List<PostDto> Dto=new ArrayList<>();
		if(cate.equals(cate_all)) {
			 Dto=postService.getallPost();
		}else {
			 Dto=postService.getPostbycate(cate);
		}
		
			if (Dto != null &&!Dto.isEmpty()) {
				Type listType = new TypeToken<List<UserPost>>() {
				}.getType();
				post = new ModelMapper().map(Dto,listType);
		}
		return post;
	}
	
	@PostMapping("/uploadimage/{id}")
	public void uploadimage(@RequestParam("image") MultipartFile file,@PathVariable String id) throws IOException {
		if(fileStorageService.imageexist(id)) {
			fileStorageService.replaceimage(file,id);
		}else {
			fileStorageService.storeFile(file,id);
		}
		
	}
	
	@GetMapping("/getimage/{id}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String id) {
        // Load file from database
        FileEntity File = fileStorageService.getFile(id);
        if(File==null) {
         throw new RuntimeException("no image");
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(File.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + File.getFileName() + "\"")
                .body(new ByteArrayResource(File.getData()));
    }
	
	@RequestMapping(value="/send", method=RequestMethod.POST)
	public EmailResponse sendEmail(@RequestBody EmailMessage emailmessage) throws AddressException, MessagingException, IOException {
		EmailResponse res=new EmailResponse();
		res.setStatus("wait for the donor to contact");
		sendmail(emailmessage);
		return res;
	}
	
	
	private void sendmail(EmailMessage emailmessage) throws AddressException, MessagingException, IOException {
		
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		
		Session session = Session.getInstance(props,
				  new javax.mail.Authenticator() {
					protected PasswordAuthentication getPasswordAuthentication() {
						return new PasswordAuthentication(username, password);
					}
				  });
		
		Message msg = new MimeMessage(session);
		msg.setFrom(new InternetAddress(username, false));

		msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(emailmessage.getTo_address()));
		msg.setSubject(emailmessage.getSubject());
		msg.setContent(emailmessage.getBody(), "text/html");
		msg.setSentDate(new Date());
		
//		MimeBodyPart messageBodyPart = new MimeBodyPart();
//		messageBodyPart.setContent(emailmessage.getBody(), "text/html");
//
//		Multipart multipart = new MimeMultipart();
//		multipart.addBodyPart(messageBodyPart);
//		MimeBodyPart attachPart = new MimeBodyPart();
//
//		attachPart.attachFile("D:\\wallpaper\\itachi.jpg");
//
//		multipart.addBodyPart(attachPart);
//		msg.setContent(multipart);
		// sends the e-mail
		Transport.send(msg);
		
	}
	@PostMapping("/admin")
	public boolean verifyadmin(@RequestBody AdminRequest admin) {
		if(adminService.verifyadmin(admin)) {
			return true;
		}
		return false;
	}
	
	@GetMapping("/admin/welfareprofile")
	public List<AdminResponse> getwelfare() {
		List<AdminResponse> res=new ArrayList<>();
			List<AdminDto> Dto=adminService.getwelfareProfile();
			if (Dto != null &&!Dto.isEmpty()) {
				Type listType = new TypeToken<List<AdminResponse>>() {
				}.getType();
				res = new ModelMapper().map(Dto,listType);
		}
		return res;
	}
	
	@PostMapping("/admin/setactive")
	public void setactive(@RequestBody String id) {
		adminService.setactive(id);
	}
}
