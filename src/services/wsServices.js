
const SOCKET_API = {
    'binance': (callback) => {
        return WebsocketApi(`wss://stream.binance.com:9443/ws`, data => callback(data))
    }
};




// let client = SOCKET_API['binance']('btc', (price)=> console.log(price))
// client.close()

// Object.keys(SOCKET_API)

function WebsocketApi(params, callback) {
    const socket = new WebSocket(params);

    // Handle the WebSocket connection open event
    socket.onopen = () => {
        console.log('WebSocket connection established');
        const subscriptionMessage = {
            method: "SUBSCRIBE",
            params: [
                "!ticker@arr" // Subscribe to the ticker array
            ],
            id: 1
        };

        socket.send(JSON.stringify(subscriptionMessage));
    };

    // Handle incoming messages
    socket.onmessage = e => {
        const tickers = JSON.parse(e?.data);
        if (Array.isArray(tickers)) {
            // Filter for USDT pairs and extract desired data
            const usdtTickers = tickers
                .filter(ticker => ticker.s.endsWith('USDT'))
            callback(usdtTickers)
        }
        callback([])
    };

    // Handle errors
    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    // Handle the WebSocket connection close event
    socket.onclose = () => {
        console.log('WebSocket connection closed');
    };

    return socket;
}


export { SOCKET_API }

