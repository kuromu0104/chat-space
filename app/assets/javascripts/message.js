$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="chat">
          <div class="chat__info">
            <div class="messages__list__name">
              ${message.user_name}
            </div>
            <div class="messages__list__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__box">
            <p class="message__box__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="chat">
        <div class="chat__info">
          <div class="messages__list__name">
            ${message.user_name}
          </div>
          <div class="messages__list__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message__box">
          <p class="message__box__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.forms').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
      $('.form-submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});