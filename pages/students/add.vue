<template>
  <div>
    <h1 class="text-center">
      Добавление ученика
    </h1>
    <StudentsForm
      v-model="currentStudent"
      @on-submit="handleSubmit"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import StudentsForm from '@/components/students-form.vue';

export default {
  name: 'Add',
  components: {
    StudentsForm,
  },
  data() {
    return {
      currentStudent: {
        name: null,
        classesPerMonth: null,
        favoriteGenres: [],
      },
    };
  },
  methods: {
    ...mapMutations('students', {
      addStudent: 'ADD_STUDENT',
    }),
    handleSubmit() {
      this.addStudent({
        id: new Date().valueOf(),
        ...this.currentStudent,
      });
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>

</style>
