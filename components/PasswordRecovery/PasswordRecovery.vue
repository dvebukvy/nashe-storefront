<template lang="pug">
.login
  .login__success(v-if="emailSend && !canChange")
    h2.login__title Сброс пароля
    p.login__text На вашу электронную почту отправлено письмо с инструкцией о дальнешних действиях по сбросу пароля
    .login__success-button
      Button(label='Перейти на главную страницу' class='outline' @click.native='getChange')
  .login__success(v-if="newPassword")
    h2.login__title Новый пароль
    p.login__text Поздравляем, вы успешно установили новый пароль
    .login__success-button
      Button(label='Перейти на главную страницу' class='outline' @click.native='linkTo("/")')
  
  .login__main(v-if="!emailSend")
    h2.login__title Сброс пароля
    .login__item
      p.login__text Электронная почта
      Input.background(type='email', v-model='form.email')       
    .login__actions
      Button(label='Сбросить пароль' @click.native='sendEmail')      
      .login__text 
        | Помните пароль? 
        nuxt-link.login__text.primary(to='/login') Войти
  .login__main(v-if="emailSend && canChange && !newPassword")
    h2.login__title Новый пароль
    .login__item
      p.login__text Пароль
      InputPassword.background(type='email', v-model='form.password')   
    .login__actions
      Button(label='Устновить пароль' @click.native='setPassword') 
</template>

<script>
export default {
  data() {
    return {
      emailSend: false,
      canChange: false,
      newPassword: false,
      form: {
        email: null,
        phone: null,
        password: null,
        check: null,
      },
    }
  },
  methods: {
    sendEmail() {
      this.emailSend = true;
    },
    getChange() {
      this.canChange = true;
    },
    linkTo(link) {
      this.$router.push(link)
    },
    setPassword() {
       this.newPassword = true;
    }

  }
}
</script>


<style lang="scss" src='../Login/login.scss'>
</style>