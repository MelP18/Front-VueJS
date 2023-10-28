<template>
    <div class="report__project__component">
        <div class="report__project shadow shadow-lg">
            <div class="report__content w-[281px] h-96 bg-white">
                <div class="img">
                    <img :src="hotelImage" alt="" class=" w-full h-full object-cover rounded-t-lg">
                </div>
                <div class="project flex flex-col gap-5 p-5">
                    <h4 class="font-bold">Projet en cours</h4>
                    <div class="details flex gap-3 items-center">
                        <h5 class="text-sm">Rural Duplex</h5>
                        <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <div class="location">
                            <p class="text-gray-400 text-sm">Porto-Novo</p>
                        </div>
                    </div>
                    <div class="details flex gap-3 items-center ">
                        <h5 class="text-sm">Date prévue</h5>
                        <span class="w-2 h-2 bg-gray-400 rounded-full"></span>
                        <div class="location">
                            <p class="text-gray-400 text-sm">22/06/23</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import hotelImage from '@/assets/images/hotel-fleur-de-sel-1.jpg'
</script>