const firebaseConfig = {
  apiKey: "AIzaSyCZy2xk3MmoxnKMge1uuCMzgwL9oK2ZE_M",
  authDomain: "sensores-remotos.firebaseapp.com",
  projectId: "sensores-remotos",
  storageBucket: "sensores-remotos.appspot.com",
  messagingSenderId: "164081130978",
  appId: "1:164081130978:web:f16fd75ed457c1aa88adbb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
var storage = firebase.storage();
var storageRef = storage.ref();

var uid;
var uname;
var univel;

// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: 'index.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>');
    }
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

  initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        uname = user.displayName;
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {

          var jsonProfile = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }, null, '  ');
          database.ref().child("users/user_"+uid).get().then((snapshot) => {
            if (!snapshot.exists()) {
              database.ref('users/user_' + uid).set({
                name : displayName,
                email : email,
                photo : photoURL,
                uid : uid,
                nivel : 1
              });
            } else{
              univel = snapshot.val()['nivel'];
              $("#nivel-perfil").html('Nivel: '+ univel);
            }
          }).catch((error) => {
            console.error(error);
          });

          

          $("#firebaseui-auth-container").addClass("d-none");
          $("#cancel").addClass("d-none");
          $("#modal-perfil-container").removeClass("d-none");
          $("#loginModalLabel").text("Bienvenido");
          $("#user-photo").attr("src", photoURL);
          $("#foto-perfil").attr("src", photoURL);
          $("#nombre-perfil").html(displayName);
          $("#correo-perfil").html(email);
          $("#semestre-perfil").html("Sensores Remotos 2023-2");
          

        });
      } else {
        $("#firebaseui-auth-container").removeClass("d-none");
        $("#cancel").removeClass("d-none");
        $("#modal-perfil-container").addClass("d-none");
        $("#logout").addClass("d-none");
      }
    }, function(error) {
      console.log(error);
    });
  };

  window.addEventListener('load', function() {
    initApp()
  });

  $("#logout").click(function (e) { 
    firebase.auth().signOut();
    location.reload();
  });