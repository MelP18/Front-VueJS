<template>
    <div class="report__table__component">
        <div class="report__table">
            <div class="report__table__content">
                <table class="w-[600px] bg-white border border-[#DCEDEA]">
                    <thead class="w-full text-left  border border-[#DCEDEA]">
                        <th class="py-2.5 px-5 w-1/4 text-left">Info</th>
                        <th class="py-2.5  px-5 w-1/4 text-left">Date</th>
                        <th class="whitespace-nowrap py-2.5  px-5 w-1/4 text-left">Chargé par</th>
                        <th class="py-2.5  px-5 w-1/4 text-left">Action</th>
                    </thead>
                    <tbody class="w-full">
                        <tr v-for="item in report" class="border border-[#DCEDEA]">
                            <td class="line-clamp-1 py-1.5 px-5 ">
                                <p>{{ item.info }}</p>
                            </td>
                            <td class="py-1.5  px-5  w-1/4">{{ item.date }}</td>
                            <td class="py-1.5  px-5  w-1/4">{{ item.charg }}</td>
                            <td class="py-1.5  px-5  w-1/4">
                                <RouterLink to="" class="font-bold">{{ item.action }}</RouterLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { report } from '../../menus/reportTab'

</script>