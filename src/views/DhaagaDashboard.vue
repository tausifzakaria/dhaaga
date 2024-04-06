<template>
    <div class="container-fluid p-0">
        <div class="row row-cols-1 row-cols-lg-2 justify-content-center">
            <div class="col col-lg-2">
                <Sidenav />
            </div>
            <div class="col col-lg-10 bg-custom">
                <div class="ps-5 py-4 mx-3">
                    <!-- Search Bar With Icons -->
                    <div class="card border-0 shadow-sm px-5 rounded-3 mb-4">
                        <div class="card-body p-3">
                            <div class="row row-cols-2 align-items-center">
                                <div class="col">
                                    <div class="d-flex align-items-center">
                                        <i class="mdi mdi-magnify fs-4" style="color:lightgray"></i>
                                        <input type="text" class="form-control shadow-none border-0"
                                            placeholder="Search Desi Grocery">
                                    </div>
                                </div>
                                <div class="col d-flex align-items-center justify-content-end">
                                    <button type="button" class="position-relative mx-5">
                                        <i class="mdi mdi-bell-outline fs-3"></i>
                                        <span
                                            class="position-absolute translate-middle badge rounded-pill bg-danger bg-opacity-75"
                                            style="top: 30%; left: 110%;">
                                            9
                                            <span class="visually-hidden">unread messages</span>
                                        </span>
                                    </button>
                                    <img src="https://image.kpopmap.com/2021/08/Mint.png"
                                        style="width: 45px; height: 45px; object-fit: cover;"
                                        class="img-thumbnail p-0 rounded-circle ms-2" alt="profile">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pie Charts And Highlights -->
                    <div class="row row-cols-1 row-cols-lg-2 align-items-center justify-content-center">
                        <div class="col">
                            <div class="card border-0 shadow-sm px-5 rounded-3 mb-4">
                                <div class="card-body p-2">
                                    <div class="lh-base">
                                        <select name="store" id="store-list"
                                            class="form-select ps-0 border-0 shadow-none w-50">
                                            <option value="Lucky store">Lucky Store</option>
                                        </select>
                                    </div>
                                    <h6 class="m-0 p-0 lh-base" style="color: lightgray;">Last 7 Days</h6>
                                    <div class="container-fluid my-4">
                                        <div class="row row-cols-2 align-items-center">
                                            <div class="col p-0">
                                                <h1 class="m-0 p-0 lh-base">112</h1>
                                                <h6 class="m-0 p-0 lh-base mb-5" style="color: lightgray;">Total Reviews
                                                </h6>
                                                <div class="container-fluid my-5">
                                                    <div class="row row-cols-2 my-5 py-2">
                                                        <div
                                                            class="col col-2 bg-success-subtle text-center rounded-3 p-2">
                                                            <i class="mdi mdi-currency-usd text-success"></i>
                                                        </div>
                                                        <div class="col col-10">
                                                            <h6 class="m-0 p-0">Revenue Estimate</h6>
                                                            <h6 class="m-0 p-0" style="color: #b9b9b9;">$9745</h6>
                                                        </div>
                                                    </div>
                                                    <div class="row row-cols-2 my-5 py-2">
                                                        <div class="col col-2 bg-info-subtle text-center rounded-3 p-2">
                                                            <i class="mdi mdi-check text-info"></i>
                                                        </div>
                                                        <div class="col col-10">
                                                            <h6 class="m-0 p-0">Website Clicks</h6>
                                                            <h6 class="m-0 p-0" style="color: #b9b9b9;">437</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col p-0 position-relative">
                                                <div class="position-absolute text-center"
                                                    style="top: 50%; left: 50%; transform: translate(-50%,-30%)">
                                                    <h6>Average Rating</h6>
                                                    <h4>4.5 <i class="mdi mdi-star text-warning"></i></h4>
                                                </div>
                                                <Doughnut :data="data" :options="options" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 shadow-sm rounded-3 mb-4">
                                <div class="card-body p-4">
                                    <h5 class="m-0 p-0 lh-base">Highlights</h5>
                                    <h6 class="m-0 p-0 lh-base" style="color: lightgray;">8.52k Social Visitors</h6>
                                    <v-list>
                                        <v-list-item class="px-0" title="Fresh">
                                            <template v-slot:append class="w-75">
                                                <div class="d-flex">
                                                    <span class="w-100 me-4">346</span>
                                                    <span class="w-100 ms-2 text-success">33%</span>
                                                </div>
                                            </template>
                                        </v-list-item>
                                        <v-list-item class="px-0" title="Quality">
                                            <template v-slot:append class="w-75">
                                                <div class="d-flex">
                                                    <span class="w-100 me-4">244</span>
                                                    <span class="w-100 ms-2 text-success">27%</span>
                                                </div>
                                            </template>
                                        </v-list-item>
                                        <v-list-item class="px-0" title="Varitey">
                                            <template v-slot:append class="w-75">
                                                <div class="d-flex">
                                                    <span class="w-100 me-4">142</span>
                                                    <span class="w-100 ms-2 text-success">17%</span>
                                                </div>
                                            </template>
                                        </v-list-item>
                                        <v-list-item class="px-0" title="Savings">
                                            <template v-slot:append class="w-75">
                                                <div class="d-flex">
                                                    <span class="w-100 me-4">75</span>
                                                    <span class="w-100 ms-2 text-success">8.5%</span>
                                                </div>
                                            </template>
                                        </v-list-item>
                                        <v-list-item class="px-0" title="Convinience">
                                            <template v-slot:append class="w-75">
                                                <div class="d-flex">
                                                    <span class="w-100 me-4">42&nbsp;&nbsp;</span>
                                                    <span class="w-100 ms-2 text-success">4%</span>
                                                </div>
                                            </template>
                                        </v-list-item>
                                        <v-list-item class="px-0" title="Locally-sourced">
                                            <template v-slot:append class="w-75">
                                                <div class="d-flex">
                                                    <span class="w-100 me-4">6</span>
                                                    <span class="w-100 ms-2 text-success">0.8%</span>
                                                </div>
                                            </template>
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Search Bar With Icons -->
                    <div class="card border-0 shadow-sm rounded-3 mb-4">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="text-center p-2 rounded-3 fs-6 text-white"
                                    style="background-color: #7367f0; width: 12%;">
                                    Listing Visits
                                </div>
                                <div class="text-center p-2 rounded-3 fs-6" style="color: #7367f0; width: 12%;">
                                    Dhaaga Leads
                                </div>
                                <div class="text-center p-2 rounded-3 fs-6" style="color: #7367f0; width: 8%;">
                                    Calls
                                </div>
                                <div class="text-center p-2 rounded-3 fs-6" style="color: #7367f0; width: 9%;">
                                    Directions
                                </div>
                                <div class="text-center p-2 rounded-3 fs-6" style="color: #7367f0; width: 14%;">
                                    Website Clicks
                                </div>
                                <div class="text-center p-2 rounded-3 fs-6" style="color: #7367f0; width: 14%;">
                                    Revenue Estimate
                                </div>
                                <div class="text-center p-2 rounded-3 fs-6" style="color: #7367f0; width: 12%;">
                                    # of Reviews
                                </div>
                                <div class="text-center p-2 rounded-3 fs-6" style="color: #7367f0; width: 9%;">
                                    Rating
                                </div>
                                <div class="text-center p-2 rounded-3 fs-6" style="color: #7367f0; width: 8%;">
                                    Favorites
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Listing Views -->
                    <div class="card border-0 shadow-sm rounded-3 mb-4">
                        <div class="card-body">
                            <div class="row row-cols-2 align-items-center">
                                <div class="col">
                                    <h5 class="fw-semibold">Listing Views</h5>
                                    <div>
                                        <select name="store" id="store-list"
                                            class="form-select ps-0 border-0 shadow-none w-25">
                                            <option value="July 2023">July 2023</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col text-end">
                                    <i class="mdi mdi-dots-vertical fs-4"></i>
                                </div>
                            </div>
                            <Bar style="width:100%; height: 400px;" :data="bar_data" :options="bar_options"></Bar>
                        </div>
                    </div>

                    <!-- Listing Views -->
                    <div class="card border-0 shadow-sm rounded-3 mb-4">
                        <div class="card-body">
                            <h3 class="fw-semibold clr-custom-1">Listing Views</h3>
                            <ul class="clr-custom-1">
                                <li class="fw-semibold">Multiple listing views from the same user within a 1 hour window
                                    are counted as 1
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>
<script setup>
import Sidenav from '../components/DhaagaDashboard/Sidenav.vue'
import Footer from '../components/DhaagaDashboard/Footer.vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Doughnut, Bar } from 'vue-chartjs'

const data = {
    // labels: ['Average Rating', 'Total'],
    datasets: [
        {
            backgroundColor: ['#7367f0', '#e9e7fd'],
            data: [85, 15]
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false
}

const bar_data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
    datasets: [
        {
            fill: false,
            label: "Listing Views",
            lineTension: 0,
            backgroundColor: ['#e9e7fd', '#e9e7fd', '#7367f0', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#7367f0', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#7367f0', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd', '#e9e7fd'],
            borderRadius: 10,
            // : ['11', '5', '22', '18', '7', '13', '17', '10', '3', '11', '6', '22', '18', '7', '13', '17', '10', '3', '11', '6', '22', '18', '7', '13', '17', '10', '3', '11', '6'],
            data: [11, 5, 22, 18, 7, 13, 17, 10, 3, 11, 6, 22, 18, 7, 13, 17, 10, 3, 11, 6, 22, 18, 7, 13, 17, 10, 3, 11, 6],
        }
    ]
}

const bar_options = {
    responsive: false,
    maintainAspectRatio: false
}

ChartJS.register(ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale)
</script>