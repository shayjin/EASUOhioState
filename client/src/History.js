import React from 'react';
import { Navbar } from "./Navbar2";
import {Link, Route, Routes, BrowserRouter } from 'react-router-dom';

export const History = () => {
    window.scrollTo(0, 0);
    var h =  [
        {
            year: "2023-2024",
            board: [
                {
                    name: "Jenny Lim",
                    position: "Co-President"
                }, 
                {
                    name: "Derek Han",
                    position: "Co-President"
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
                    position: "Secretary / Outreach Chair"
                }, 
                {
                    name: "Annabel Kim",
                    position: "Sponsor Relations"
                }, 
                {
                    name: "Ella Lee",
                    position: "Design Chair Lead"
                }, 
                {
                    name: "Minwoong Jeong",
                    position: "Event Chair Lead"
                }, 
                {
                    name: "Wayne Chiang",
                    position: "Technology Chair"
                }, 
                {
                    name: "Kelly Yan",
                    position: "Design Chair"
                }, 
                {
                    name: "James An",
                    position: "Event Chair"
                }, 
            ]
        }, 
        {
            year: "2022-2023",
            board: [
                {
                    name: "Jenny Lim",
                    position: "Founder / President"
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
                    name: "Jinseong Kim",
                    position: "Secretary"
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
                    name: "Minwoong Jeong",
                    position: "Event Chair"
                }, 
            ]
        }
    ];

    var list = [];
    var list2 = [];
    for (var i = 0; i < h.length; i++) {
        list.push(<><h3>{h[i].year}</h3></>);
        for (var j = 0; j < h[i].board.length; j++) {
            list.push(<p><b>{h[i].board[j].position}:</b> {h[i].board[j].name}</p>)
        }

        list2.push(<div className='historySection'>{list}</div>);
        list = [];
    }




    list.push('</div>');
    return (
        <>
            <Navbar/>
            <div className='history'>
                {list2}

                
            </div>
        </>
    );
}
