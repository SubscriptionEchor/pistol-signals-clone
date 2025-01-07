'use client'
import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './speedometer.scss'

const Speedometer = () => {
    const staticContent = {
        tradeConfidence: 'Trade Confidence',
        type: 'Strong Buy'
    }
    return (
        <div className='p-3 d-flex flex-column align-items-center'>
            <p className='tradeConfidence m-0 m-1'>{staticContent?.tradeConfidence}</p>
            <GaugeChart id="gauge-chart4"
                nrOfLevels={6}  // Changed to 3 levels to match the image
                colors={["#FF5F6D", "#FFC371", '#30AD43']}  // Keeping your colors
                arcWidth={0.1}  // Increased from 0.1 to 0.3 to match the thicker gauge
                percent={0.37}
                cornerRadius={0}
                formatTextValue={() => ''}
                // arcPadding={2}
                style={{
                    // height: 100,
                    width: 150
                }}
                needleColor="white"  // Added darker needle color
                needleBaseColor="white"  // Added darker needle base color
                textColor="white"  // Added to match the text color
            />
            <p className='type'>{staticContent?.type}</p>
        </div >

    );
};

export default Speedometer;