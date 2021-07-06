<template>
  <div>
    <v-snackbar
      :value="snackBar"
      color="success"
      absolute
      top
      right
    >
      {{ successText }}
    </v-snackbar>
    <v-form
      ref="form"
      class="text-right"
    >
      <v-text-field
        v-model="student.name"
        :rules="requiredRule"
        label="Имя ученика"
        required
      />
      <v-text-field
        v-model="student.classesPerMonth"
        :rules="requiredRule"
        label="Количество занятий в месяц"
        required
      />
      <v-select
        v-model="student.favoriteGenres"
        :items="availableGenres"
        :menu-props="{ maxHeight: '400' }"
        label="Любимые жанры"
        multiple
      />
      <v-btn
        class="mr-4"
        color="error"
        outlined
        @click="handleCancel"
      >
        Отмена
      </v-btn>
      <v-btn
        color="success"
        @click="handleSubmit"
      >
        {{ submitText }}
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'StudentsForm',
  props: {
    value: {
      type: Object,
      default: () => ({
        name: null,
        favoriteGenres: [],
      }),
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      snackBar: false,
    };
  },
  computed: {
    student: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      },
    },
    successText() {
      return this.isEdit ? 'Данные об ученике были успешно изменены' : 'Ученик был успешно добавлен';
    },
    submitText() {
      return this.isEdit ? 'Сохранить' : 'Добавить';
    },
    requiredRule() {
      return [
        v => !!v || 'Это поле является обязательным',
      ];
    },
    availableGenres() {
      return [];
    },
  },
  methods: {
    handleCancel() {
      this.$router.push('/');
    },
    handleSubmit() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.snackBar = true;
        this.$emit('on-submit');
      }
    },
  },
};
</script>

<style scoped>

</style>
