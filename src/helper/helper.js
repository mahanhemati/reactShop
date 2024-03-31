const getShortenText = (text) => {
  const NewText = text.split(" ").slice(0, 3).join(" ");
  return NewText;
};
const SearchProducts = (text, products) => {
  if (!text) return products;
  console.log(text);
  const New = products.filter((p) => p.title.toLowerCase().includes(text));
  return New;
};
const categoryProducts = (category, products) => {
  if (!category || category === "all") return products;
  console.log(category);
  const New = products.filter((p) =>
    p.category.toLowerCase().includes(category)
  );
  return New;
};
const sortProducts = (sortType, products) => {
  const Data = [...products];
  if (!sortType) return products;
  if (sortType)
    if (sortType === "populer") {
      const NewProduvts = Data.sort((a, b) => {
        return a.rating.rate - b.rating.rate;
      });
      return NewProduvts;
    }
  if (sortType === "terding") {
    const NewProduvts = products;
    return NewProduvts;
  }
};
const getInitialQuery = (CurenntQeury, NewQuery) => {
  if (NewQuery.category === "all") {
    const { category, ...rest } = CurenntQeury;
    return rest;
  }
  if (NewQuery.search === "") {
    const { search, ...rest } = CurenntQeury;
    return rest;
  }
  return { ...CurenntQeury, ...NewQuery };
};
//quentity
const sumProdutcs = (products) => {
  const itemCounter = products.reduce(
    (acc, curr) => acc + curr.quentity / 2,
    0
  );
  const total = products.reduce(
    (acc, curr) => acc + curr.price * curr.quentity + 1000 / 2,
    0
  );
  return { itemCounter, total };
};
const getItemCounter = (state, id) => {
  const index = state.selectedItem.findIndex((p) => p.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItem[index].quentity;
  }
};
export {
  getShortenText,
  SearchProducts,
  categoryProducts,
  getInitialQuery,
  sortProducts,
  sumProdutcs,
  getItemCounter,
};
