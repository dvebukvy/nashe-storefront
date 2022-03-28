<template lang="pug">
.modal
  .modal__top
    h2.modal__title Таблица размеров женской одежды
    .modal__close-button(@click='$emit("close")')
      svg-icon.modal__close(name='close-16')
  .modal__content
    .modal__table
      table
        thead
          tr
            th RU
            th INT
            th Рост
            th Обхват груди
            th Обхват талии
            th Обхват бедер
        tbody
          tr
            td 42            
            td XS
            td 170
            td 84
            td 64
            td 92
          tr
            td 44
            td S
            td 170
            td 88
            td 68
            td 96
          tr
            td 46
            td M
            td 170
            td 92
            td 72
            td 100
          tr
            td 48
            td L
            td 170
            td 96
            td 76
            td 104

          tr
            td 50
            td XL
            td 170
            td 100
            td 80
            td 108
          tr
            td 52
            td XXL
            td 170
            td 104
            td 84
            td 112
          tr
            td 54
            td 3XL
            td 170
            td 108
            td 88
            td 116
          tr
            td 56
            td 4XL
            td 170
            td 112
            td 92
            td 120
          tr
            td 58
            td 5XL
            td 170
            td 116
            td 96
            td 124
          tr
            td 60
            td 5XL
            td 170
            td 120
            td 100
            td 128    
    p.modal__text.grey Все размеры указаны в сантиметрах
    
</template>



<style lang="scss" src='../Modal/modal.scss'>
</style>