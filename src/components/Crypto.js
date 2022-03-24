import TradingViewWidget from 'react-tradingview-widget';


const Crypto = () => {
    return (
        <div id="Crypto" class="container p-3 mb-2 bg-dark text-light" style={{height:600}}>
            <TradingViewWidget 
                symbol="BTCUSD"
                locale="en"
                timezone= "America/Los_Angeles"
                autosize
                Themes="LIGHT"
                RangeTypes="ALL"
                />
        </div>
    );
};

export default Crypto;