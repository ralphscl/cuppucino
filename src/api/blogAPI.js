/**
 * Public API data from JSON Placeholder
 * ------------------------------------------ */

import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/"

/**
 * Fetch posts based on pagination
 * 
 * @param {int} page - Current page number
 * @param {int} limit - Limit per page 
 * 
 * @returns Array of post details
 */
export const fetchPosts = async (page, limit = 10) => {
    
    let parameters = `posts?_page=${page}&_limit=${limit}`;

    try {
        const response = await axios.get(baseUrl + parameters);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Fetch post based on Id
 * 
 * @param {*} postId - Current Blog Id
 * @returns - Single Post details
 */
export const fetchPost = async (postId) => {
    
    let parameters = `posts/${postId}`;
    let data = {}

    try {
        const response = await axios.get(baseUrl + parameters);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

/**
 * 
 * Fetch post's comments'
 * 
 * @param {*} postId - Current Blog Id
 * @returns - Array of post comments details
 */
export const fetchPostComment = async (postId) => {

    let parameters = `posts/${postId}/comments`;

    try {
        const response = await axios.get(baseUrl + parameters);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/**
 * 
 * Fetch User details'
 * 
 * @param {*} userId - Current User Id
 * @returns - Array of post user details
 */
export const fetchUser = async (userId) => {

    let parameters = `users/${userId}`;

    try {
        const response = await axios.get(baseUrl + parameters);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}