import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";

import { ADD_IMAGE, BASEURL, DELETE_IMAGE, FETCH_IMAGE, FETCH_IMAGES, REMOVEIMAGE, UDPDATE_IMAGE } from "../constants/constants";

export const getPhotos = createAsyncThunk(FETCH_IMAGES, async () => {
  const data = await fetch(`${BASEURL}/photos/`);
  const response = await data.json();
  return response || [];
});

export const gethoto = createAsyncThunk(FETCH_IMAGE, async (id) => {
    const response = await axios.get(`${BASEURL}/photos/${id}/`);
    return response.data;
  });
  

export const addPhotos = createAsyncThunk(ADD_IMAGE, async (post) => {
  const encodedToken = Cookies.get("ac-tok-en");
  const key = "accesstoken";
  const bytes = CryptoJS.AES.decrypt(encodedToken, key);
  const decryptedAccessToken = bytes.toString(CryptoJS.enc.Utf8);
  const response = await axios.post(`${BASEURL}/photos/`, post, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${decryptedAccessToken}`,
    },
  });
  return response.data;
});

export const edditPhoto = createAsyncThunk(UDPDATE_IMAGE, async (post) => {
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


export const deletePhoto = createAsyncThunk(DELETE_IMAGE, async (id) => {
    const encodedToken = Cookies.get("ac-tok-en");
    const key = "accesstoken";
    const bytes = CryptoJS.AES.decrypt(encodedToken, key);
    const decryptedAccessToken = bytes.toString(CryptoJS.enc.Utf8);
    const response = await axios.delete(`${BASEURL}/photos/${id}/delete/`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${decryptedAccessToken}`,
      },
    });
    return response.data;
  });
  

  export const removeBlog = (id) => ({
    type: REMOVEIMAGE,
    payload: id,
  });
  