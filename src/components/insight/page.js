'use client'
import { useEffect, useState } from "react";
import './insight.scss'
import Image from "next/image";

export default function Insights({ title }) {
    const [currentInsight, setCurrentInsight] = useState('gainersandloosers')
    const sections = [
        {
            title: 'Gainers and loosers',
            path: 'gainersandloosers'
        },
        {
            title: 'Total market cap',
            path: 'marketcap'
        },
        {
            title: "Data visualization charts",
            path: 'confidence'
        },
        {
            title: 'Trading signals',
            path: "signals",
        },
        {
            title: 'Telegram access',
            path: "telegram",
        },
    ];
    useEffect(() => {
        // Create an interval to change insights automatically
        const interval = setInterval(() => {
            // Find current index
            const currentIndex = sections.findIndex(item => item.path === currentInsight);
            // Calculate next index (loop back to 0 if at the end)
            const nextIndex = (currentIndex + 1) % sections.length;
            // Set the next insight
            setCurrentInsight(sections[nextIndex].path);
        }, 3000); // 1000ms = 1 second

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [currentInsight, sections]);

    return (
        <div className="container-fluid">
            <div className="container py-5 section-2">
                <div className="row">
                    <div className="col-12 col-sm-5 col-xl-7  d-flex flex-column justify-content-center">
                        <p className="insight-title m-0 mb-4">{title}</p>
                        {sections?.map((item, index) => {
                            return (
                                <div onClick={() => setCurrentInsight(item.path)} key={index} className="d-flex align-items-center mt-3">
                                    <div className={`current-insight-indicator ${item?.path == currentInsight ? 'selected' : ''} `}></div>
                                    <p className={`insight-text m-0 ms-3  ${item?.path == currentInsight ? 'selected-text' : ''}`}>{item?.title}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-12 mt-5  mt-sm-0 col-sm-7  col-xl-5">
                        <div className="image-container">
                            <img
                                alt={currentInsight}
                                className={`${currentInsight ? 'active' : ''}`}
                                width="100%" height="100%" src={`/svg/${currentInsight}.svg`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}