<template>
  <div>
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
      const payload = {
        editStudentId: this.studentId,
        student: { ...this.currentStudent },
      };
      this.editStudent(payload);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>

</style>
