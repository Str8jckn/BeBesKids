$(function(){
    'use strict';
    console.log('Services');
    $('#services2').hide();
    $('#services3').hide();
    $('#services4').hide();

    $('#s1').on('click', function(){
        $('#services1').show();
        $('#services2').hide();
        $('#services3').hide(); 
        $('#services4').hide();
    });

    $('#s2').on('click', function(){
        $('#services2').show();
        $('#services1').hide();
        $('#services3').hide(); 
        $('#services4').hide();
    });

    $('#s3').on('click', function(){
        $('#services3').show();
        $('#services1').hide();
        $('#services2').hide(); 
        $('#services4').hide();
    });

    $('#s4').on('click', function(){
        $('#services4').show();
        $('#services1').hide();
        $('#services2').hide(); 
        $('#services3').hide();
    });
});