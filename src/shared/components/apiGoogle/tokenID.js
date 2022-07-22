function onSuccess(googleUser) {
    // Recuperando o token do usuario.
    var id_token = googleUser.getAuthResponse().id_token;

    // post com jQuery para enviar o token to usuário para o servidor
    $.post( "http://www.seuservidor.com.br/token",
      function(id_token) {
        console.log('sucesso')
      });
}