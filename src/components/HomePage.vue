<template>
    <div class="home-page">
        <h1 class="mb-8 font-bold">Viettel Digital Talent 2025 Student List</h1>
        <button type="button" class="text-white mb-6 cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ADD STUDENT</button>
        <table class="border-black border-2">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Trường Đại học</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student,index) in students" :key="student.id">
                    <td style="text-align: center;">{{ index + 1 }}</td>
                    <td>{{ student.name }}</td>
                    <td style="text-align: center;">{{ student.gender }}</td>
                    <td>{{ student.dob }}</td>
                    <td style="padding-right: 5rem;">{{ student.university }}</td>
                    <td><button type="button" class="focus:outline-none cursor-pointer text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2.5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Update</button></td>
                    <td><button type="button" @click="deleteStudent(student.id)" class="focus:outline-none cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            students: [],
        };
    },
    methods: {
        parseDate(input) {
            const [year, month, day] = input.split("-");
            return `${day}/${month}/${year}`;
        },
        async fetchStudents() {
            try {
                const response = await fetch("http://localhost:8000/students/list");
                const data = await response.json();
                console.log(data);
                this.students = data.map(student => ({
                    ...student,
                    dob: this.parseDate(student.dob),
                }));
            } catch (error) {
                console.error("Failed to fetch students:", error);
            }
        },
        async deleteStudent(id) {
            try {
                const response = await fetch(`http://localhost:8000/students/delete/${id}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    this.fetchStudents();
                } else {
                    console.error("Failed to delete student:", response.statusText);
                }
            } catch (error) {
                console.error("Failed to delete student:", error);
            }
        },

    },
    mounted() {
        this.fetchStudents();
    },
};
</script>

<style scoped>
.home-page {
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    text-align: left;
}

th {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #ddd;
    text-align: center;
}
td {
    border: 1px solid #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #ffffff;
}
</style>