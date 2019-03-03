import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID db6d3dadb74d7f732c73b9cbf22cef974f5435ce62519126e1a82ddbe1e6945a' }
});

