'use strict';

var login = document.getElementById('login');
var email = document.getElementById('email1');
var tell = document.getElementById('tell');
var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
var submit = document.getElementById('submit');

var password2Span = document.createElement('span');
var password1Span = document.createElement('span');
var loginSpan = document.createElement('span');
var emailSpan = document.createElement('span');
var tellSpan = document.createElement('span');

var success = {};

window.onload = function () {
    document.getElementById('submit').disabled = true;
    document.getElementById('password2').disabled = true;
};

login.addEventListener('change', function () {
    var parent = login.parentNode;
    parent.appendChild(loginSpan);
    var loginValue = login.value;
    if (/^[a-z0-9_-]{3,15}$/.test(loginValue)) {
        if (parent.classList.contains('has-error')) {
            parent.classList.remove('has-error');
        }
        parent.classList.add('has-success');
        loginSpan.className = 'glyphicon glyphicon-ok form-control-feedback';
        success.login = true;
    } else {
        if (parent.classList.contains('has-success')) {
            parent.classList.remove('has-success');
        }
        parent.classList.add('has-error');
        loginSpan.className = 'glyphicon glyphicon-remove form-control-feedback';
        success.login = false;
    }
});

email.addEventListener('change', function () {
    var parent = email.parentNode;
    parent.appendChild(emailSpan);
    var emailValue = email.value;
    if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(emailValue)) {
        if (parent.classList.contains('has-error')) {
            parent.classList.remove('has-error');
        }
        parent.classList.add('has-success');
        emailSpan.className = 'glyphicon glyphicon-ok form-control-feedback';
        success.email = true;
    } else {
        if (parent.classList.contains('has-success')) {
            parent.classList.remove('has-success');
        }
        parent.classList.add('has-error');
        emailSpan.className = 'glyphicon glyphicon-remove form-control-feedback';
        success.email = false;
    }
});

tell.addEventListener('change', function () {
    var parent = tell.parentNode;
    parent.appendChild(tellSpan);
    var emailValue = tell.value;
    if (/^\d{3}-\d{2}-\d{2}$/.test(emailValue) || /^\d{7}$/.test(emailValue)) {
        if (parent.classList.contains('has-error')) {
            parent.classList.remove('has-error');
        }
        parent.classList.add('has-success');
        tellSpan.className = 'glyphicon glyphicon-ok form-control-feedback';
        success.tell = true;
    } else {
        if (parent.classList.contains('has-success')) {
            parent.classList.remove('has-success');
        }
        parent.classList.add('has-error');
        tellSpan.className = 'glyphicon glyphicon-remove form-control-feedback';
        success.tell = false;
    }
});

password1.addEventListener('change', function () {
    var parent = password1.parentNode;
    parent.appendChild(password1Span);
    var password1Value = password1.value;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})");
    if (strongRegex.test(password1Value)) {
        if (parent.classList.contains('has-error')) {
            parent.classList.remove('has-error');
        }
        parent.classList.add('has-success');
        password1Span.className = 'glyphicon glyphicon-ok form-control-feedback';
        success.value = password1.value;
        document.getElementById('password2').disabled = false;
    } else {
        if (parent.classList.contains('has-success')) {
            parent.classList.remove('has-success');
        }
        parent.classList.add('has-error');
        password1Span.className = 'glyphicon glyphicon-remove form-control-feedback';
        document.getElementById('password2').disabled = true;
    }
});

password2.addEventListener('change', function () {
    var parent = password2.parentNode;
    parent.appendChild(password2Span);
    var password2Value = password2.value;
    if (success.value == password2.value) {
        if (parent.classList.contains('has-error')) {
            parent.classList.remove('has-error');
        }
        parent.classList.add('has-success');
        password2Span.className = 'glyphicon glyphicon-ok form-control-feedback';
        success.password = true;
    } else {
        if (parent.classList.contains('has-success')) {
            parent.classList.remove('has-success');
        }
        parent.classList.add('has-error');
        password2Span.className = 'glyphicon glyphicon-remove form-control-feedback';
        success.password = false;
    }
});

setInterval(function () {
    if (success.password && success.email && success.tell && success.login) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}, 1000);

//# sourceMappingURL=registration-compiled.js.map