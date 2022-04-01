import React from 'react';
import {AdvancedRealTimeChart} from "react-ts-tradingview-widgets";


function Crypto () {
    return (
        <div id="Crypto" class="container p-5 mb-2 bg-dark text-light" style={{height:650, paddingBottom: 50}}>
            <AdvancedRealTimeChart theme="dark" interval='D' autosize symbol="BITSTAMP:BTCUSD" locale='en' style='1' allow_symbol_change='true' watchlist={["TSLA", "GME", "AMC", "AAPL", "BTCUSD"]}></AdvancedRealTimeChart>
        </div>
    );
};

export default Crypto;