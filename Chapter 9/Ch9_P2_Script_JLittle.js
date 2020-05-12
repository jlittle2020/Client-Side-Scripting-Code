/*
   Hands-on Project 9-2
   Author: Jonathon Little
   Date: 12/5/2019
   File: Ch9_P2_JLittle_Script.js
*/
"use strict";
function processCookie() {
   document.cookie = "username=" + document.getElementById("usernameinput").value;
}
function populateInfo() {
   if (document.cookie) {
      var uname = document.cookie;
      uname = uname.substring(uname.lastIndexOf("=") + 1);
      document.getElementById("usernameinput").value = uname;
   }
}
function handleSubmit(evt) {
   if (evt.preventDefault) {
      evt.preventDefault();
   } else {
      evt.returnValue = false;
   }
   processCookie();
   document.getElementsByTagName("form")[0].submit();
}
function createEventListener() {
   var loginForm = document.getElementsByTagName("form")[0];
   if (loginForm.addEventListener) {
      loginForm.addEventListener("submit", handleSubmit, false);
   } else if (loginForm.attachEvent) {
      loginForm.attachEvent("onsubmit", handleSubmit);
   }
}
function setUpPage() {
   populateInfo();
   createEventListener();
}
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}