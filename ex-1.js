class EmailNotification { 
    constructor(notificationId,createdTime,content,receiver) {
        this.notificationId = notificationId
        this.createdTime = createdTime
        this.content = content
        this.receiver = receiver
    }
    send(email){
        this.email = email
        console.log("Notification has been sent to " + email)
    }
}

class SMSNotification extends EmailNotification { 
    constructor(notificationId,createdTime,content,receiver){
        super(notificationId,createdTime,content,receiver)
    }
    send(phoneNum){
        this.phoneNum = phoneNum
        console.log("Notification has been sent to " + phoneNum)
    }
}
const member = new EmailNotification(12131,"0101","Moss","Moss")
console.log(member.send("Doraemon"))