import { createContext, useContext, useState, useEffect, useRef } from 'react';

export const TableContext = createContext();
const cryptoNames = {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    BNB: 'Binance Coin',
    XRP: 'XRP',
    SOL: 'Solana',
    ADA: 'Cardano',
    DOGE: 'Dogecoin',
    AVAX: 'Avalanche',
    TRX: 'TRON',
    LINK: 'Chainlink'
};

export const TableProvider = ({ children }) => {
    const [tableData, setTableData] = useState([]);
    const dataRef = useRef(new Map());
    const intervalRef = useRef(null);
    const wsRef = useRef(null);

    const fetch7DayData = async (symbol) => {
        try {
            const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1w&limit=2`);
            const data = await response.json();
            if (data && data.length >= 2) {
                const [previousWeek, currentWeek] = data;
                const openPrice = parseFloat(previousWeek[1]);
                const currentPrice = parseFloat(currentWeek[4]);
                return ((currentPrice - openPrice) / openPrice) * 100;
            }
            return null;
        } catch (error) {
            console.error(`Error fetching 7d data for ${symbol}:`, error);
            return null;
        }
    };

    const update7DayData = async () => {
        const symbols = [
            'BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'SOLUSDT',
            'ADAUSDT', 'DOGEUSDT', 'AVAXUSDT', 'TRXUSDT', 'LINKUSDT'
        ];

        for (const symbol of symbols) {
            const change7d = await fetch7DayData(symbol);
            const plainSymbol = symbol.replace('USDT', '');
            const currentData = dataRef.current.get(plainSymbol) || {};

            if (change7d !== null) {
                dataRef.current.set(plainSymbol, {
                    ...currentData,
                    price7dChangePercent: change7d
                });
            }
        }
    };

    const cleanup = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            wsRef.current.close();
            wsRef.current = null;
        }
    };

    useEffect(() => {
        const symbols = [
            'BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'SOLUSDT',
            'ADAUSDT', 'DOGEUSDT', 'AVAXUSDT', 'TRXUSDT', 'LINKUSDT'
        ];

        wsRef.current = new WebSocket('wss://stream.binance.com:9443/ws');

        const subscribeMessage = {
            method: 'SUBSCRIBE',
            params: [
                ...symbols.map(sym => `${sym.toLowerCase()}@ticker`),
                ...symbols.map(sym => `${sym.toLowerCase()}@kline_1h`),
                ...symbols.map(sym => `${sym.toLowerCase()}@kline_5m`)
            ],
            id: 1
        };

        update7DayData();
        intervalRef.current = setInterval(() => {
            const sortedData = Array.from(dataRef.current.values())
                .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            setTableData(sortedData);
            update7DayData();
        }, 2000);

        wsRef.current.onopen = () => {
            console.log('WebSocket Connected');
            wsRef.current.send(JSON.stringify(subscribeMessage));
        };

        wsRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.e === '24hrTicker') {
                const symbol = data.s.replace('USDT', '');
                const currentData = dataRef.current.get(symbol) || {};
                const marketCap = parseFloat(data.c) * parseFloat(data.v);

                const totalMarketCap = Array.from(dataRef.current.values())
                    .reduce((sum, coin) => sum + (coin.marketCap || 0), marketCap);

                const dominance = (marketCap / totalMarketCap) * 100;

                const updatedData = {
                    ...currentData,
                    symbol,
                    name: cryptoNames[symbol] || symbol,
                    price: parseFloat(data.c),
                    priceHistory: {
                        ...(currentData.priceHistory || {}),
                        current: parseFloat(data.c),
                        past1: currentData.priceHistory?.current || parseFloat(data.c),
                        past2: currentData.priceHistory?.past1 || parseFloat(data.c),
                        past3: currentData.priceHistory?.past2 || parseFloat(data.c)
                    },
                    price24hChange: parseFloat(data.p),
                    price24hChangePercent: parseFloat(data.P),
                    marketCap: parseFloat(data.c) * parseFloat(data.v),
                    volume24h: parseFloat(data.q),
                    circulatingSupply: parseFloat(data.v),
                    high24h: parseFloat(data.h),
                    low24h: parseFloat(data.l),
                    dominance: dominance
                };

                dataRef.current.set(symbol, updatedData);
            }

            if (data.e === 'kline') {
                const symbol = data.s.replace('USDT', '');
                const currentData = dataRef.current.get(symbol) || {};
                const priceChange = ((parseFloat(data.k.c) - parseFloat(data.k.o)) / parseFloat(data.k.o)) * 100;

                if (data.k.i === '1h') {
                    dataRef.current.set(symbol, {
                        ...currentData,
                        price1hChangePercent: priceChange
                    });
                }
            }
        };

        wsRef.current.onerror = (error) => {
            console.error('WebSocket error:', error);
            cleanup();
        };

        wsRef.current.onclose = () => {
            console.log('WebSocket disconnected');
            cleanup();
        };

        return () => {
            cleanup();
        };
    }, []);

    return (
        <TableContext.Provider value={{ tableData }}>
            {children}
        </TableContext.Provider>
    );
};