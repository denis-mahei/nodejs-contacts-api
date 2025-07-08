const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const contactType = (type) => ['work', 'home', 'personal'].includes(type);

  if (contactType(type)) return type;
};

const parseIsFavourite = (favourite) => {
  if (typeof favourite !== 'string') return;

  if (favourite === 'true') return true;
  if (favourite === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
