<template>
    <div class="max-w-md mx-auto mt-10 p-16 bg-blue-50 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-6 whitespace-nowrap">Add Student</h1>
        <form @submit.prevent="handleSubmit">
            <div class="mb-6">
                <label for="name" class="block text-sm font-medium text-gray-700 text-left">Tên</label>
                <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập tên sinh viên"
                />
            </div>
            <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 text-left">Giới tính</label>
                <div class="flex items-center mt-2">
                    <label class="flex items-center mr-4">
                        <input
                            type="radio"
                            value="Nam"
                            v-model="form.gender"
                            class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span class="ml-2 text-gray-700">Nam</span>
                    </label>
                    <label class="flex items-center">
                        <input
                            type="radio"
                            value="Nữ"
                            v-model="form.gender"
                            class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span class="ml-2 text-gray-700">Nữ</span>
                    </label>
                </div>
            </div>
            <div class="mb-6">
                <label for="age" class="block text-sm font-medium text-gray-700 text-left">Ngày sinh</label>
                <input
                    type="date"
                    id="dob"
                    v-model="form.dob"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập ngày sinh"
                />
            </div>  
            <div class="mb-6">
                <label for="age" class="block text-sm font-medium text-gray-700 text-left">Trường Đại học</label>
                <input
                    type="text"
                    id="age"
                    v-model="form.university"
                    class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập Trường Đại học"
                />
            </div>
            <button
                type="submit"
                class="w-full bg-blue-500 text-white cursor-pointer py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Add
            </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CreateStudent',
    data() {
        return {
            form: {
                name: '',
                gender: 'Nam',
                dob: null,
                university: '',
            },
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post("http://localhost:8000/students/create", this.form);
                console.log("Student created successfully:", response.data);

                this.$router.push('/');
            } catch (error) {
                console.error("Failed to create student:", error);
            }
            
        },
    },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>