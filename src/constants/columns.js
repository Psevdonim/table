import DeleteButton from '@/components/DeleteButton';

export const columns = [
    { key: 'address', label: 'Address' },
    { key: 'company', label: 'Company' },
    { key: 'email', label: 'Email' },
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name' },
    { key: 'phone', label: 'Phone' },
    { key: 'username', label: 'Username' },
    { key: 'delete', label: 'Delete?', component: DeleteButton, action: 'deleteItem' }
];
