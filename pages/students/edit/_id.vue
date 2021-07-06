<template>
  <div>
    <h1 class="text-center">
      Изменение данных об ученике
    </h1>
    <StudentsForm
      v-model="currentStudent"
      @on-submit="handleSubmit"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import StudentsForm from '@/components/students-form.vue';

export default {
  name: 'Id',
  components: {
    StudentsForm,
  },
  data() {
    return {
      currentStudent: {},
    };
  },
  computed: {
    ...mapGetters('students', ['getStudentById']),
    studentId() {
      return +this.$route.params.id;
    },
  },
  mounted() {
    this.setCurrentStudent();
  },
  methods: {
    ...mapMutations('students', {
      editStudent: 'EDIT_STUDENT',
    }),
    setCurrentStudent() {
      this.currentStudent = { ...this.getStudentById(this.studentId) } || {};
    },
    handleSubmit() {
      this.editStudent({ ...this.currentStudent });
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>

</style>
