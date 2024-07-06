<template>
    <button @click.stop="deleteItem">delete item</button>
</template>

<script setup>
const props = defineProps({ item: { type: Object } });
const emit = defineEmits(['deleteItem']);

const deleteItem = () => {
    emit('deleteItem', props.item);
};
</script>

<style></style>
