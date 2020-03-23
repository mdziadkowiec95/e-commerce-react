export const mapProductsData = products => products.map(p => ({ id: p.sys.id, ...p.fields }));

export const mapCategoryData = categoryData =>
  categoryData.items.map(category => ({
    id: category.sys.id,
    title: category.fields.title,
  }));
