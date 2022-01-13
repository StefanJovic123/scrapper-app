const defaultFields = [
  'id',
  'email',
  'firstName',
  'lastName',
  'password',
];

export default {
  read: {
    defaultFields
  },
  create: {
    returnFields: defaultFields
  },
  update: {
    returnFields: defaultFields
  },
};
