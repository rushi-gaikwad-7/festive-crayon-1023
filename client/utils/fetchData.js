// import axios from "axios";

// export const postApi = async (url, post, token) => {
//     const res = await axios.post(`/auth/${url}`, post, {
//         headers: { Authorization: token },
//         withCredentials: true,
//     });

//     return res;
// };

// export const getApi = async (url, token) => {
//     const res = await axios.get(`/auth/${url}`, {
//         headers: { Authorization: token },
//         withCredentials: true,
//     });

//     return res;
// };

import axios from "axios";

export const postAPI = async (url, post, token) => {
    const res = await axios.post(`/auth/${url}`, post, {
        headers: { Authorization: token },
        withCredentials: true,
    });

    return res;
};

export const getAPI = async (url, token) => {
    const res = await axios.get(`/auth/${url}`, {
        headers: { Authorization: token },
        withCredentials: true,
    });

    return res;
};
