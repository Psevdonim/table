import { computed } from 'vue';

export const useActionsTable = (items) => {
    const currentItems = computed(() => items.value);

    const deleteItem = (item) => items.value.filter((el) => el !== item);

    return { deleteItem, currentItems };
};
