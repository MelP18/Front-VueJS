<template>
    <div class="report__table__component w-full h-full">
        <div class="report__table w-full h-full">
            <div class="report__table__content  w-full h-full py-5 bg-white">
                <table class="bg-white w-full h-full">
                    <thead class="text-left ">
                        <th class="py-2.5 px-5 text-left"></th>
                        <th class="py-2.5 px-5 text-left w-1/6">Nom</th>
                        <th class="py-2.5 px-5 text-left w-1/6">Type</th>
                        <th class="py-2.5  px-5 text-left w-1/6">Date</th>
                        <th class="whitespace-nowrap py-2.5 px-5 text-left w-1/6">Client</th>
                        <th class="py-2.5  px-5 text-left w-1/6">Action</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in document" class="border-y border-y-[#DCEDEA]">
                            <td class="py-1.5  px-5">
                                <i :class="item.icon"></i>
                            </td>
                            <td class="line-clamp-1 py-1.5 px-5">
                                <p>{{ item.nom }}</p>
                            </td>
                            <td class="py-1.5  px-5 w-1/6">{{ item.type }}</td>
                            <td class="py-1.5  px-5 w-1/6">{{ item.date }}</td>
                            <td class="py-1.5  px-5 w-1/6">{{ item.client }}</td>
                            <td class="py-1.5  px-5 w-1/6">
                                <button class="font-bold" 
                                    @click="openActionToogle(item)">{{ item.action }}
                                </button>
                                <div v-if="item.isVisible" 
                                class="absolute top-0 right-0  flex flex-col gap-2 bg-gray-100 p-5 shadow-[0px_1px_5px] shadow-gray-400 rounded-xl ">
                                    <RouterLink to="">Ouvrir</RouterLink>
                                    <RouterLink to="">Télécharger</RouterLink>
                                    <RouterLink to="">Eliminer</RouterLink>
                                </div>
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref,nextTick} from 'vue'
import { report } from '../../menus/reportTab'
import { document } from '../../menus/documentTable' 
import { RouterLink } from 'vue-router';
import type {doc} from '@/Types/document'

const openActionToogle = (item:doc) =>{
   item.isVisible = !item.isVisible;
   
}




</script>