// ==UserScript==
// @name         Mager isi banget dont care edition
// @namespace    http://tampermonkey.net/
// @version       Alphaedition
// @description  Auto isi survey dan tekan tombol simpan secara otomatis, dan klik semua gambar dengan name "start"
// @author       hehe.
// @match        https://igracias.telkomuniversity.ac.id/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    var multi = 'Puas';
    var option = 'Ya';
    var inputText = '-';

    $('.answerlist1:contains('+multi+'), .answerlist1:contains('+option+')').each(function(){
        $(this).parent().each(function(){
            $(this).find('.answerlist2').children().click()
        })
    });

    // Mengisi semua elemen <textarea> dengan tanda "-"
    $('textarea').val(inputText);

    // Menekan tombol "Simpan" secara otomatis
    $('input[name="button"]').click();

    // Click on all images with the name "start"
    $('img[title="start"]').each(function() {
        $(this).click();
    });

    // Click on all images with the name "CONTINUE"
    $('img[title="continue"]').each(function() {
        $(this).click();
    });
})();