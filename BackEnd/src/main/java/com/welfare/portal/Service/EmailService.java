package com.welfare.portal.Service;

import java.io.IOException;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;


import com.welfare.portal.email.EmailMessage;


public interface EmailService {
 void sentemail(EmailMessage emailMessage) throws AddressException, MessagingException, IOException;
}
