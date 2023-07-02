import React from 'react'

function Chart() {
    return (
        <div className="relative flex overflow-x-hidden">
            <div className="p-2 px-6 animate-marquee2 whitespace-nowrap uppercase flex">
                <div className="stocks stock-1 flex space-between px-2 mx-1">
                    <span className="name ">nifty bank &emsp;</span>
                    <span className="price">&#8377;43200 &emsp;</span>
                    <span className="change text-green-500">0.01% &emsp;</span>
                </div>
                <div className="stocks stock-2 flex space-between px-2 mx-1">
                    <span className="name ">bajfinance&emsp;</span>
                    <span className="price">&#8377;6200 &emsp;</span>
                    <span className="change text-red-500">0.30% &emsp;</span>
                </div>
                <div className="stocks stock-3 flex space-between px-2 mx-1">
                    <span className="name ">bhartiairtel &emsp;</span>
                    <span className="price">&#8377;432 &emsp;</span>
                    <span className="change text-green-500">0.69% &emsp;</span>
                </div>
                <div className="stocks stock-4 flex space-between px-2 mx-1">
                    <span className="name ">hindulvr&emsp;</span>
                    <span className="price">&#8377;352.60 &emsp;</span>
                    <span className="change text-red-500">1.1% &emsp;</span>
                </div>
                <div className="stocks stock-5 flex space-between px-2 mx-1">
                    <span className="name ">indigo&emsp;</span>
                    <span className="price">&#8377;2003.45 &emsp;</span>
                    <span className="change text-red-500">3.1% &emsp;</span>
                </div>

            </div>
        </div>

    )
}

export default Chart
