<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer color="#331E6D" theme="dark" permanent>
                <img src="../../assets/logo.svg" class="img-fluid p-3 my-3" alt="">
                <h5 class="p-3">Business Manager</h5>
                <v-list nav>
                    <v-list-item prepend-icon="mdi mdi-view-dashboard-outline" title="Dashboard"
                        @click="active_item = 'Dashboard'"
                        :class="active_item == 'Dashboard' ? 'v-list-item--active' : ''"
                        value="Dashboard"></v-list-item>

                    <v-list-item prepend-icon="mdi mdi-format-list-text" title="Listings"
                        @click="active_item = 'Listings'"
                        :class="active_item == 'Listings' ? 'v-list-item--active' : ''"
                        value="Listings"></v-list-item>

                    <v-list-item prepend-icon="mdi mdi-account-credit-card-outline" title="Payment & Subscription"
                        @click="active_item = 'Payment & Subscription'; $router.push({ name: 'subscription' })"
                        :class="active_item == 'Payment & Subscription' ? 'v-list-item--active' : ''" value="Payment & Subscription"></v-list-item>

                    <v-list-item prepend-icon="mdi mdi-cog-outline" title="Setting"
                        @click="active_item = 'Setting'"
                        :class="active_item == 'Setting' ? 'v-list-item--active' : ''"
                        value="Setting"></v-list-item>

                    <v-list-item prepend-icon="mdi mdi-clipboard-outline" title="Notification"
                        @click="active_item = 'Notification'"
                        :class="active_item == 'Notification' ? 'v-list-item--active' : ''"
                        value="Notification"></v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-layout>
    </v-card>
</template>
<script setup>
import { ref } from 'vue';

let active_item = ref('Listings')
</script>