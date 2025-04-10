<template>
    <div class="home-page">
        <h1 class="mb-8">Viettel Digital Talent 2025 Students List</h1>
        <table class="border-black border-2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Trường Đại học</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in students" :key="student.id">
                    <td>{{ student.id }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.gender }}</td>
                    <td>{{ student.dob }}</td>
                    <td>{{ student.university }}</td>
                    <td><button type="button" class="focus:outline-none cursor-pointer text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2.5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Edit</button></td>
                    <td><button type="button" class="focus:outline-none cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button></td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="text-white mt-6 cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ADD STUDENT</button>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            students: [
                { id: 1, name: "Nguyễn Văn Vinh", gender: "Nam", dob: "2004-02-12", university: "Trường Đại học Công nghệ - ĐHQGHN" },
                { id: 2, name: "Trần Thị Trà My", gender: "Nữ", dob: "2005-05-19", university: "Đại học Bách Khoa Hà Nội" },
                { id: 3, name: "Vũ Quang Nam", gender: "Nam", dob: "2004-07-03", university: "Trường Đại học Công nghệ Thông tin - ĐHQGTPHCM" },
                { id: 4, name: "Trần Văn Kiên", gender: "Nam", dob: "2004-11-19", university: "Học viện Công nghệ Bưu chính Viễn thông" },
                { id: 5, name: "Lê Quỳnh Anh", gender: "Nữ", dob: "2004-02-18", university: "Đại học Bách Khoa Hà Nội" },
                { id: 6, name: "Lê Hà Anh Minh", gender: "Nam", dob: "2005-03-17", university: "ITMO University" },
            ],
        };
    },
    methods: {
        parseDate(input) {
            const [year, month, day] = input.split("-");
            return `${day}/${month}/${year}`;
        }
    },
    mounted() {
        this.students.forEach(student => {
            student.dob = this.parseDate(student.dob);
        });
    }
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
    padding-right: 20px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #ffffff;
}
</style>