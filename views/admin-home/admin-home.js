app.controller("profileCtrl", function($scope) {
    // profile data
    $scope.profile = {
        id:0,
        firstName:'John',
        lastName:'Smith',
        age:27,
        userName:'johnsmith6456',
        profilePicture:"gallery/its-me-tp.png",
        profileDesc:'Hello, I am a UI/UX designer in Canada. I am really passionate about my job and also I like colorfull parrots who can repeat what I say.',
        location:'Canada, USA',
        joined:'August 2009',
        tweets:0,
        following:80,
        followers:100,
    }

    // you can change profile bg
    $scope.reactiveBg=[
        {id:0, img:'./gallery/bg-custom-01.jpg'},
        {id:1, img:'./gallery/bg-custom-02.jpg'},
        {id:2, img:'./gallery/bg-custom-03.jpg'},
    ]
    var currBg=document.getElementById('profileBg');
    $scope.changeBg=function(value){
        currBg.style.backgroundImage=`linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8),rgba(0,0,0,.8)),url(${value.img})`;
    }
    $scope.clearBg=function(){
        currBg.style.backgroundImage="";
    }

    // store posts
    $scope.currentPost=''; // current
    $scope.posts=[
        {id:length, name:'Emilia Cagnina', userName:'EmiliaCagninaaaa', profilePicture:'./gallery/friendsProfilePictures/girl-03.jpg', postDesc:`Helloooo, I'm looking for a new TV under 1. If you know one, please tell me ...`, publicTime:`10m 7h`},
        {id:length, name:'Luigi D’Arezzo', userName:'DareZzO_00', profilePicture:'./gallery/friendsProfilePictures/boy-01.jpg', postDesc:`Yooo guys, I got this app right now! What the HELLL is it..?`, publicTime:`1m 1h`},
    ];       // all

    // public a post
    $scope.post=()=>{
        // public time
        var date = new Date();
        var min=date.getMinutes();
        var hour=date.getHours();
        $scope.publicTime=`${min}m ${hour}h`;
        // public a post if textarea not empty
        if($scope.currentPost!=""){
            $scope.posts.unshift({id:$scope.posts.length, name:`${$scope.profile.firstName} ${$scope.profile.lastName}`, userName:`${$scope.profile.userName}`, profilePicture:`${$scope.profile.profilePicture}`, postDesc:`${$scope.currentPost}`,publicTime:`${$scope.publicTime}`});
        }
        //after post make textarea clear
        $scope.currentPost="";

        // my tweets counter
        let tweetCounter=0;
        for(const postObj of $scope.posts){
            if(postObj.name==$scope.profile.firstName+' '+$scope.profile.lastName){
                tweetCounter++;
            }
        }
        $scope.profile.tweets=tweetCounter;
    }

    // onClick trash icon, your text will be deleted
    $scope.clearPost=()=>{$scope.currentPost="";}



});