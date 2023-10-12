//  Start coding here
class User{
    constructor(id,name,email){
        this.id = id
        this.name = name
        this.email = email
    }

}
class postList{
    constructor(addPosts,sharePosts) {
        this.posts = []
        this.addPosts = addPosts
        this.sharePosts = sharePosts
    }
    addPost(anotherpost){
        this.posts.push(anotherpost)
    }
    sharePost(postTitle) {
        console.log(`You've shared post "${postTitle}" to your friend.`);
    }
}
class Post{
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comments = [];
    }
    addComment(comment){
        this.comments.push(comment)
    }
}
class Facebook {
    constructor() {
        this.groupList = [];
        this.pageList = [];
    }

    addGroup(group) {
        this.groupList.push(group);
    }

    addPage(page) {
        this.pageList.push(page);
    }
}
class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
}
class Notification {
    constructor(id) {
        this.id = id;
    }

    send(commentCreatedBy, postTitle) {
        console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
    }
}