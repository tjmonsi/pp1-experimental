//////////////////////////////////
// AccountsTemplates configuration
//////////////////////////////////

if (AccountsTemplates) {
  //Fields
  AccountsTemplates.addField({
      _id: 'username',
      type: 'text',
      displayName: 'username',
      required: true,
      minLength: 3,
      errStr: 'error.minChar'
  });
  
  AccountsTemplates.removeField('email');
  AccountsTemplates.addField({
      _id: 'email',
      type: 'email',
      required: true,
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'error.accounts.Invalid email',
  });
  
  AccountsTemplates.removeField('password');
  AccountsTemplates.addField({
      _id: 'password',
      type: 'password',
      required: true,
      minLength: 8,
      errStr: 'error.minChar'
  });
  
  AccountsTemplates.addField({
      _id: 'username_and_email',
      type: 'text',
      required: true,
      displayName: "Username or Email",
      placeholder: "Username or Email",
  });
  
//   // Options
// AccountsTemplates.configure({
//     enablePasswordChange: true,
//     showForgotPasswordLink: true,
//     confirmPassword: false,
//     overrideLoginErrors: true,
//     lowercaseUsername: true,

//     negativeFeedback: false,
//     positiveFeedback: false,
//     negativeValidation: true,
//     positiveValidation: true
// });

  AccountsTemplates.configure({
    confirmPassword: true,
    defaultState: "signIn",
    enablePasswordChange: true,
    sendVerificationEmail: true,
    redirectTimeout: 1000,
    
    showForgotPasswordLink: true,
    
    homeRoutePath: "/",
    
    defaultLayout: "MainLayout",
    defaultContentRegion: "content",
    onSubmitHook: function(error, state) {
      if (error) {
        console.log(error)
        Materialize.toast(error, 4000)
      }
      else if (state=="signIn") {
        Materialize.toast("Login Successful", 4000)
      }
      else if (state=="signUp") {
        Materialize.toast("Registration Successful", 4000)
      }
    }
  })
  
  if (Meteor.isClient) {
    Session.setDefault("redirect", "/")
    
    AccountsTemplates.configureRoute("signIn", {
      contentRegion: "content",
      layout: "MasterLayout",
      name: "Login",
      path: "/login",
      redirect: Session.get("redirect") 
    })
    
    AccountsTemplates.configureRoute("signUp", {
      name: "signUp",
      path: "/register",
      redirect: Session.get("redirect")
    })
    
    AccountsTemplates.configureRoute("changePwd", {
      name: "changePwd",
      path: "/change-password",
      redirect: Session.get("redirect") 
    })
  }
}