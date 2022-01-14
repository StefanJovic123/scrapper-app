const defaultFields = [
  'id',
  'imageUrl',
  'title',
  'subtitle:',
  'paragraphs',
  'url',
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
