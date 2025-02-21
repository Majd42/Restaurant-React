export type CategoriesStateTypes = {
  categories: Category[];
  loadingCategories: boolean;
  errorCategories: boolean;
  categoryItems: CategoryItem[];
  loadingCategoryItems: boolean;
  errorCategoryItems: boolean;
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

export type CategoryItem = {
  id: number;
  image: string;
  price: number;
  name: string;
  display_name: string;
  calories: number | null;
  description: string;
  is_category_off: boolean;
  in_cart: boolean;
  in_cart_count: number;
  additional_items: any;
  dietarySymbols: any;
  extrasWithOptions: {
    is_active: number;
    name: string;
    max_options: number;
    extra_type_name: string;
    is_required: number;
    extra_id: number;
    option: {
      id: number;
      type: string;
      name: string;
      max_qty: number;
      option_has_price: boolean;
      currency: string;
      price: number;
      extrasWithOptions: any;
    }[];
  }[];
};

export type getCategoryItemsProps = {
  categoryId: string;
};
