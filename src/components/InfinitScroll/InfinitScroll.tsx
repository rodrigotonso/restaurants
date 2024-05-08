"use client";
import React, { useState, useEffect } from "react";
import RestaurantCard from "../cards/RestaurantCard";
import styles from "./style.module.css";

export default function InfiniteScroll() {
    const [data, setData] = useState([1, 2, 3, 4, 5]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        // const newData = await fetchMoreData(page);
        // setData([...data, ...newData]);
        console.log("first")
        setPage(page + 1);
        setLoading(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 60
            )
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
                    text="The Italian Food"
                    src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            ))}
            {loading && <div>Loading...</div>}
        </div>
    );
}
