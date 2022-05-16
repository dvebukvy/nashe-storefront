<template lang="pug">
.page__content
  .container
    Breadcrumbs(:data='breadcrumbs')
    Headline.head-mobile(title='Личный кабинет')
    .user-content
      .left
        .menu
          .menu__item.body-2-m(
            @click='menuSelected = "orders"',
            :class='{ active: menuSelected === "orders" }'
          ) Мои заказы
          .menu__item.body-2-m(
            @click='menuSelected = "personal"',
            :class='{ active: menuSelected === "personal" }'
          ) Личные данные
          .menu__item.exit.body-2-m Выход
      .right
        .tab(v-if='menuSelected === "orders"')
          .orders(v-if='!showDetails')
            .heading-2.mb-24 Мои заказы
            .orders__cards(v-if='orders && orders.length')
              OrderCard(
                v-for='order in orders',
                :key='order.id',
                :data='order',
                @click.native='openDetails(order)'
              )
            .orders__no-result(v-else)
              svg-icon.orders__no-result-icon(name='delivery')
              .body-1-r Вы ещё не сделали ни одного заказа
            Pagination
          .orders(v-if='showDetails')
            OrderView(:data='orderDetail', :back='backToList')
        .tab(v-if='menuSelected === "personal"')
          .personal
            .heading-2.mb-24 Личные данные
            .personal__card(v-if='personal && personal.length')
              .personal__card-item
                .label Фамилия
                Input.input(
                  v-model='personal[0].lastName',
                  :data='personal[0].lastName'
                )
              .personal__card-item
                .label Имя
                Input.input(
                  v-model='personal[0].firstName',
                  :data='personal[0].firstName'
                )
              .personal__card-item
                .label Отчество
                Input.input(
                  v-model='personal[0].middleName',
                  :data='personal[0].middleName'
                )
              .personal__card-item
                .label Телефон
                Input.input(
                  v-model='personal[0].phoneNumber',
                  :data='personal[0].phoneNumber'
                )
              .personal__card-item
                .label Город
                Input.input(
                  v-model='personal[0].city',
                  :data='personal[0].city'
                )
              .personal__card-item
                .label Электронная почта
                span.email {{ personal[0].email }}
              .personal__card-item
                .label Пароль
                .password
                  span.password-stars **************
                  span.reset-password.text-color-primary(
                    @click='openPopupResetPassword'
                  ) Изменить
</template>

<script>
import PopupResetPassword from '@/components/Popup/PopupResetPassword'
export default {
  data() {
    return {
      menuSelected: 'orders',
      orders: [
        {
          id: 0,
          number: 'Заказ 23123',
          date: '01.01.2022',
          status: 'Размещен',
          price: '7 650 руб.',
          deliveryType: 'Самовывоз из магазина',
          address: 'Смоленск, ул. Соболева, д. 25',
          payType: 'Оплата онлайн',
          payStatus: false,
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-1.jpg',
            '/img/product-card-1.jpg',
            '/img/product-card-1.jpg',
          ],
        },
        {
          id: 1,
          number: 'Заказ 23123',
          date: '01.01.2022',
          status: 'Размещен',
          price: '7 650 руб.',
          deliveryType: 'Самовывоз из магазина',
          address: 'Смоленск, ул. Соболева, д. 25',
          payType: 'Оплата онлайн',
          payStatus: true,
          images: ['/img/product-card-1.jpg', '/img/product-card-1.jpg'],
        },
        {
          id: 2,
          number: 'Заказ 23123',
          date: '01.01.2022',
          status: 'Размещен',
          price: '7 650 руб.',
          deliveryType: 'Самовывоз из магазина',
          address: 'Смоленск, ул. Соболева, д. 25',
          payType: 'Оплата онлайн',
          payStatus: false,
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-1.jpg',
            '/img/product-card-1.jpg',
          ],
        },
        {
          id: 3,
          number: 'Заказ 23123',
          date: '01.01.2022',
          status: 'Размещен',
          price: '7 650 руб.',
          deliveryType: 'Самовывоз из магазина',
          address: 'Смоленск, ул. Соболева, д. 25',
          payType: 'Оплата онлайн',
          payStatus: false,
          images: [
            '/img/product-card-1.jpg',
            '/img/product-card-1.jpg',
            '/img/product-card-1.jpg',
            '/img/product-card-1.jpg',
            '/img/product-card-1.jpg',
          ],
        },
      ],
      personal: [
        {
          firstName: 'Иван',
          lastName: 'Иванов',
          middleName: 'Иванович',
          phoneNumber: '+7 999 999-99-99',
          city: 'Смоленск',
          email: 'example@gmail.ru',
          password: '**************',
        },
      ],
      showDetails: false,
      orderDetail: null,
      position: this.modalPosition,
    }
  },
  computed: {
    breadcrumbs() {
      let breadcrumbs = [
        {
          title: 'Личный кабинет',
        },
      ]

      return breadcrumbs
    },
    modalPosition() {
      if (process.browser) {
        if (window.screen.width <= 768) {
          return (this.position = -50)
        } else {
          return (this.position = 0)
        }
      }
    },
  },
  methods: {
    openDetails(order) {
      this.orderDetail = order
      this.showDetails = true
    },
    backToList() {
      this.showDetails = false
    },
    openPopupResetPassword() {
      this.$modal.show(
        PopupResetPassword,
        {},
        {
          width: '480',
          scrollable: true,
          shiftY: 0,
          overlayTransition: 'popup',
        }
      )
    },
  },
}
</script>

<style lang="scss">
.user-content {
  display: flex;
  .left {
    min-width: 312px;
    margin-right: 24px;
    .menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 16px 0px;
      position: absolute;
      min-width: 312px;
      height: 176px;
      background-color: #faf6f2;
      border-radius: 12px;
      &__item {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 14px 24px;
        color: #662e2c;
        width: 100%;
        cursor: pointer;
        &.active {
          color: #cf643f;
          box-shadow: inset 4px 0px 0px #cf643f;
        }
        &:hover {
          color: #cf643f;
        }
        &.exit {
          color: #d60700;
        }
      }

      @media (max-width: $l) {
        min-width: 274px;
      }

      @media (max-width: $m) {
        min-width: 299px;
      }
    }

    @media (max-width: $l) {
      min-width: 274px;
    }

    @media (max-width: $m) {
      min-width: 299px;
    }

    @media (max-width: $s) {
      display: none;
    }

    @media (max-width: $xs) {
      display: none;
    }
  }
  .right {
    width: 100%;
    .orders {
      &__no-result {
        margin-top: 64px;
        text-align: center;
        &-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 16px;
        }
      }
    }
    .personal {
      &__card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px 24px 32px;
        background: #faf6f2;
        border-radius: 12px;

        &-item {
          display: flex;
          align-items: center;
          margin-bottom: 24px;

          &:last-child {
            margin-bottom: 0;
          }
          .label {
            min-width: 192px;
            margin-right: 24px;

            @media (max-width: $xs) {
              margin-bottom: 8px;
            }
          }
          .input {
            width: 320px;

            @media (max-width: $s) {
              width: 100%;
            }
            @media (max-width: $xs) {
              width: 100%;
            }
          }
          .email {
            width: 320px;
            padding: 10px 0;

            @media (max-width: $xs) {
              width: 100%;
              margin-top: 8px;
            }
          }
          .password {
            width: 320px;
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            .reset-password {
              cursor: pointer;
            }

            @media (max-width: $s) {
              width: 100%;
            }

            @media (max-width: $xs) {
              width: 100%;
              margin-top: 8px;
            }
          }

          @media (max-width: $s) {
            width: 100%;
          }

          @media (max-width: $xs) {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
          }
        }
      }
    }
  }
}
.head-mobile {
  @media (max-width: $s) {
    display: none;
  }

  @media (max-width: $xs) {
    display: none;
  }
}
</style>