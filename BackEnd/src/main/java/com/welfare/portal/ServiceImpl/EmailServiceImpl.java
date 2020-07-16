package com.welfare.portal.ServiceImpl;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;


import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.internet.MimeMessage;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMultipart;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.welfare.portal.Service.EmailService;
import com.welfare.portal.email.EmailMessage;

@Service
public class EmailServiceImpl implements EmailService {
	@Value("$(gmail.username)")
	private String username;
	
	@Value("$(gmail.password)")
	private String password;
	
	@Override
	public void sentemail(EmailMessage message) throws AddressException, MessagingException, IOException {
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
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

		msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(message.getTo_address()));
		msg.setSubject(message.getSubject());
		msg.setContent(message.getBody(), "text/html");
		msg.setSentDate(new Date());
		
		MimeBodyPart messageBodyPart = new MimeBodyPart();
		messageBodyPart.setContent(message.getBody(), "text/html");

		Multipart multipart = new MimeMultipart();
		multipart.addBodyPart(messageBodyPart);
		MimeBodyPart attachPart = new MimeBodyPart();

		attachPart.attachFile("D:\\wallpaper\\itachi.jpg");

		multipart.addBodyPart(attachPart);
		msg.setContent(multipart);
		// sends the e-mail
		Transport.send(msg);
		
	}

}
