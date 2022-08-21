import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fcd44bb9e38585cd46d946.mockapi.io/',
  }),
  tagTypes: ['Post, Delete'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Post', 'Delete'],
    }),
    addContact: builder.mutation({
      query: prevContacts => ({
        url: 'contacts',
        method: 'POST',
        body: prevContacts,
      }),
      invalidatesTags: ['Post'],
    }),
    deleteContact: builder.mutation({
      query: (contactId, prevContacts) => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
        body: prevContacts,
      }),
      invalidatesTags: ['Delete'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = apiSlice;
