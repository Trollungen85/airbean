<template>
    <section class="profile-user-comp-wrapper">
        <div>
            <img src="../assets/profile.svg" class="profile-img">
            <h3>{{ user.name }}</h3>
            <p>{{ user.email }}</p>
        </div>

        <div>
            <h4>Orderhistorik</h4>
            <ul>
                <li v-for="order in orders" v-bind:key="order.orderNumbers">
                    <div>#{{ order.orderNumber }} {{ order.date }}</div>
                    <div>total ordersumma: {{ order.totalSum }} kr</div> 
                </li>
            </ul>
            <p>Totalt spenderat {{ orderTotalSum }} kr</p>
        </div>

    </section>
</template>

<script>
export default {
    computed: {
        user: function() {
            return this.$store.state.user;
        },
        orders: function() {
            return this.$store.state.orders;
        },
        orderTotalSum: function() {
            let orders = this.$store.state.orders;
            let sum = 0;
            for (let i = 0; i < orders.length; i++) {
            sum += orders[i].totalSum;
      }
      return sum;
    }
    }
}
</script>

<style>
.profile-user-comp-wrapper {

}
.profile-img {
    width: 100px;
    background: var(--color1);
}

</style>