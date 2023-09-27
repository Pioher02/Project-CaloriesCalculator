const notAllowedCategoriesByBloodType = [
  {
    bloodType: '1',
    categories: [],
  },
  {
    bloodType: '2',
    categories: [],
  },
  {
    bloodType: '3',
    categories: [],
  },
  {
    bloodType: '4',
    categories: [],
  },
];

export const getCategoriesByBloodType = bloodType => {
  return notAllowedCategoriesByBloodType.find(
    item => item.bloodType === bloodType
  ).categories;
};
