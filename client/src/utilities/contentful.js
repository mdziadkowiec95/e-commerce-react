export const filterProductsData = products => {
  const filtered = products.map(p => ({ id: p.sys.id, ...p.fields }));
  return filtered;
};
