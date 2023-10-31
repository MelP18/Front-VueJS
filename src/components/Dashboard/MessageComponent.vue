<template>
    <div class="message__component">
        <div class="message w-96 h-72">
            <div class="message__content flex flex-col gap-5 py-8 px-5 bg-white w-full h-full rounded-lg border border-[#DCEDEA]">
                <div class="icon 
                w-16 h-16 bg-[#C3EFF0] flex justify-center items-center rounded-full">
                    <i class="fa-regular fa-envelope text-4xl text-[#01A4AE]"></i>
                </div>
                <div class="title">
                    <h4 class="text-2xl font-bold">Messages</h4>
                </div>
                <div class="notice ">
                        <p class="text-gray-400 font-bold">Votre Boîte de messagerie est vide</p>
                 </div> 
                 <div class="write__msg">
                        <RouterLink to="" 
                        class="flex max-w-[220px] bg-[#C3EFF0] items-center gap-2  p-1.5 rounded-lg" >
                            <p class="px-2 text-[#01A4AE] font-bold">Composer votre message</p>
                            <i class="fa-regular fa-pen-to-square text-2xl text-[#01A4AE]"></i>
                        </RouterLink>
                 </div>  
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { RouterLink } from 'vue-router';
</script>