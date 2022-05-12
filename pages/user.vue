<template lang="pug">
.page__content
  .container
    Breadcrumbs(:data='breadcrumbs')
    Headline(title='Личный кабинет')
    .content
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
</template>

<script>
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
      showDetails: false,
      orderDetail: null,
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
  },
  methods: {
    openDetails(order) {
      this.orderDetail = order
      this.showDetails = true
    },
    backToList() {
      this.showDetails = false
    },
  },
}
</script>

<style lang="scss">
.content {
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
      width: 312px;
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
  }
}
</style>