<template>
    <div class="wrapper overflow-x-hidden">
        <div class="wrapper__content">
            <div class="layouts">
                <HeaderLayoutComponent />
            </div>
            <div class="flex">
                <SidebarLayoutComponent/>
                <main>
                    <div class="main__content w-[calc(100vw_-_108px)] h-[calc(100vh_-_54px)] bg-[#F8F7F5] p-[35px] overflow-y-scroll overflow-x-hidden">
                        <div class="container">
                             <RouterView />
                        </div>   
                    </div>
                </main>  
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderLayoutComponent from '../components/masterHomeComponents/HeaderLayoutComponent.vue'
import SidebarLayoutComponent from '../components/masterHomeComponents/SidebarLayoutComponent.vue'
</script>