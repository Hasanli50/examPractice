const formatShop = (obj) => {
  let formatShops = { ...obj._doc };
  formatShops.id = obj._id;
  delete formatShops._id;
  delete formatShops.__v;
  return formatShops;
};
module.exports = formatShop;
