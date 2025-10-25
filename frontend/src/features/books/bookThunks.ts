import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const res = await axiosClient.get("/books");
  return res.data;
});

export const addBook = createAsyncThunk(
  "books/addBook",
  async (bookData: { title: string; price: number; fileUrl: string }) => {
    const res = await axiosClient.post("/books", bookData);
    return res.data;
  }
);
