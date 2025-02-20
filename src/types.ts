export type CategoriesStateTypes = {
  categories: Category[];
  loadingCategories: boolean;
  errorCategories: boolean;
};

export type Category = {
  id: number;
  name: string;
  display_name: string;
  image: string;
  is_closed: boolean;
  opens_at: string;
  count_sub_categories: number;
};
