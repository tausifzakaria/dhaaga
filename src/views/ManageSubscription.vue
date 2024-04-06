<template>
    <Header />
    <div class="container-fluid p-0 position-relative">
        <div class="row row-cols-1 row-cols-lg-2 justify-content-center">
            <div class="col col-lg-2">
                <Sidenav />
            </div>
            <div class="col col-lg-10 bg-custom">
                <div class="px-5 py-5 mx-3">
                    <div class="row row-cols-2 align-items-center my-5">
                        <div class="col">
                            <h4 class="fw-normal font-style-2">Manage Subscription</h4>
                        </div>
                        <div class="col text-end">
                            <button class="btn px-5  bg-1 text-white">Add leads</button>
                        </div>
                    </div>
                    <v-data-table :headers="headers" :items="items" items-per-page="4">
                        <template v-slot:item.action="{ item }">
                            <i class="me-3 text-info fa-solid fa-info-circle fa-xl"></i>
                            <i class="me-3 text-warning fa-solid fa-pen-to-square fa-xl"></i>
                            <i class="me-3 text-danger fa-solid fa-trash-can fa-xl"></i>
                        </template>
                        <template v-slot:tfoot>
                            <td colspan="7" class="container">
                                <p class="my-4 fw-bold">Total Monthly Subscription : <span class="text-muted"> $54 </span></p>
                                <div class="d-flex align-items-center my-4">
                                    <p class="fw-semibold m-0 p-0">Apply Promo Code</p>
                                    <input type="text" size="8" class="form-control w-auto mx-3 shadow-none border-info">
                                    <button class="btn  px-5 bg-1 text-white">Apply</button>
                                </div>
                            </td>
                        </template>
                    </v-data-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Header from '../components/ManageSubscription/Header.vue'
import Sidenav from '../components/ManageSubscription/Sidenav.vue'
const headers = [
    { title: 'Category', value: 'category' },
    { title: 'Listing', value: 'listing' },
    { title: 'Plan Per Month', value: 'plan_per_month' },
    { title: 'Discount', value: 'discount' },
    { title: 'Total Amount', value: 'total_amount' },
    { title: 'Promo', value: 'promo' },
    { title: 'Action', value: 'action' },
]
const items = [
    {
        category: 'Clothing',
        listing: 'Adnan Collection',
        plan_per_month: '$20',
        discount: '10%',
        total_amount: '$18',
        promo: 'Discount for > 2 business' ,
    },
    {
        category: 'Salon', 
        listing: 'Rubine Salon', 
        plan_per_month: '$20', 
        discount: '10%', 
        total_amount: '$18', 
        promo: 'Discount for > 2 business' , 
    },
    {
        category: 'Jewellery',
        listing: 'Raj Jewellery',
        plan_per_month: '$20',
        discount: '10%',
        total_amount: '$18',
        promo: 'Discount for > 2 business' ,
    },
    {
        category: 'Clothing',
        listing: 'Adnan Collection',
        plan_per_month: '$20',
        discount: '10%',
        total_amount: '$18',
        promo: 'Discount for > 2 business' ,
    },
    {
        category: 'Salon', 
        listing: 'Rubine Salon', 
        plan_per_month: '$20', 
        discount: '10%', 
        total_amount: '$18', 
        promo: 'Discount for > 2 business' , 
    },
    {
        category: 'Jewellery',
        listing: 'Raj Jewellery',
        plan_per_month: '$20',
        discount: '10%',
        total_amount: '$18',
        promo: 'Discount for > 2 business' ,
    },
]
</script>