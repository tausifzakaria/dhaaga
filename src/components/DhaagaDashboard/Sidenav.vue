<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer color="#331E6D" theme="dark" permanent>
                <img src="../../assets/logo.svg" class="img-fluid p-3 my-5" alt="">
                <v-list nav>
                    <v-list-item prepend-icon="fa-regular fa-rectangle-list" title="Dashboard"
                        @click="active_item = 'Dashboard'"
                        :class="active_item == 'Dashboard' ? 'v-list-item--active' : ''"
                        value="dashboard"></v-list-item>
                    <v-list-item prepend-icon="fa-solid fa-shopping-cart" title="Supervisors"
                        @click="active_item = 'supervisors'"
                        :class="active_item == 'supervisors' ? 'v-list-item--active' : ''"
                        value="supervisors"></v-list-item>
                    <v-list-item prepend-icon="fa-solid fa-file-invoice-dollar" title="Subscriptions"
                        @click="active_item = 'subscriptions'"
                        :class="active_item == 'subscriptions' ? 'v-list-item--active' : ''"
                        value="subscriptions"></v-list-item>
                    <v-list-item prepend-icon="fa-solid fa-dollar" title="Payments" @click="active_item = 'payments'"
                        :class="active_item == 'payments' ? 'v-list-item--active' : ''" value="payments"></v-list-item>
                    <v-list-item prepend-icon="fa-solid fa-shopping-bag" title="Deals on Dhaaga"
                        @click="active_item = 'dealsondhaaga'"
                        :class="active_item == 'dealsondhaaga' ? 'v-list-item--active' : ''"
                        value="dealsondhaaga"></v-list-item>
                    <v-list-item prepend-icon="fa-solid fa-message" title="Respond to Reviews"
                        @click="active_item = 'respondtoreviews'"
                        :class="active_item == 'respondtoreviews' ? 'v-list-item--active' : ''"
                        value="respondtoreviews"></v-list-item>
                    <v-list-item prepend-icon="fa-solid fa-clipboard" title="Message" @click="active_item = 'message'"
                        :class="active_item == 'message' ? 'v-list-item--active' : ''" value="message"></v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>
<script setup>
import { ref } from 'vue';

let active_item = ref('Dashboard')
</script>