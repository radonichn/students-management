<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="studentsTableData"
      disable-sort
      disable-filtering
      disable-pagination
      hide-default-footer
      class="students-list"
    >
      <template #item.name="{ item }">
        <nuxt-link
          class="students-list-student-link"
          :to="{ name: 'students-id', params: { id: item.id } }"
        >
          {{ item.name }}
        </nuxt-link>
      </template>
      <template #item.classesPerMonth="{ item }">
        <v-chip
          color="orange"
          dark
        >
          {{ item.classesPerMonth }}
        </v-chip>
      </template>
      <template #item.actions="{ item }">
        <v-btn
          icon
          color="blue"
          @click="handleEdit(item)"
        >
          <v-icon large>
            mdi-pencil-circle
          </v-icon>
        </v-btn>
        <v-btn
          icon
          color="red"
          @click="setdeleteStudent(item)"
        >
          <v-icon large>
            mdi-delete-circle
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-dialog
      v-model="dialogWindow"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Удаление ученика
        </v-card-title>

        <v-card-text>
          Вы действительно хотите удалить ученика: {{ deleteStudent && deleteStudent.name }}?
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="primary"
            text
            @click="setdeleteStudent(null)"
          >
            Отмена
          </v-btn>

          <v-btn
            color="primary"
            outlined
            @click="handleDelete"
          >
            ОК
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'StudentsList',
  data() {
    return {
      deleteStudent: null,
    };
  },
  computed: {
    ...mapState('students', ['students']),
    dialogWindow: {
      get() {
        return !!this.deleteStudent;
      },
      set(v) {
        this.deleteStudent = v;
      },
    },
    headers() {
      return [
        { text: 'Имя ученика', value: 'name' },
        { text: 'Кол-во посещений в месяц', value: 'classesPerMonth' },
        { text: 'Действия', value: 'actions', align: 'center', width: '200px' },
      ];
    },
    studentsTableData() {
      return this.students.map(({ id, name, classesPerMonth }) => ({
        id,
        name,
        classesPerMonth,
      }));
    },
  },
  methods: {
    ...mapMutations('students', {
      removeStudent: 'REMOVE_STUDENT',
    }),
    setdeleteStudent(v) {
      this.deleteStudent = v;
    },
    handleEdit(user) {
      this.$router.push({ name: 'students-edit-id', params: { id: user.id } });
    },
    handleDelete() {
      this.removeStudent(this.deleteStudent.id);
      this.setdeleteStudent(null);
    },
  },
};
</script>

<style lang="sass" scoped>
.students-list
  &-student-link
    text-decoration: none
    cursor: pointer
</style>
