<template>
    <div class="card border-0 shadow-sm px-5 rounded-0" style="z-index: 1005;">
        <div class="card-body p-3 container">
            <div class="row row-cols-3 align-items-center">
                <div class="col">
                    <img src="../../assets/logo.svg" class="img-fluid" alt="">
                </div>
                <div class="col">
                    <div class="d-flex align-items-center justify-content-end">
                        <div class="mx-5 cursor-pointer">
                            <i class="mdi mdi-home fs-5 me-4"></i>
                            <span>Home</span>
                        </div>
                        <div class="mx-5 cursor-pointer">
                            <i class="mdi mdi-heart fs-5 me-4"></i>
                            <span>Favorite</span>
                        </div>
                        <div class="mx-5 cursor-pointer active" @click="$router.push({ 'name': 'listing' })">
                            <i class="mdi mdi-store fs-5 me-4"></i>
                            <span>My Business</span>
                        </div>
                    </div>
                </div>
                <div class="col text-end">
                    <img src="https://image.kpopmap.com/2021/08/Mint.png"
                        style="width: 45px; height: 45px; object-fit: cover;"
                        class="img-thumbnail p-0 rounded-circle ms-2" alt="profile">
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style>
.active{
    position: relative;
}
.active::after{
    content: '';
    border-bottom: 5px solid #331e6d;
    position: absolute;
    bottom: -97%;
    left: 7%;
    width: 100%;
}
</style>