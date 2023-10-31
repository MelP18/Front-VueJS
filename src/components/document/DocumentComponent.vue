<template>
    <div class="document__component flex flex-col gap-5">
        <div class="text-xl font-bold">
            <h2>Documents</h2>
        </div>
        <div class="flex gap-2">
            <TableDocumentComponent/>
            <NewDocumentComponent/>
        </div>
        
    </div>

   
</template>

<script lang="ts" setup>
    import TableDocumentComponent from './TableDocumentComponent.vue';
    import NewDocumentComponent from './NewDocumentComponent.vue';
</script>