<template>
    <a :href='href' class="w-full block p-4 text-grey-dark hover:text-blue no-underline font-bold hover:bg-grey-light">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'side-button',
    props: ['href']
}
</script>

<style>

</style>
