<template>
    <div class="menu__component">
        <div class="menus w-36 bg-lime-200 h-[calc(100vh_-_54px)] flex bg-white">
            <div class="menu__content w-full">
                <div class="menu__list flex flex-col justify-between h-full w-full py-1">
                    <div class="menu__list__top
                    flex flex-col gap-5 h-full">
                        <div class="title">
                            <h2 class="text-center font-bold text-2xl">ilé.ée</h2>
                        </div>
                        <div v-for="element in menuTop" class="menu__list__item
                        flex flex-col gap-5 justify-center items-center">
                            <RouterLink :to="element.router" class="block flex flex-col justify-center items-center gap-2 active:bl-blue-500">
                                <i :class="element.icon"></i>
                                <h3 class="text-center text-sm">{{ element.title }}</h3>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="menu__list__bottom 
                    flex flex-col justify-center items-center gap-5 ">
                        <div v-for="element in menuBottom" class="menu__list__item 
                        flex flex-col justify-center items-center">
                            <RouterLink :to="element.router" class="block flex flex-col justify-center items-center gap-2">
                                <i :class="element.icon"></i>
                                <h3 class="text-center">{{ element.title }}</h3>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script lang="ts" setup>

import { menuTop, menuBottom } from '../../menus/menuLayoutHome'

</script>