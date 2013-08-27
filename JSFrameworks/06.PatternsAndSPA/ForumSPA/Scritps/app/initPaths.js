﻿/// <reference path="../libs/jquery-2.0.3.js" />
/// <reference path="../libs/mustache.js" />
/// <reference path="../libs/sammy-0.7.4.js" />
/// <reference path="../libs/sha1.js" />
/// <reference path="../libs/class.js" />
/// <reference path="../libs/http-requester.js" />


(function () {

    function goHome() {
        $("#wrapper").append("home <br/>   ");
    };
   
    var app = Sammy("#wrapper", function () {
        
        this.get("#/", goHome);

        this.get("#/home", function () {
            this.redirect("#/");
        });
        

        this.get("#/posts", function () {
            $("#wrapper").append("posts <br/>   ");
        });

        this.get("#/posts/tags=:tags", function () {
            $("#wrapper").append("posts with tags <br/>   ");

        });

        this.get("#/posts/:id", function () {
            $("#wrapper").append("posts by id <br/>   ");

        });

        this.get("#/posts/:id", function () {
            $("#wrapper").append("posts by id <br/>   ");
        });

        this.get("#/posts/:id/comment", function (data) {

            $("#wrapper").append("post a comment<br/>   ");
        });

    });

    app.run("#/");

}());