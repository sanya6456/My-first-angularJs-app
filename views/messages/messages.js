app.controller("messagesCtrl", function($scope) {
    $scope.messages=[
        {id:0, name:'Alessandra Accetta', userName:'Alessa_00345', profilePicture:'./gallery/friendsProfilePictures/girl-01.jpg', msg:[
            {id:0, author:'', messageContent:'Hello, Here is a biiiiig surprise!!'},
            {id:1, author:'me', messageContent:'Hi, Oh my god :)))))'},
            {id:2, author:'', messageContent:'I wish you have a great birthday.. :)'},
            {id:3, author:'me', messageContent:'Yeah, thank you. It cant be better I think so.. :)'},
            {id:4, author:'', messageContent:'I would like to say you toooooo!!'}
        ]},
        {id:01, name:'Carmen Bressi', userName:'Carmen_990606', profilePicture:'./gallery/friendsProfilePictures/girl-02.jpg', msg:[
            {id:0, author:'', messageContent:'YOOOO, m8'},
            {id:1, author:'me', messageContent:'Whats up, brother!?'},
            {id:2, author:'', messageContent:'How is it going on?!?!?'},
            {id:3, author:'me', messageContent:'Everything fine thanks!!'},
            {id:4, author:'me', messageContent:'And u?'},
            {id:5, author:'', messageContent:'YEEEAAH fine..!'},
            {id:6, author:'', messageContent:'I have gr8 news for you'}
        ]},
        {id:02, name:'Emilia Cagnina', userName:'EmiliaCagninaaaa', profilePicture:'./gallery/friendsProfilePictures/girl-03.jpg', msg:[]},
        {id:03, name:'Luigi D’Arezzo', userName:'DareZzO_00', profilePicture:'./gallery/friendsProfilePictures/boy-01.jpg', msg:[]},
        {id:04, name:'Mario Diglio', userName:'ItsMario0o0', profilePicture:'./gallery/friendsProfilePictures/boy-02.jpg', msg:[]},
        {id:05, name:'Pietro Fortino', userName:'Fortino_1864', profilePicture:'./gallery/friendsProfilePictures/boy-03.jpg', msg:[]},
    ]

    // Get the index of clicked message && insert name of author
    $scope.selectedMessageIndex=0;
    
    var selectedMessage=document.getElementById('selectedMessage');
    var messages=document.getElementById('messages');
    var fixTitle=document.getElementById('fixTitle');

    $scope.selectMessage=(index)=>{
        $scope.selectedMessageIndex=index;
        $scope.messages[$scope.selectedMessageIndex].msg.forEach(e => {
            if(e.author!=='me'){
                e.author=$scope.messages[$scope.selectedMessageIndex].name;
            }
        });

        // responsive messages
        selectedMessage.classList.remove('d-none');
        selectedMessage.classList.add('d-flex');
        messages.classList.add('d-none');
        messages.classList.add('d-md-block');
        fixTitle.classList.remove('justify-content-between');
    }

    // on click left arrow 
    $scope.backToMsg=()=>{
        selectedMessage.classList.add('d-none');
        selectedMessage.classList.remove('d-flex');
        messages.classList.remove('d-none');
        messages.classList.remove('d-md-block');
    }

    // Watch changes in messages array
    $scope.$watch('messages', function(){
        $scope.messages[$scope.selectedMessageIndex].msg.forEach(e => {
            if(e.author!=='me'){
                e.author=$scope.messages[$scope.selectedMessageIndex].name;
            }
        });
    })

    $scope.myMessage='';

    $scope.sendMyMessage=()=>{
        $scope.messages[$scope.selectedMessageIndex].msg.push({id:$scope.messages[$scope.selectedMessageIndex].msg.length, author:`me`, messageContent:`${$scope.myMessage}`});
        $scope.myMessage="";
    }




});