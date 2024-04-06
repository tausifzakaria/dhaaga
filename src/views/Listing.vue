<template>
    <Header />
    <div class="container-fluid p-0 position-relative">
        <div class="row row-cols-1 row-cols-lg-2 justify-content-center">
            <div class="col col-lg-2">
                <Sidenav />
            </div>
            <div class="col col-lg-10 bg-custom vh-100">
                <div class="px-5 py-5 mx-3">
                    <!-- Heading -->
                    <div class="text-center my-4">
                        <span class="bg-1 opacity-75 text-white p-2 px-5">Manage Business Listings</span>
                    </div>
                    <!-- Buttons Filters -->
                    <div class="row justify-content-between align-items-center my-5 pt-5">
                        <div class="col col-3">
                            <button class="btn px-5 bg-1 text-white">Add Listing</button>
                        </div>
                        <div class="col col-3">
                            <div class="row border rounded-3" style="background-color: #331e6d78;">
                                <div class="col text-white py-2 text-center">All</div>
                                <div class="col text-white py-2 text-center active-tab">Active</div>
                                <div class="col text-white py-2 text-center">In Active</div>
                            </div>
                        </div>
                    </div>
                    <!-- Cards -->
                    <div class="card-list py-5">
                        <div class="card border-0 shadow-sm px-5 rounded-3 mb-4">
                            <div class="card-body p-3">
                                <div class="row row-cols-2 align-items-center">
                                    <div class="col">
                                        <img src="../assets/icon (2).png" class="img-fluid" style="width: 5%;" alt="">
                                        <span class="mx-3 fw-semibold fs-6">Bombay Grill</span>
                                    </div>
                                    <div class="col text-end">
                                        <span class="mdi mdi-check-decagram text-info fs-2"></span>
                                        <span class="mdi mdi-dots-vertical fs-2"></span>
                                    </div>
                                </div>
                                <div class="row row-cols-1 row-cols-lg-3 align-items-start">
                                    <div class="col col-lg-2 text-center">
                                        <img src="http://static.independent.co.uk/s3fs-public/thumbnails/image/2013/01/02/19/Small-Batch.jpg" class="img-fluid rounded-4 w-75" alt="">
                                    </div>
                                    <div class="col col-lg-6">
                                        <p> <span class="mdi mdi-map-marker-outline">Address :</span> 3620 SE Dixie Hwy, Stuart, Florida, 34997, United States</p>
                                        <p> <span class="mdi mdi-phone"></span> : 990 990 9900</p>
                                    </div>
                                    <div class="col text-end col-lg-4">
                                        <h5 class="text-success">Published</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card border-0 shadow-sm px-5 rounded-3 mb-4">
                            <div class="card-body p-3">
                                <div class="row row-cols-2 align-items-center">
                                    <div class="col">
                                        <img src="../assets/icon (1).png" class="img-fluid" style="width: 5%;" alt="">
                                        <span class="mx-3 fw-semibold fs-6">Mehta Groceries</span>
                                    </div>
                                    <div class="col text-end">
                                        <span class="mdi mdi-alert-octagon-outline text-danger fs-2"></span>
                                        <span class="mdi mdi-dots-vertical fs-2"></span>
                                    </div>
                                </div>
                                <div class="row row-cols-1 row-cols-lg-3 align-items-start">
                                    <div class="col col-lg-2 text-center">
                                        <img src="https://cdn.geekwire.com/wp-content/uploads/2020/02/amzngo1.jpeg" class="img-fluid rounded-4 w-75" alt="">
                                    </div>
                                    <div class="col col-lg-6">
                                        <p> <span class="mdi mdi-map-marker-outline">Address :</span> 3620 SE Dixie Hwy, Stuart, Florida, 34997, United States</p>
                                        <p> <span class="mdi mdi-phone"></span> : 990 990 9900</p>
                                    </div>
                                    <div class="col text-end col-lg-4">
                                        <h5 class="text-warning">Address verification Pending</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    </div>
</template>
<script setup>
    import Header from '../components/Listinng/Header.vue'
    import Sidenav from '../components/Listinng/Sidenav.vue'
    import Footer from '../components/Listinng/Footer.vue'
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
            promo: 'Discount for > 2 business',
        },
        {
            category: 'Salon',
            listing: 'Rubine Salon',
            plan_per_month: '$20',
            discount: '10%',
            total_amount: '$18',
            promo: 'Discount for > 2 business',
        },
        {
            category: 'Jewellery',
            listing: 'Raj Jewellery',
            plan_per_month: '$20',
            discount: '10%',
            total_amount: '$18',
            promo: 'Discount for > 2 business',
        },
        {
            category: 'Clothing',
            listing: 'Adnan Collection',
            plan_per_month: '$20',
            discount: '10%',
            total_amount: '$18',
            promo: 'Discount for > 2 business',
        },
        {
            category: 'Salon',
            listing: 'Rubine Salon',
            plan_per_month: '$20',
            discount: '10%',
            total_amount: '$18',
            promo: 'Discount for > 2 business',
        },
        {
            category: 'Jewellery',
            listing: 'Raj Jewellery',
            plan_per_month: '$20',
            discount: '10%',
            total_amount: '$18',
            promo: 'Discount for > 2 business',
        },
    ]
</script>
<style>
    .active-tab {
        background-color: #331e6d;
    }
</style>