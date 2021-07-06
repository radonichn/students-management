const ADD_STUDENT = 'ADD_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

export const state = () => ({
  students: [
    {
      id: 0,
      name: 'Андрей',
      classesPerMonth: '8/60',
    },
    {
      id: 1,
      name: 'Маша',
      classesPerMonth: '2/90',
    },
    {
      id: 2,
      name: 'Лиза',
      classesPerMonth: '4/60',
    },
    {
      id: 3,
      name: 'Вася',
      classesPerMonth: '6/60',
    },
    {
      id: 4,
      name: 'Петя',
      classesPerMonth: '1/90',
    },
    {
      id: 5,
      name: 'Лиза',
      classesPerMonth: '4/60',
    },
  ],
});

export const mutations = {
  [ADD_STUDENT]: (state, payload) => {
    state.students.push(payload);
  },
  [EDIT_STUDENT]: (state, { student, editStudentId }) => {
    const students = [...state.students];
    const studentIndex = students.findIndex(v => v.id === editStudentId);
    students[studentIndex] = student;
    state.students = students;
  },
  [REMOVE_STUDENT]: (state, userId) => {
    state.students = state.students.filter(v => v.id !== userId);
  },
};

export const getters = {
  studentsTableData: (state) => {
    return state.students.map(({ id, name, classesPerMonth }) => ({
      id,
      name,
      classesPerMonth,
    }));
  },
  getStudentById: state => (id) => {
    return state.students.find(v => v.id === id);
  },
};

export const actions = {};
