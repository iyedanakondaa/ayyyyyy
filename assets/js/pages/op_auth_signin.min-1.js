/*!
 * oneui - v5.5.0
 * @author pixelcave - https://pixelcave.com
 * Copyright (c) 2022
 */
One.onLoad((()=>class{static initValidation(){One.helpers("jq-validation"),jQuery(".js-validation-signin").validate({rules:{"login-username":{required:!0,minlength:3},"login-password":{required:!0,minlength:5}},messages:{"login-username":{required:"Please enter a username",minlength:"Your username must consist of at least 3 characters"},"login-password":{required:"Please provide a password",minlength:"Your password must be at least 5 characters long"}}})}static init(){this.initValidation()}}.init()));