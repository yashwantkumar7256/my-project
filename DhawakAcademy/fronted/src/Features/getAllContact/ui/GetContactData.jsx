import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import api from "../../../api";

const GetContactData = () => {

    const { accessToken, setAccessToken } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);
    const [contactData, setContactData] = useState([]);

    // 1. Refresh Token API
    const refreshToken = async () => {
        try {

            const res = await api.get("/api/auth/refresh");

            setAccessToken(res.data.accessToken);

            return res.data.accessToken;

        } catch (err) {

            console.log("Refresh error:", err.response?.data || err.message);

            setAccessToken(null);

            return null;
        }
    };


    // 2. Get Contact Data
    const getData = async (token) => {

        try {

            const res = await api.get("/api/contact", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setContactData(res.data);

            console.log(res.data);

        } catch (err) {

            console.log("Contact error:", err.response?.data || err.message);

        } finally {

            setLoading(false);

        }
    };


    // 3. Authentication
    useEffect(() => {

        const initializeAuth = async () => {

            let token = accessToken;

            if (!token) {
                token = await refreshToken();
            }

            if (token) {
                await getData(token);
            } else {
                setLoading(false);
            }

        };

        initializeAuth();

    }, []);


    if (loading) {
        return <h1>Loading...</h1>;
    }


    return (
        <div className="bg-black text-white min-h-screen pt-10">

            <h1>Contact Data</h1>

            {JSON.stringify(contactData)}

        </div>
    );
};

export default GetContactData;