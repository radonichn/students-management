<template>
  <div class="students-management">
    <h1>
      Students management app
    </h1>
    <div class="d-flex justify-end mb-10">
      <v-btn
        color="success"
        @click="handleCreate"
      >
        Добавить ученика
      </v-btn>
    </div>
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
  methods: {
    handleCreate() {
      this.$router.push({ name: 'students-add' });
    },
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
