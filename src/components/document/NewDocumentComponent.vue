<template>
    <div class="document__component">
        <div class="document w-64 h-60">
            <div class="document__content flex flex-col justify-between gap-5 py-8 px-5 bg-white h-full rounded-lg border border-[#DCEDEA]">
                <div class="icon 
                w-16 h-16 bg-[#C3EFF0] flex justify-center items-center rounded-full">
                    <i class="fa-solid fa-book text-4xl text-[#01A4AE]"></i>
                </div>
                <div class="write__msg">
                        <RouterLink to="" 
                        class="flex bg-[#C3EFF0] justify-center items-center gap-2  p-x-4 py-2 rounded-lg" >
                            <i class="fa-solid fa-plus text-[#01A4AE]"></i>
                            <p class="px-2 text-[#01A4AE] font-bold">Ajouter</p>
                        </RouterLink>
                 </div> 
            </div>
        </div>
    </div>
</template>