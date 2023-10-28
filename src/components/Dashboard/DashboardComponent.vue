<template>
    <div class="dashboard__component  ">
        <div class="dashboard">
            <div class="dashboard__content flex flex-col gap-12">
                <div class="dashboard__top w-full flex flex-wrap gap-8">
                    <ProjectComponent />
                    <CustomerComponent />
                    <FileComponent />
                </div>
                <div class="dashboard__midlle w-full">
                    <ReportComponent />
                </div>
                <div class="dashboard__bottom w-full mt-8 flex flex-wrap gap-8">
                    <MessageComponent/>
                    <DocumentComponent/>
                    <NewCustomerComponent/>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import CustomerComponent from './CustomerComponent.vue'
import ProjectComponent from './ProjetComponent.vue'
import FileComponent from './FileComponent.vue'
import ReportComponent from './ReportComponent.vue'
import MessageComponent from './MessageComponent.vue'
import DocumentComponent from './DocumentComponent.vue'
import NewCustomerComponent from './NewCustomerComponent.vue'
</script>