<template lang="pug">
.modal
  .modal__top
    h2.modal__title Изменение пароля
    .modal__close-button(@click='$emit("close")')
      svg-icon.modal__close(name='close-16')
  .modal__content
    .label.mb-8 Текущий пароль
    InputPassword.input-bg-gray-10.mb-24
    .label.mb-8 Новый пароль
    InputPassword.input-bg-gray-10
  .modal__footer
    Button(label='Изменить')
</template>