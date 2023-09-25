import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "./types";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_ENDPOINT_URL,
  }),
  endpoints: (builder) => ({
    itemList: builder.query<Product[], void>({
      query: () => {
        return {
          url: "items",
          method: "GET",
        };
      },
    }),
    addItem: builder.mutation<void, { item: Product }>({
      query: ({ item }) => {
        return {
          url: "items",
          method: "POST",
          body: {
            item,
          },
        };
      },
    }),
  }),
});

export const { useItemListQuery, useAddItemMutation } = productApi;

export default productApi;
