<template lang="pug">
.popup
  .popup__top
    h2.popup__title Изменение пароля
    .popup__close-button(@click='$emit("close")')
      svg-icon.popup__close(name='close-16')
  .popup__content
    .label.mb-8 Текущий пароль
    InputPassword.input-bg-gray-10.mb-24
    .label.mb-8 Новый пароль
    InputPassword.input-bg-gray-10
  .popup__footer
    Button(label='Изменить')
</template>