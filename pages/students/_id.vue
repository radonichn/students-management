<template>
  <div class="student-page">
    <h1 class="student-page-title">
      Информация об ученике: {{ currentStudent.name }}
    </h1>
    <div class="student-page-info">
      <div class="student-page-info-item">
        <span>Количество занятий в месяц</span>
        <span>{{ currentStudent.classesPerMonth }}</span>
      </div>
      <div
        v-if="currentStudent.classesDays"
        class="student-page-info-item"
      >
        <span>Дни посещения</span>
        <span>{{ currentStudent.classesDays | joinArray }}</span>
      </div>
      <div
        v-if="currentStudent.favoriteGenres"
        class="student-page-info-item"
      >
        <span>Любимые жанры</span>
        <span>{{ currentStudent.favoriteGenres | joinArray }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Id',
  filters: {
    joinArray: v => v.split.join(', '),
  },
  data() {
    return {
      test: null,
    };
  },
  computed: {
    ...mapGetters('students', ['getStudentById']),
    currentStudent() {
      return this.getStudentById(+this.$route.params.id) || {};
    },
  },
};
</script>

<style lang="sass" scoped>
.student-page
  &-title
    text-align: center

  &-info
    margin-top: 20px

  &-info-item
    display: flex
    justify-content: space-between

    &::before
      content: ''
      flex: 1
      order: 1
      border-bottom: 1px dashed red
      position: relative
      top: -7px

    span
      padding: 0 5px

      &:first-of-type
        order: 0

      &:last-of-type
        order: 2

@media all and (max-width: 400px)
  .student-page
    &-info-item
      justify-content: flex-start

      &::before
        content: ':'
        margin: 0 5px 0 2px
        top: 0
        border: none
        flex: 0

      span
        padding: 0
</style>
