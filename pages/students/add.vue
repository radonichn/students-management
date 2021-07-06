<template>
  <div>
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
      this.addStudent({ ...this.currentStudent });
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>

</style>
