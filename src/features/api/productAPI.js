import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const productsAPI = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://60f02c43f587af00179d3db4.mockapi.io"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        })
    })
})
export const {useGetAllProductsQuery} = productsAPI