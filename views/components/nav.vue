<template>
    <div>
        <nav>
            <div class="bg-grey-lighter fixed h-screen pb-4 pt-12 w-64">
                <side-buttons href='/'>Home</side-buttons>
                <side-buttons href='/files'>Files</side-buttons>
                <side-buttons href='/reading-list'>Reading List</side-buttons>
            </div>
            <div class="bg-blue-dark fixed h-12 text-white w-full shadow-md">
                <h1 class="px-4 py-3 text-xl">My PC</h1>
            </div>
        </nav>
    </div>
</template>

<script>
import sideButtons from './nav/side-buttons.vue'

export default {
  name: "navigation",
  components: {sideButtons}
};
</script>

<style>
</style>
