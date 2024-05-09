"use client";
import React, { useState, useEffect } from "react";
import RestaurantCard from "../cards/RestaurantCard";
import styles from "./style.module.css";
import { RestaurantApi } from "@/api/restaurantsApi";
import { RestaurantResponseDTO } from "@/interfaces/restaurants-response.dto";

export default function InfiniteScroll() {
    const [data, setData] = useState<RestaurantResponseDTO[]>([]);
    const [page, setPage] = useState(1);
    const [finishData, setFinishData] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const take = 4;
        const newData = await RestaurantApi.getRestaurants(page, take);
        setData([...data, ...newData]);
        setPage(page + 1);
        if (newData.length < take) setFinishData(true);
        setLoading(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop !==
                    document.documentElement.offsetHeight ||
                loading ||
                finishData
            )
                return;
            fetchData();
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [data, loading]);

    return (
        <div className={styles.infiniteScrollContainer}>
            {data.map((item, index) => (
                <RestaurantCard
                    key={index}
                    text={item.name}
                    src={item.image}
                />
            ))}
            {loading && <div className={styles.loading}>Loading...</div>}
        </div>
    );
}
