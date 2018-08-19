{
    
const FIREBASE_MESSAGING = firebase.messaging();
    const FIREBASE_DATABASE = firebase.database();
    //sendMsg.addEventListener("submit",sendNot);

    
firebase.auth().onAuthStateChanged(function(user)
{
            if(user)
            {
                
                if(user!=null)
                {
                    var email_id=user.email;
                    var email_verified=user.emailVerified;
                   // window.alert(email_id+"  ..Verified = "+email_verified);
                    
                           $("#sec2").hide();
                    
//                    firebase.database().ref('/users/').orderByChild('uid').equalTo(userUID)
//                    
//                    var userId = firebase.auth().currentUser.uid;
//return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//  var username = (snapshot.val() && snapshot.val().Name) || 'Anonymous';
//  // ...
//});


                    
                            $("#sec2").removeClass("col-md-3").addClass("col-md-0");
                            $("#sec1").removeClass("col-md-9").addClass("col-md-12");
                          $("#loutBtn").show();

                            document.getElementById("userDispNm").innerHTML=email_id;
                            $("#userDispNm").show();
        
                    
                    
                }
                
//                firebase.auth().signOut().then(function() {
//                  console.log('Signed Out');
//                }, function(error) {
//                  console.error('Sign Out Error', error);
//                });
                
            }
            else
            {
                    $("#userDispNm").hide();
                    $("#loutBtn").hide();


            }
});

    
// retrieve notifications
var notificationRef = firebase.database().ref('/notification');
notificationRef.on('value', function(snapshot) {
  console.log("printing notification",snapshot.val());
});
    
    
function funcLogin()
{
    var eMail=document.getElementById("emailLin").value;
    var passWord=document.getElementById("passLin").value;
    


    
    
    firebase.auth().signInWithEmailAndPassword(eMail, passWord).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
            window.alert(" Error : "+errorMessage);
  // ...
});
}

function funcUp(){
    




    var name=document.getElementById("nameSup").value;   
    var eMail=document.getElementById("emailSup").value;
    var passWord=document.getElementById("passSup").value;

            firebase.auth().createUserWithEmailAndPassword(eMail, passWord).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          window.alert("Error : - "+errorMessage);
          // ...
        });

    //var database = firebase.database();
    
    

    subscribe();

  var rootRef = firebase.database().ref();
  var storesRef = rootRef.child('users/');
  var newStoreRef = storesRef.push();
  newStoreRef.set({
    Name: name,
  });
}

function signOut()
{
        
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
    

                            $("#sec2").show();
    
                            $("#sec2").removeClass("col-md-0").addClass("col-md-3");
                            $("#sec1").removeClass("col-md-12").addClass("col-md-9");
    
}

    function subscribe(){
        firebase.auth().onAuthStateChanged(function(user){
            if(user)
        user.getIdToken().then(function(data)
                {
                    FIREBASE_DATABASE.ref('/token').push({
                        token: data,
                        uid: firebase.auth().currentUser.uid
                    });
                });
        
           
    });
    }
                               
    
    function sendNot()
    {
                
        

                 var orgzName=document.getElementById("orgName").value;
                var locInf=document.getElementById("autocomplete").value;
                 var contInf=document.getElementById("contact").value;

         var sendMsg=document.getElementById("description").value;

        
        FIREBASE_DATABASE.ref('/notification/').push({
            Orgz: orgzName,
            Contact: contInf, 
            Location: locInf,
            message: sendMsg
        });
}
    
}

        


