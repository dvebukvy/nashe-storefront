<template lang="pug">
.registration
  .registration__success(v-if="success && !trueSucccess")
    h2.registration__title Регистрация
    p.registration__text Для активации аккаунта перейдите по ссылке из письма, которое отправлено на указанную электронную почту
    .registration__success-button
      Button(label='Перейти на главную страницу' class='outline' @click.native='getSuccess')
  .registration__success(v-if="trueSucccess")
    h2.registration__title Успешная регистрация
    p.registration__text Поздравляем, вы успешно подтвердили свой аккаунт
    .registration__success-button
      Button(label='Перейти на главную страницу' class='outline' @click.native='linkTo("/")')
  .registration__main(v-if="!success")
    h2.registration__title Регистрация
    .registration__item
      p.registration__text Электронная почта
      Input.background(type='email', v-model='form.email')
    .registration__item
      p.registration__text Телефон
      InputPhone.background(v-model='form.phone')
    .registration__item
      p.registration__text Пароль
      InputPassword.background(type='email', v-model='form.password')
    .registration__item
      .registration__checkbox
        Checkbox(v-model='form.check')
        p.registration__text Я согласен на получение информационных писем о новинках и акциях
    .registration__actions
      Button(label='Зарегистрироваться' @click.native='registration')
      .registration__text 
        | Уже есть аккаунт? 
        nuxt-link.registration__text.primary(to='/login') Войти
    .registration__bottom
      .registration__text.grey
        | Нажимая на кнопку «Зарегистрироваться» вы соглашаетесь с условиями 
        nuxt-link.registration__text.primary.grey(to='#') обработки персональных данных
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
    registration() {
      this.success = true;
    },
    getSuccess() {
      this.trueSucccess = true;
    },
    linkTo(link) {
      this.$router.push(link)
    }

  }
}
</script>


<style lang="scss" src='./registration.scss'>
</style>