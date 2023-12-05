export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory;
};

export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};

export type ChildCategoryItem = {
  name: string;
  urlPath: string;
};

export type ChildCategory = {
  list: ChildCategoryItem[];
};

export type Prices = {
  currency: string;
  regular: {
    value: number;
  };
};

export type Image = {
  path: string;
};

export type CategoryArticle = {
  articles: Article[];
};

export type GraphqlQuery = {
  query: string;
};
