;(function() {
  // partner script
  const displayUser = () => {
    const user = window.sso.getCurrentUser();
    if (user) {
      console.log('yes im logged in')
      $('#login-btn').removeClass('show').addClass('hide');
      $('#register-btn').removeClass('show').addClass('hide');
      $('#user-detail').removeClass('hide').addClass('show');
      $('#user-greeting').html('Welcome User')
    } else {
      $('#login-btn').removeClass('hide').addClass('show');
      $('#register-btn').removeClass('hide').addClass('show');
      $('#user-detail').removeClass('show').addClass('hide');
    }
  }
  window.addEventListener("authStatusChange", () => {
    console.log('event listen')
    displayUser();
  })
})();