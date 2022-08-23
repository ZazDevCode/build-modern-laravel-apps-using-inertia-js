<template>
<Head title="Users" />
        <h1 class="text-3xl">Users</h1>


<div class="overflow-x-auto relative mt-6">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="user in users.data" :key="user.id">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {{ user.name }}
                </th>
                <td class="py-4 px-6">
                    <Link :href="'/users/' + user.id + '/edit'" class="text-blue-500 hover:text-blue-600">Edit</Link>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<Pagination :links="users.links" class="mt-6" />


</template>

<script setup>
import Pagination from "../Shared/Pagination";

defineProps({  users: Object });
</script>
