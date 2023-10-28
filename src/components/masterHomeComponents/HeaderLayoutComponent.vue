<template>
    <div class="header__component">
        <div class="header w-full flex justify-end items-center">
            <header class="w-[calc(100vw_-_108px)] bg-white bg-white">
                <div class="container">
                    <div class="header__content 
                w-full flex justify-end items-center gap-5 py-2">
                        <RouterLink to=""
                            class="flex gap-3 justify-center items-center border border-black py-1 px-3 rounded-lg">
                            <i class="fa-solid fa-plus"></i>
                            <h3>Nouveau client</h3>
                        </RouterLink>
                        <hr class="border h-10 border-black">
                        <div class="user flex gap-3 justify-center items-center">
                            <div class="user__avatar w-14 h-14 ">
                                <img src="" alt="" class="w-full h-full object-cover bg-gray-200 rounded-full">
                            </div>
                            <select name="" id="" class="bg-transparent outline-none">
                                <option value="">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>

            </header>
        </div>

    </div>
</template>