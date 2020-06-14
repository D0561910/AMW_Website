function singUpWithEmail() {

    // checking password
    var pass1 = $('#user-password').val();
    var pass2 = $('#retype-password').val();
    if (pass1 !== pass2) {
        alert("Password Not Match");
        return
    }

    var emails = $('#user-email').val();
    var passwords = $('#user-password').val();
    firebase.auth().createUserWithEmailAndPassword(emails, passwords).then(function (user) {
        let userId = user.user
        $.ajax({
            url: '/register',
            type: 'POST',
            data: {
                uid: userId.uid,
                name: $('#user-name').val(),
                email: $('#user-email').val(),
                password: $('#user-password').val()
            },
            success: function (data) {
                if (data.ret_code === 0) {
                    alert(data.ret_msg);
                    location.replace('/');
                }
                else {
                    alert(data.ret_msg);
                    location.reload();
                }
            }
        });
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}

function signInWithEmail() {
    var emails = $('#user-names').val();
    var passwords = $('#user-passwords').val();
    firebase.auth().signInWithEmailAndPassword(emails, passwords).then(function (user) {
        // console.log({ user });

        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
            // Send token to your backend via HTTPS
            $.ajax({
                url: '/login',
                type: 'POST',
                data: {
                    ids: idToken
                },
                success: function (data) {
                    location.reload();
                }
            });
        }).catch(function (error) {
            // Handle error
            console.log(error);
        });

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });

}

function signInWithGoogle() {
    // Using a popup.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
            // Send token to your backend via HTTPS
            $.ajax({
                url: '/logins',
                type: 'POST',
                data: {
                    ids: idToken
                },
                success: function (data) {
                    location.reload();
                }
            });
        }).catch(function (error) {
            // Handle error
            console.log(error);
        });
    });
}

function signInWithFacebook() {
    // Sign in using a popup.
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    // provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // console.log(result); //This is Object
        // This gives you a Facebook Access Token.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
            // Send token to your backend via HTTPS
            $.ajax({
                url: '/logins',
                type: 'POST',
                data: {
                    ids: idToken
                },
                success: function (data) {
                    location.reload();
                }
            });
            console.log("idtoken: ", idToken);
        }).catch(function (error) {
            // Handle error
            console.log(error);
        });
    });
}

$('#').click(function () {
    // btn_signup
    var pass1 = $('#user-password').val();
    var pass2 = $('#retype-password').val();

    if (pass1 !== pass2) {
        alert("Password Not Match");
    } else {
        $.ajax({
            url: '/register',
            type: 'POST',
            data: {
                name: $('#user-name').val(),
                email: $('#user-email').val(),
                password: $('#user-password').val()
            },
            success: function (data) {
                if (data.ret_code === 0) {
                    alert(data.ret_msg);
                    location.replace('/');
                }
                else {
                    alert(data.ret_msg);
                    location.reload();
                }
            }
        });
    }
});

$('#btn_signin').click(function () {
    $.ajax({
        url: '/login',
        type: 'POST',
        data: {
            name: $('#user-names').val(),
            password: $('#user-passwords').val()
        },
        success: function (data) {
            if (data.ret_code === 0) {
                location.reload();
            }
            else {
                alert(data.ret_msg);
            }
        }
    });
});