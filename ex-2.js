class Notification {
    constructor(notificationId,createdTime,content,receiver){
        this.notificationId = notificationId
        this.createdTime = createdTime
        this.content = content
        this.receiver = receiver        
    }
    send(){
        console.log("Notification has been sent to " + this.receiver)
    }
 }

class EmailNotification extends Notification{
    constructor(notificationId,createdTime,content,receiver){
        super(notificationId,createdTime,content,receiver)
    }
 }

class SMSNotification extends Notification{ 
    constructor(notificationId,createdTime,content,receiver){
        super(notificationId,createdTime,content,receiver)
    }    
}
const emailNotification = new EmailNotification("12345", "2023-10-12", "Hello via email", "john@example.com");
const smsNotification = new SMSNotification("67890", "2023-10-12", "Hello via SMS", "+1234567890");

emailNotification.send(); 
smsNotification.send();  