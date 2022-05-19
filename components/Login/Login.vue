<template lang="pug">
.login
  .login__main(v-if='!success')
    h2.login__title.heading-1 Вход
    .login__item
      p.login__text Электронная почта
      Input.background(type='email', v-model='form.email') 
    .login__item
      p.login__text Пароль
      InputPassword.background(type='email', v-model='form.password') 
    .login__actions
      Button(label='Войти', @click.native='login')
      .login__text 
        nuxt-link.login__text.primary(to='/password-recovery') Забыли пароль?
      .login__text 
        | Нет аккаунта?
        nuxt-link.login__text.primary(to='/registration') &nbsp; Зарегистрироваться
</template>

<script>
export default {
  data() {
    return {
      success: false,
      trueSucccess: false,
      form: {
        email: null,
        phone: null,
        password: null,
        check: null,
      },
    }
  },
  methods: {
    login() {
      this.success = true
    },
    getSuccess() {
      this.trueSucccess = true
    },
    linkTo(link) {
      this.$router.push(link)
    },
  },
}
</script>


<style lang="scss" src='./login.scss'>
</style>