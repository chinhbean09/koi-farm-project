import {
  toolResponse,
  toolsArraySchema,
  toolSchema,
} from "@/schema/tool.schema";
import apiClient from "./apiClient";
import { ApiResponse } from "@/types/response";
import { ProductSchema, TProductResponse } from "@/schema/product.schema";
import { TCategoryResponse } from "@/schema/category.schema";
import { TTableResponse } from "@/types/table";

const toolApi = {
  getProducts: async (
    category?: string,
    name?: string
  ): Promise<TProductResponse[]> => {
    const response: ApiResponse<TProductResponse[]> = await apiClient.get(
      "products",
      {
        params: {
          category: category,
          name: name,
        },
      }
    );

    return response.data;
  },
  // getTool: async (id: string): Promise<toolResponse> => {
  //   const response: ApiResponse<toolResponse> = await apiClient.get(
  //     `favorite-art-tools/${id}`
  //   );

  //   return toolSchema.parse(response.data);
  // },
  getCategories: async (
    params?: any
  ) => {
    const response: ApiResponse<TTableResponse<TCategoryResponse>> = await apiClient.get(
      "categories",
      {
        params
      }
    );
    console.log("🚀 ~ response:", response)

    return response.data;
  },
};

export default toolApi;
