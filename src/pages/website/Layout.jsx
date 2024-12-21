import React from 'react'
import { Outlet } from 'react-router-dom';
import MyHeader from '../../Components/header';
import MyFooter from '../../Components/footer';

export default function Layout() {
    return (
        <>
            <MyHeader />
            <Outlet />
            <MyFooter />
        </>
    )
}