<template>
    <button @click="$attrs.onClick">delete item</button>
</template>
<script setup>
defineOptions({ name: 'DeleteButton', inheritAttrs: false });
</script>

<style></style>
