const filters = [
  {
    id: 'all',
    label: 'Todas',
    key: 'completed',
    value: null,
    default: true
  },
  {
    id: 'completed',
    label: 'Completadas',
    key: 'completed',
    value: true,
    default: false
  },
  {
    id: 'inProgress',
    label: 'En progreso',
    key: 'completed',
    value: false,
    default: false
  }
];

Object.freeze(filters);

export default filters;
