import React from "react";
// import React, { useRef } from 'react';
import Footer from "./Footer";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import DoughnutChart1 from "./DoughnutChart1";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import LineChart1 from "./LineChart1";
import EmptyChart from "./EmptyChart";
import NavHeader from "./NavHeader";


function Header () {
    // const changeLanguage = (language) => {
    //     Your changeLanguage logic here
    //     console.log(`Language changed to ${language}`);
    // };
    return(
<>
    <div>
        <header>

          {/* NavHeader */}
           <NavHeader></NavHeader>

            
        {/* SideNavBar */}
            <aside className="aside is-placed-left is-expanded">
            <div className="aside-tools" style={{ marginTop: '1rem' }}>
            <div style={{
                color: '#7367F0',
                paddingLeft: '1rem',
                marginBottom: '0',
                fontWeight: '600',
                letterSpacing: '0.01rem',
                fontSize: '1.45rem',
                WebkitAnimation: '0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein',
                animation: '0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein'
            }}>
                Asset Gate
                {/* <b className="font-black">Gate</b> */}
            </div>
        </div>
        <div className="memenu-main" style={{marginTop:'0.5rem'}}>
        {/* <p class="menu-label">General</p> */}
        <ul className="menu-list" style={{
            background: 'linear-gradient(118deg, #7367F0, rgba(115, 103, 240, 0.7))',
            boxShadow: '0 0 10px 1px rgba(115, 103, 240, 0.7)',
            color: '#FFFFFF',
            fontWeight: '400',
            borderRadius: '4px',
            marginLeft: '1rem',
            marginRight: '1rem'
        }}>
            <li className="active">
                <a href="index.html" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    {/* <span className="icon"><i className="mdi mdi-desktop-mac"></i></span> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="White" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home" style={{
                        height: '20px',
                        width: '20px',
                        fontSize: '1.45rem',
                        marginRight: '1rem',
                        marginLeft: '0.9rem',
                        flexShrink: '0'
                    }}>
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className="menu-item-label" style={{ color: '#FFFFFF' }}>Dashboard</span>
                </a>
            </li>
        </ul>
        {/* <p class="menu-label">Examples</p> */}
        <ul className="menu-list">
      <li style={{marginLeft: '1rem'}}>
        <a className="dropdown">
          {/* <span class="icon"><i class="mdi mdi-view-list"></i></span> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-settings" style={{Height: '20px',
          width: '20px',
          fontSize: '1.45rem',
          marginRight: '1rem',
          marginLeft :'0.9rem',
          flexShrink: '0',
          color: '#625F6E',
          marginTop:'5px'}}><circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          <span className="menu-item-label" style={{Color: '#625F6E'}}>Setup</span>
          <span className="icon">
            {/* <i class="mdi mdi-plus"></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stoke="#625F6E"
            className="mdi mdi-plus" style={{color: '#625F6E'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg> 
          </span>
        </a>
        <ul>
          <li>
            <a href="#void">
              <span style={{color: '#625F6E'}}>Sub-item One</span>
            </a>
          </li>
          <li>
            <a href="#void">
              <span style={{color: '#625F6E'}}>Sub-item Two</span>
            </a>
          </li>
        </ul>
      </li>
      {/* Asset Management */}
      <li style={{marginLeft: '1rem'}}>
        <a className="dropdown">
          {/* <span class="icon"><i class="mdi mdi-view-list"></i></span> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-tag" style={{height: '20px',
          width: '20px',
          fontSize: '1.45rem',
          marginRight: '1rem',
          marginLeft: '1rem',
          flexShrink: '0'}}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span class="menu-item-label" style={{color: '#625F6E',    overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'}}>Asset Management</span>
          {/* <span class="icon"><i class="mdi mdi-plus"></i></span> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stoke="#625F6E"
          className="mdi mdi-plus" style={{color: '#625F6E', marginRight: '0.8rem'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        </a>
        <ul>
          <li>
            <a href="/AssetList">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" 
              style={{marginRight: '1.45rem',
              fontSize: '11px',
              height: '11px',
              width: '11px',
              marginLeft: '0.8rem',
              marginTop: '0.3rem',
              marginRight: '0.8rem'}}><circle cx="12" cy="12" r="10"></circle></svg>
              <span style={{color: '#625F6E'}}>Asset List</span>
            </a>
          </li>
          <li>
            <a href="/RegisterNewAsset">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" 
              style={{marginRight: '1.45rem',
              fontSize: '11px',
              height: '11px',
              width: '11px',
              marginLeft: '0.8rem',
              marginTop: '0.3rem',
              marginRight: '0.8rem'}}><circle cx="12" cy="12" r="10"></circle></svg>
              <span style={{color: '#625F6E'}}>Register New Asset</span>
            </a>
          </li>
          <li>
            <a href="BulkImport">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" 
              style={{marginRight: '1.45rem',
              fontSize: '11px',
              height: '11px',
              width: '11px',
              marginLeft: '0.8rem',
              marginTop: '0.3rem',
              marginRight: '0.8rem'}}><circle cx="12" cy="12" r="10"></circle></svg>
              <span style={{color: '#625F6E'}}>Bulk Import</span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- Printing --> */}
      <li style={{marginLeft: '1rem'}}>
        <a className="dropdown">
          {/* <span class="icon"><i class="mdi mdi-view-list"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" style={{height: '20px',
          width: '20px',
          fontSize: '1.45rem',
          marginRight: '1rem',
          marginLeft: '1rem',
          flexShrink:'0'}}><circle cx="12" cy="12" r="10"></circle></svg>
          <span className="menu-item-label" style={{color: '#625F6E'}}>Printing</span>
          {/* <!-- <span class="icon"><i class="mdi mdi-plus"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stoke="#625F6E"
          class="mdi mdi-plus" style={{color: '#625F6E', marginRight: '0.8rem'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        </a>
        <ul>
          <li>
            <a href="/EncodeTag">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" 
              style={{marginRight: '1.45rem',
              fontSize: '11px',
              height: '11px',
              width: '11px',
              marginLeft: '0.8rem',
              marginTop: '0.3rem',
              marginRight: '0.8rem'}}><circle cx="12" cy="12" r="10"></circle></svg>
              <span style={{color: '#625F6E'}}>Encode Tag</span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- Asset Allocations --> */}
      <li style={{marginLeft: '1rem'}}>
        <a className="dropdown">
          {/* <!-- <span class="icon"><i class="mdi mdi-view-list"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle" style={{height: '20px',
          width: '20px',
          fontSize: '1.45rem',
          marginRight: '1rem',
          marginLeft: '1rem',
          flexShrink: '0'}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span className="menu-item-label" style={{color: '#625F6E'}}>Asset Allocations</span>
          {/* <!-- <span class="icon"><i class="mdi mdi-plus"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stoke="#625F6E"
          className="mdi mdi-plus" style={{color: '#625F6E', marginRight: '0.8rem'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        </a>
        <ul>
          <li>
            <a href="/PendingAllocations">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" 
              style={{marginRight: '1.45rem',
              fontSize: '11px',
              height: '11px',
              width: '11px',
              marginLeft: '0.8rem',
              marginTop: '0.3rem',
              marginRight: '0.8rem'}}><circle cx="12" cy="12" r="10"></circle></svg>
              <span style={{color: '#625F6E'}}>Pending Allocations</span>
            </a>
          </li>
          <li>
            <a href="Allocated">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" 
              style={{marginRight: '1.45rem',
              fontSize: '11px',
              height: '11px',
              width: '11px',
              marginLeft: '0.8rem',
              marginTop: '0.3rem',
              marginRight: '0.8rem'}}><circle cx="12" cy="12" r="10"></circle></svg>
              <span style={{color: '#625F6E'}}>Allocated</span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- Audit Management --> */}
      <li style={{marginLeft: '1rem'}}>
        <a className="dropdown">
          {/* <!-- <span class="icon"><i class="mdi mdi-view-list"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle" style={{height: '20px',
          width: '20px',
          fontSize: '1.45rem',
          marginRight: '1rem',
          marginLeft :'0.9rem',
          flexShrink: '0',
          color: '#625F6E'}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <span className="menu-item-label" style={{color: '#625F6E',overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'}}>Audit Management</span>
          {/* <!-- <span class="icon"><i class="mdi mdi-plus"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stoke="#625F6E"
          className="mdi mdi-plus" style={{color: '#625F6E', marginRight: '0.8rem'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        </a>
        <ul>
          <li>
            <a href="/PlanNewAudit">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" 
              style={{marginRight: '1.45rem',
              fontSize: '11px',
              height: '11px',
              width: '11px',
              marginLeft: '0.8rem',
              marginTop: '0.3rem',
              marginRight: '0.8rem'}}><circle cx="12" cy="12" r="10"></circle></svg>
              <span style={{color: '#625F6E'}}>Plan New Audit</span>
            </a>
          </li>
          <li>
            <a href="/AuditsList">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" 
              style={{marginRight: '1.45rem',
              fontSize: '11px',
              height: '11px',
              width: '11px',
              marginLeft: '0.8rem',
              marginTop: '0.3rem',
              marginRight: '0.8rem'}}><circle cx="12" cy="12" r="10"></circle></svg>
              <span style={{color: '#625F6E'}}>Audits List</span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- Maintenance Management --> */}
      <li style={{marginLeft: '1rem'}}>
        <a className="dropdown">
          {/* <!-- <span class="icon"><i class="mdi mdi-view-list"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-settings" style={{height: '20px',
          width: '20px',
          fontSize: '1.45rem',
          marginRight: '1rem',
          marginLeft :'0.9rem',
          flexShrink: '0',
          color: '#625F6E'}}><circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          <span className="menu-item-label" style={{color: '#625F6E', overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'}}>Maintenance Management</span>
          {/* <!-- <span class="icon"><i class="mdi mdi-plus"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stoke="#625F6E"
          className="mdi mdi-plus" style={{color: '#625F6E', marginRight: '0.8rem'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        </a>
        <ul>
          <li>
            <a href="/AssetMaintenance">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-circle" 
              style={{marginRight: '1.45rem',
              fontSize: '11px',
              height: '11px',
              width: '11px',
              marginLeft: '0.8rem',
              marginTop: '0.3rem',
              marginRight: '0.8rem'}}><circle cx="12" cy="12" r="10"></circle></svg>
              <span style={{color: '#625F6E'}}>Asset Maintenance</span>
            </a>
          </li>
        </ul>
      </li>
      {/* <!-- Transfer Management --> */}
      <li className="--set-active-tables-html" style={{marginLeft: '1rem'}}>
        <a href="tables.html">
          {/* <!-- <span class="icon"><i class="mdi mdi-table"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share" style={{height: '20px',
          width: '20px',
          fontSize: '1.45rem',
          marginRight: '1rem',
          marginLeft: '1rem',
          flexShrink: '0'}}><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
          <span className="menu-item-label" style={{color:' #625F6E',
              overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'}}>Transfer Management</span>
        </a>
      </li>
      {/* Reports */}
      <li style={{marginLeft: '1rem'}}>
        <a className="dropdown">
          {/* <!-- <span class="icon"><i class="mdi mdi-view-list"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#625F6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text" style={{height: '20px',
          width: '20px',
          fontSize: '1.45rem',
          marginRight: '1rem',
          marginLeft: '1rem',
          flexShrink: '0'}}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span className="menu-item-label" style={{color: '#625F6E'}}>Reports</span>
          {/* <!-- <span class="icon"><i class="mdi mdi-plus"></i></span> --> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stoke='#625F6E'
          className="mdi mdi-plus" style={{color: '#625F6E',marginRight: '0.8rem'}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
        </a>
        <ul>
          <li>
            <a href="#void">
              <span style={{color: '#625F6E'}}>Sub-item One</span>
            </a>
          </li>
          <li>
            <a href="#void" className="dropdown">
              <span style={{color: '#625F6E'}}>Sub-item Two</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>

        </div>
    {/* ); */}
            {/* <div className="navbar-dropdown">
            <a href="#" onClick={() => changeLanguage('en')} className="dropdown-item">
                <img style={{ maxWidth: '40px', maxHeight: '40px' }} src="usa.png" alt="English Flag" className="mr-2" />
                English
            </a>
            <a href="#" onClick={() => changeLanguage('ar')} className="dropdown-item" id="company">
                <img style={{ maxWidth: '40px', maxHeight: '40px' }} src="saa.png" alt="Arabic Flag" className="mr-2" />
                العربية
            </a>
            <hr className="navbar-divider" />
        </div> */}

            </aside>
            {/* SideNavbar END */}

            {/* Statistics */}
            <div className="col-xl-12 col-md-12 col-12" style={{marginLeft: 'auto', marginRight: 'auto', flex: '0 0 100%', maxWidth: '100%', marginTop: '2rem'}}>
      <div className="card card-statistics" style={{boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)', marginLeft: '1rem', marginRight: '1rem', borderRadius: '1rem'}}>
        <div className="card-header">
          <h4 className="card-title" style={{color: '#625F6E', fontSize: '1.286rem'}}>Statistics</h4>
          <div className="d-flex align-items-center">
            <p className="card-text font-small-2 mr-25 mb-0" style={{fontSize: '0.8rem', color: '#625F6E'}}>Current stats</p>
          </div>
        </div>
        <div className="card-body statistics-body" style={{padding: '2rem 2.4rem '}}>
          <div className="row" style={{display: 'flex', flexWrap: 'wrap', marginBottom: '1rem'}}>
            {/* Total Buildings */}
            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-2">
      <div className="media">
        <div className="avatar bg-light-primary mr-2" style={{color: '#7367f0 ', marginRight: '1.5rem '}}>
          <div className="avatar-content" style={{whiteSpace: 'nowrap', background: 'rgba(115, 103, 240, 0.12) ', borderRadius: '50%', position: 'relative', cursor: 'pointer', display: 'inline-flex', fontSize: '1rem', textAlign: 'center', verticalAlign: 'middle', fontWeight: '600', width: '48px', height: '48px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home avatar-icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          </div>
        </div>
        <div className="media-body my-auto" style={{marginBottom: 'auto', marginTop: 'auto', flex: '1'}}>
          <h4 className="font-weight-bolder mb-0" style={{fontWeight: '600', fontSize: '1.286rem', color: '#6e6b7b'}}>2</h4>
          <p className="card-text font-small-3 mb-0" style={{fontSize: '0.9rem', color: '#625F6E'}}>Total Buildings</p>
        </div>
      </div>
    </div>
            {/* Total Floors */}
            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
      <div className="media">
        <div className="avatar bg-light-primary mr-2" style={{color: '#7367f0', marginRight: '1.5rem'}}>
          <div className="avatar-content" style={{whiteSpace: 'nowrap', background: 'rgba(115, 103, 240, 0.12) ', borderRadius: '50%', position: 'relative', cursor: 'pointer', display: 'inline-flex', fontSize: '1rem', textAlign: 'center', verticalAlign: 'middle', fontWeight: '600', width: '48px', height: '48px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers avatar-icon"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          </div>
        </div>
        <div className="media-body my-auto">
          <h4 className="font-weight-bolder mb-0" style={{fontWeight: '600', fontSize: '1.286rem', color: '#6e6b7b'}}>5</h4>
          <p className="card-text font-small-3 mb-0" style={{fontSize: '0.9rem ', color: '#625F6E'}}>Total Floors</p>
        </div>
      </div>
    </div>
            {/* Total Room Categories */}
            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
      <div className="media">
        <div className="avatar bg-light-primary mr-2" style={{color: '#7367f0', marginRight: '1.5rem '}}>
          <div className="avatar-content" style={{whiteSpace: 'nowrap', background: 'rgba(115, 103, 240, 0.12) ', borderRadius: '50%', position: 'relative', cursor: 'pointer', display: 'inline-flex', fontSize: '1rem', textAlign: 'center', verticalAlign: 'middle', fontWeight: '600', width: '48px', height: '48px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box avatar-icon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
        </div>
        <div className="media-body my-auto">
          <h4 className="font-weight-bolder mb-0" style={{fontWeight: '600 ', fontSize: '1.286rem', color: '#6e6b7b'}}>5</h4>
          <p className="card-text font-small-3 mb-0" style={{fontSize: '0.9rem ', color: '#625F6E'}}>Total Room Categories</p>
        </div>
      </div>
    </div>
            {/* Total Rooms */}
            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
      <div className="media">
        <div className="avatar bg-light-primary mr-2" style={{color: '#7367f0 ', marginRight: '1.5rem '}}>
          <div className="avatar-content" style={{whiteSpace: 'nowrap', background: 'rgba(115, 103, 240, 0.12) ', borderRadius: '50%', position: 'relative', cursor: 'pointer', display: 'inline-flex', fontSize: '1rem', textAlign: 'center', verticalAlign: 'middle', fontWeight: '600', width: '48px', height: '48px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square avatar-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
          </div>
        </div>
        <div className="media-body my-auto">
          <h4 className="font-weight-bolder mb-0" style={{fontWeight: '600 ', fontSize: '1.286rem', color: '#6e6b7b'}}>6</h4>
          <p className="card-text font-small-3 mb-0" style={{fontSize: '0.9rem ', color: '#625F6E'}}>Total Rooms</p>
        </div>
      </div>
    </div>
            {/* Total Asset Categories */}
            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
      <div className="media">
        <div className="avatar bg-light-primary mr-2" style={{color: '#7367f0 ', marginRight: '1.5rem '}}>
          <div className="avatar-content" style={{whiteSpace: 'nowrap', background: 'rgba(115, 103, 240, 0.12) ', borderRadius: '50%', position: 'relative', cursor: 'pointer', display: 'inline-flex', fontSize: '1rem', textAlign: 'center', verticalAlign: 'middle', fontWeight: '600', width: '48px', height: '48px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-justify avatar-icon"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
          </div>
        </div>
        <div className="media-body my-auto">
          <h4 className="font-weight-bolder mb-0" style={{fontWeight: '600 ', fontSize: '1.286rem', color: '#6e6b7b'}}>3</h4>
          <p className="card-text font-small-3 mb-0" style={{fontSize: '0.9rem ', color: '#625F6E'}}>Total Asset Categories</p>
        </div>
      </div>
    </div>
            {/* Total Asset Groups */}
            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
      <div className="media">
        <div className="avatar bg-light-primary mr-2" style={{color: '#7367f0 ', marginRight: '1.5rem'}}>
          <div className="avatar-content" style={{whiteSpace: 'nowrap', background: 'rgba(115, 103, 240, 0.12)', borderRadius: '50%', position: 'relative', cursor: 'pointer', display: 'inline-flex', fontSize: '1rem', textAlign: 'center', verticalAlign: 'middle', fontWeight: '600', width: '48px', height: '48px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-center avatar-icon"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>
          </div>
        </div>
        <div className="media-body my-auto">
          <h4 className="font-weight-bolder mb-0" style={{fontWeight: '600', fontSize: '1.286rem', color: '#6e6b7b'}}>4</h4>
          <p className="card-text font-small-3 mb-0" style={{fontSize: '0.9rem', color: '#625F6E'}}>Total Asset Groups</p>
        </div>
      </div>
    </div>
            {/* Total Audits */}
            <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
      <div className="media">
        <div className="avatar bg-light-primary mr-2" style={{color: '#7367f0 ', marginRight: '1.5rem '}}>
          <div className="avatar-content" style={{whiteSpace: 'nowrap', background: 'rgba(115, 103, 240, 0.12) ', borderRadius: '50%', position: 'relative', cursor: 'pointer', display: 'inline-flex', fontSize: '1rem', textAlign: 'center', verticalAlign: 'middle', fontWeight: '600', width: '48px', height: '48px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard avatar-icon"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
          </div>
        </div>
        <div className="media-body my-auto">
          <h4 className="font-weight-bolder mb-0" style={{fontWeight: '600 ', fontSize: '1.286rem', color: '#6e6b7b'}}>44</h4>
          <p className="card-text font-small-3 mb-0" style={{fontSize: '0.9rem ', color: '#625F6E'}}>Audits</p>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
    {/* END */}


    {/* card graphs */}
    <div className="container">
  <div className="cart">
    <div className="cart-header">
    <div className="cart-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus-circle user-timeline-title-icon" style={{width: '1.714rem',
            height: '1.714rem',
            marginRight: '1.3rem'}}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            <h4 className="cart-title">Asset Category</h4>
            <h4 className="cart-title">Active Assets</h4>
        </div>
    </div>
    <div className="cart-body">
      <BarChart />


    </div>
  </div>
  <div className="cart">
    <div className="cart-header">
    <div className="cart-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus-circle user-timeline-title-icon" style={{width: '1.714rem',
            height: '1.714rem',
            marginRight: '1.3rem'}}><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            <h4 className="cart-title">Asset Category</h4>
            <h4 className="cart-title">InActive Assets</h4>
        </div>
    </div>
    <div className="cart-body">
      {/* <EmptyChart /> */}
    </div>
  </div>
  <div className="cart">
    <div className="cart-header">
    <div className="cart-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle user-timeline-title-icon" style={{width: '1.714rem',
            height: '1.714rem',
            marginRight: '1.3rem'}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <h4 className="cart-title">Asset Category</h4>
        <h4 className="cart-title">Tagged Assets</h4>
    </div>
    </div>
    <div className="cart-body">
      <LineChart />
      
    </div>
  </div>
  <div className="cart">
    <div className="cart-header">
    <div className="cart-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x-circle user-timeline-title-icon" style={{width: '1.714rem',
            height: '1.714rem',
            marginRight: '1.3rem'}}><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            <h4 className="cart-title">Asset Category</h4>
            <h4 className="cart-title">UnTagged Assets</h4>
        </div>
    </div>
    <div className="cart-body">
      <LineChart1 />
    </div>
  </div>
  <div className="cart">
    <div className="cart-header">
    <div className="cart-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-justify user-timeline-title-icon" style={{width: '1.714rem',
            height: '1.714rem',
            marginRight: '1.3rem'}}><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
            <h4 className="cart-title">Assets Status</h4>
        </div>
    </div>
    <div className="cart-body">
      <DoughnutChart />
    </div>
  </div>
  <div className="cart">
    <div className="cart-header">
    <div className="cart-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-justify user-timeline-title-icon" style={{width: '1.714rem',
            height: '1.714rem',
            marginRight: '1.3rem'}}><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
            <h4 className="cart-title">Assets Types</h4>
        </div>
    </div>
    <div className="cart-body">
     <DoughnutChart1 />
    </div>
  </div>
</div>
<div className="cart1">
    <div className="cart-header">
    <div className="cart-top">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-justify user-timeline-title-icon" style={{width: '1.714rem',
            height: '1.714rem',
            marginRight: '1.3rem'}}><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
            <h4 className="cart-title">Encoded And Non-Encoded</h4>
        </div>
    </div>
    <div className="cart-body">
     <PieChart />
      </div>
</div>
  {/* End */}
  {/* );
}; */}
          <Footer></Footer>
        <script src="/main.js"></script>
        <script src="/main1.js"></script>
        </header>
    </div>
</>
    );
}
export default Header;




