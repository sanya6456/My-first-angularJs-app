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
    $scope.posts=[];       // all

    // public a post
    var i=0;
    $scope.post=()=>{
        // public time
        var date = new Date();
        var min=date.getMinutes();
        var hour=date.getHours();
        $scope.publicTime=`${min}m ${hour}h`;
        // public a post if textarea not empty
        if($scope.currentPost!=""){
            $scope.posts.push({id:i++,postDesc:`${$scope.currentPost}`,publicTime:`${$scope.publicTime}`});
        }
        //after post make textarea clear
        $scope.currentPost="";
    }

    // onClick trash icon, your text will be deleted
    $scope.clearPost=()=>{$scope.currentPost="";}

    // tweets counter
    $scope.$watch('posts.length',(a,b)=>{
        if(a!=b){
            $scope.profile.tweets=$scope.posts.length;
        }
    })


});