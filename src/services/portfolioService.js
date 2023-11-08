//axios for backend connectivity

import axios from "axios";

const BASE_URL = 'http://localhost:8080/api';

const portfolioService = {
    //Function to fetch all portfolio items
    getAllPortfolioItems: async () => {
        //error handling
        try {
            const response = await axios.get(`${BASE_URL}/get`);
            return response.data
        } catch (error) {
            throw error;
        }
    },


    //Function to add a new portfolio item

    addPortfolioItem: async (item) => {
        try{
            const response = await axios.post(`${BASE_URL}/post`, item);
            return response.data;

        } catch (error) {
            throw error;
        }
    },


    //Function to update a portfolio item
    updatePortfolioItem: async (itemId,updatedItem) =>{
        try{
            const response = await axios.put(`${BASE_URL}/update/${itemId}`,updatedItem);
            return response.data;
        } catch(error){
            throw error;
        }
    },


    //Function to delete a portfolio item
    deletePortfolioItem: async (itemId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/delete/${itemId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
}


export default portfolioService;