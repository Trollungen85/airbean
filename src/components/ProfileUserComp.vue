<template>
    <section>
        <div>
            <img src="../assets/profile.svg" class="profile-img">
            <h3>{{ user.name }}</h3>
            <p>{{ user.email }}</p>
        </div>

        <div>
            <h4>Orderhistorik</h4>
            <ul>
                <li>
                    <!-- alla gamla beställningar -->
                </li>
            </ul>
            <p>Totalt spenderat</p>
        </div>

    </section>
</template>

<script>
export default {
    computed: {
        user: function() {
            return this.$store.state.user;
        }
    }
}
</script>

<style>

.profile-img {
    width: 100px;
    background: var(--color1);
}

</style>