<template>
    <div class="w-full h-screen flex">

        <div class="flex flex-col justify-around items-center w-1/3 h-full">
            <div>
                <h2 class="font-bold">Bienvenue Administrateur</h2>
            </div>
            <form class="w-[65%]">
                <div class="flex flex-col gap-8">
                    <div class="flex flex-col gap-2">
                        <label class="font-bold">Email</label>
                        <input type="text" class=" w-full border border-[#E4DCCF] rounded-lg p-1.5 outline-none">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-bold">Mot de passe</label>
                        <input type="password" class=" w-full border border-[#E4DCCF]  rounded-lg p-1.5 outline-none">
                    </div>
                    <div class=" flex justify-end">
                        <button class="py-2 px-10  rounded-lg bg-[#E4DCCF]">Connexion</button>
                    </div>
                </div>
            </form>
            <div class="flex gap-2">
                <p>Mot de passe oublié? Créer un </p>
                <RouterLink to="" class="text-[#01A4AE] font-bold"> nouveau</RouterLink>
            </div>
        </div>
        <div class="w-2/3 bg-[#EDDBC8] w-full h-full flex justify-center items-center">
            <div class="w-full h-full absolute">
                <img :src="baseImgAuth" alt="" class=" absolute w-full h-full object-cover">
            </div>
            <div>
                <div class="w-[450px] h-[300px] ">
                    <img :src="baseForm1" alt="" class="absolute object-cover w-full h-full ">
                    <img :src="baseForm2" alt="" class="absolute object-cover w-full h-full">
                    <div class="flex flex-col gap-2 justify-center items-center w-full h-full">
                        <h2 class="text-7xl text-center">ilé.éé</h2>
                        <p class="tracking-[17px] text-center">Real Estate</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import baseImgAuth from '../../assets/images/presentoir.jpg'
import baseForm2 from '@/components/icons/base1.svg'
import baseForm1 from '@/components/icons/form.svg'
</script>