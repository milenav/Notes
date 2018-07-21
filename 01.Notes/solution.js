function addSticker() {
    let titleInput = $('input[class="title"]');
    let contentInput = $('input[class="content"]');
    let titleInputVal = titleInput.val();
    let contentInputVal = contentInput.val();
    if(titleInputVal === '' || contentInputVal === ''){
        return;
    }

    let li = $('<li>');
    li
        .addClass('note-content')
        .appendTo('#sticker-list');

    let a = $('<a>');
    a
        .addClass('button')
        .appendTo(li).text('x').click(() => {
            $('.stickerBoard').remove()
    });

    let h2 = $('<h2>').appendTo(li).text(titleInputVal);
    let hr = $('<hr>').appendTo(li);
    let paragraph = $('<p>').appendTo(li).text(contentInputVal);

    titleInput.val('');
    contentInput.val('')

};