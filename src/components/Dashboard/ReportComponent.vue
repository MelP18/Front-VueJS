<template>
    <div class="report__component">
        <div class="report flex flex-col gap-5">
            <div class="title">
                <h1 class="text-2xl font-bold">Rapport</h1>
            </div>
            <div class="report__content w-full flex gap-10 ">
                <ReportTable/>
                <ReportProject/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ReportProject from './ReportProjectComponent.vue'
import ReportTable from './ReportTableComponent.vue'
</script>