const formatData = (obj) => {
  const format = { ...obj._doc };
  format.id = obj._id;
  delete format._id;
  delete format.__v;
  return format;
};

module.exports = formatData;
