import React from 'react';
import { Navbar } from "./Navbar2";
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const History = () => {
    var h =  [
        {
            year: "2022-2023",
            board: [
                {
                    name: "Jenny Lim",
                    position: "President"
                }, 
                {
                    name: "Jay Shin",
                    position: "Vice President"
                }, 
                {
                    name: "James Ahn",
                    position: "Treasurer"
                }, 
                {
                    name: "Jiyun Lee",
                    position: "Strategic Management"
                }, 
                {
                    name: "Ella Lee",
                    position: "Design Chair"
                }, 
                {
                    name: "Jinseong Kim",
                    position: "Secretary"
                }, 
                {
                    name: "Minwoong Jeong",
                    position: "Event Chair"
                }, 
            ]
        }
    ];

    var list = [];
    for (var i = 0; i < h.length; i++) {
        list.push(<h3>{h[i].year}</h3>);
        for (var j = 0; j < h[i].board.length; j++) {
            list.push(<p>{h[i].board[j].position}: {h[i].board[j].name}</p>)
        }
    }
    return (
        <>
            <Navbar/>
            <div className='history'>
                {list}

                
            </div>
        </>
    );
}
