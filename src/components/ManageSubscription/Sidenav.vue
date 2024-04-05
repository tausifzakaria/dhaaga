<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer color="#331E6D" theme="dark" permanent>
                <img src="../../assets/logo.svg" class="img-fluid p-3 my-3 invisible" alt="">
                <v-list nav>
                    <v-list-item prepend-icon="fa-regular fa-rectangle-list" title="Business User"
                        @click="active_item = 'Business User'"
                        :class="active_item == 'Business User' ? 'v-list-item--active' : ''"
                        value="Business User"></v-list-item>

                    <v-list-item prepend-icon="fa-solid fa-shopping-cart" title="Promo Code"
                        @click="active_item = 'Promo Code'"
                        :class="active_item == 'Promo Code' ? 'v-list-item--active' : ''"
                        value="Promo Code"></v-list-item>

                    <v-list-item prepend-icon="fa-solid fa-user" title="Activity"
                        @click="active_item = 'Activity'; $router.push({ name: 'subscription' })"
                        :class="active_item == 'Activity' ? 'v-list-item--active' : ''" value="Activity"></v-list-item>

                    <v-list-item prepend-icon="fa-solid fa-chart-line" title="Summary" @click="active_item = 'Summary'"
                        :class="active_item == 'Summary' ? 'v-list-item--active' : ''" value="Summary"></v-list-item>

                    <v-list-item prepend-icon="fa-solid fa-credit-card" title="Payment Info"
                        @click="active_item = 'Payment Info'"
                        :class="active_item == 'Payment Info' ? 'v-list-item--active' : ''"
                        value="Payment Info"></v-list-item>

                    <v-list-item prepend-icon="fa-solid fa-clipboard" title="Manage Subscription"
                        @click="active_item = 'Manage Subscription'"
                        :class="active_item == 'Manage Subscription' ? 'v-list-item--active' : ''"
                        value="Manage Subscription"></v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>
<script setup>
import { ref } from 'vue';

let active_item = ref('Manage Subscription')
</script>