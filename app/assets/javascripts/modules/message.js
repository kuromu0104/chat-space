$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="messages" data-message-id=${message.id}>
          <div class="message">
            <div class="message__list">
            <div class="message__list__name">
              ${message.user_name}
            </div>
            <div class="message__list__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__box">
            <p class="message__box__content">
              ${message.content}
            </p>
            <img class="message_image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="messages" data-message-id=${message.id}>
        <div class="message">
          <div class="message__list__name">
            ${message.user_name}
          </div>
          <div class="message__list__date">
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
    e.preventDefault();
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
      $('forms')[0].reset();
      $('messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.form-submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.form-submit').prop("disabled", false);
    });
  });
});