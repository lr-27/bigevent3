$(function () {
    // 切换登录和注册页面
    $('#login_form').on('click', function () {
        // console.log(123);
        $('#login_form').hide()
        $('#reg_form').show()

    })
    $('#reg_form').on('click', function () {
        $('#login_form').show()
        $('#reg_form').hide()
    })


})