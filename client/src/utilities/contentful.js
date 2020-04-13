export const mapProductsData = products =>
  products.map(p => ({
    id: p.sys.id,
    slug: p.fields.slug,
    productName: p.fields.productName,
    image: p.fields.image,
    price: p.fields.price,
    quantity: p.fields.quantity,
  }));

export const mapSingleProductData = product => ({ id: product.sys.id, ...product.fields });

export const mapCategoryData = categoryData =>
  categoryData.items.map(category => ({
    id: category.sys.id,
    fieldName: category.fields.fieldName,
    title: category.fields.title,
  }));
