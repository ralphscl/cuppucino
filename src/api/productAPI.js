/**
 * Public API data from SampleAPIs
 * ------------------------------------------ */

import axios from "axios";

const baseUrl = "https://api.sampleapis.com/"

/**
 * Fetch all Coffee based on category
 * 
 * @param {string} category - hot or iced
 * 
 * @returns Array of coffee details
 */
export const fetchCoffees = async (category) => {

    let parameters = `coffee/${category}`;

    try {
        const response = await axios.get(baseUrl + parameters);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

/**
 * Fetch all Coffee based on category
 * 
 * @param {string} category - hot or iced
 * @returns Array of coffee details
 */
export const fetchRecipes = async () => {

    let parameters = `recipes/recipe`;

    try {
        const response = await axios.get(baseUrl + parameters);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}