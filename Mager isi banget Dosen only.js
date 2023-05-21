// ==UserScript==
// @name         Mager isi banget Dosen only
// @namespace    http://tampermonkey.net/
// @version       Alphaedition
// @description  Auto isi survey dan tekan tombol simpan secara otomatis, dan klik gambar dengan title "start" yang memiliki href yang ada kode tertentu dalam link href nya
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
    var ibdCodes = ['IBD', 'IBR', 'ERW', 'YGO', 'VMD', 'RSC']; 

    $('.answerlist1:contains('+multi+'), .answerlist1:contains('+option+')').each(function(){
        $(this).parent().each(function(){
            $(this).find('.answerlist2').children().click()
        })
    });

    // Mengisi semua elemen <textarea> dengan tanda "-"
    $('textarea').val(inputText);

    // Menekan tombol "Simpan" secara otomatis
    $('input[name="button"]').click();


    // Click on image with title "start" only if it has a href link containing any of the codes in the ibdCodes list
    $('img[title="start"]').each(function() {
        var href = $(this).parent().attr('href');
        if (ibdCodes.some(code => href.includes(code))) {
            $(this).click();
        }
    });
})();
