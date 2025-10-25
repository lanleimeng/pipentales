import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axiosClient.post("/users/login", credentials);
      if (res.data.user.role !== "admin") {
        return rejectWithValue("Not authorized as admin");
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("adminData", JSON.stringify(res.data.user));
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);
