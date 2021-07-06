<template>
  <div class="students-management">
    <h1>
      Students management app
    </h1>
    <StudentsList />
  </div>
</template>

<script>
import StudentsList from '@/components/students-list.vue';

export default {
  name: 'Index',
  components: {
    StudentsList,
  },
};
</script>

<style>
.students-management {
  margin: 30px 0;
}

.students-management h1 {
  text-align: center;
  margin-bottom: 25px;
}
</style>
