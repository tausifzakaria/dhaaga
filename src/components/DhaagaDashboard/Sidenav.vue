<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer color="#331E6D" theme="dark" permanent>
                <img src="../../assets/logo.svg" class="img-fluid p-3 my-5" alt="">
                <v-list nav>
                    <v-list-item prepend-icon="mdi mdi-view-dashboard-outline" title="Dashboard"
                        @click="active_item = 'Dashboard'"
                        :class="active_item == 'Dashboard' ? 'v-list-item--active' : ''"
                        value="dashboard"></v-list-item>
                    <v-list-item prepend-icon="mdi mdi-cart" title="Supervisors"
                        @click="active_item = 'supervisors'"
                        :class="active_item == 'supervisors' ? 'v-list-item--active' : ''"
                        value="supervisors"></v-list-item>
                    <v-list-item prepend-icon="mdi mdi-currency-usd" title="Subscriptions"
                        @click="active_item = 'subscriptions'; $router.push({name:'subscription'})"
                        :class="active_item == 'subscriptions' ? 'v-list-item--active' : ''"
                        value="subscriptions"></v-list-item>
                    <v-list-item prepend-icon="mdi mdi-account-credit-card-outline" title="Payments" @click="active_item = 'payments'"
                        :class="active_item == 'payments' ? 'v-list-item--active' : ''" value="payments"></v-list-item>
                    <v-list-item prepend-icon="mdi mdi-shopping-outline" title="Deals on Dhaaga"
                        @click="active_item = 'dealsondhaaga'"
                        :class="active_item == 'dealsondhaaga' ? 'v-list-item--active' : ''"
                        value="dealsondhaaga"></v-list-item>
                    <v-list-item prepend-icon="mdi mdi-message-text" title="Respond to Reviews"
                        @click="active_item = 'respondtoreviews'"
                        :class="active_item == 'respondtoreviews' ? 'v-list-item--active' : ''"
                        value="respondtoreviews"></v-list-item>
                    <v-list-item prepend-icon="mdi mdi-clipboard-text-outline" title="Message" @click="active_item = 'message'"
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