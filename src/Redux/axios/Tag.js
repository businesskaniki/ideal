import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

import { ADD_TAG, BASEURL, DELETE_TAG, FETCH_TAG, FETCH_TAGS, REMOVETAG, UDPDATE_TAG } from "../constants/constants";

export const getTags = createAsyncThunk(FETCH_TAGS, async () => {
  const data = await fetch(`${BASEURL}tags/`);
  const response = await data.json();
  return response || [];
});

export const getTag = createAsyncThunk(FETCH_TAG, async (id) => {
    const response = await axios.get(`${BASEURL}tags/${id}/`);
    return response.data;
  });
  

  export const addTags = createAsyncThunk(ADD_TAG, async (post) => {
    const encodedToken = Cookies.get("ac-tok-en");
    const key = "accesstoken";
    const bytes = CryptoJS.AES.decrypt(encodedToken, key);
    const decryptedAccessToken = bytes.toString(CryptoJS.enc.Utf8);
    
    try {
      const response = await axios.post(`${BASEURL}tags/`, post, {
        withCredentials: false,
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
          Authorization: `Bearer ${decryptedAccessToken}`,
        },
      });
      
      
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Error adding tags:", error);
      throw error; // Rethrow the error to be caught by the Redux Toolkit
    }
  });
  

export const edditTag = createAsyncThunk(UDPDATE_TAG, async (post) => {
    const encodedToken = Cookies.get("ac-tok-en");
    const key = "accesstoken";
    const bytes = CryptoJS.AES.decrypt(encodedToken, key);
    const decryptedAccessToken = bytes.toString(CryptoJS.enc.Utf8);
    const response = await axios.patch(
      `${BASEURL}/posts/${post.id}/`,
      {
        title: post.title,
        content: post.content,
        image: post.image,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${decryptedAccessToken}`,
        },
      }
    );
    return response.data;
  });


export const deleteTag = createAsyncThunk(DELETE_TAG, async (id) => {
    const encodedToken = Cookies.get("ac-tok-en");
    const key = "accesstoken";
    const bytes = CryptoJS.AES.decrypt(encodedToken, key);
    const decryptedAccessToken = bytes.toString(CryptoJS.enc.Utf8);
    const response = await axios.delete(`${BASEURL}tags/${id}/delete/`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${decryptedAccessToken}`,
      },
    });
    return response.data;
  });
  

  export const removeBlog = (id) => ({
    type: REMOVETAG,
    payload: id,
  });
  