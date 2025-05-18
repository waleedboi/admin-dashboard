import React, { useState, useEffect, useRef } from 'react';
import "../CSS/home.css";

const Overview = () => {
    const [activeDelivery, setActiveDelivery] = useState('On the way');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Monthly');
    const dropdownRef = useRef(null);
    const options = ['Monthly', 'Weekly', 'Daily'];

    const deliveryData = [
        { status: 'On the way', img: '/car2.svg', percent: '39.7%' },
        { status: 'Unloading', img: '/arrow-down-circle.svg', percent: '29.7%' },
        { status: 'Loading', img: '/arrow-up-circle.svg', percent: '17.4%' },
        { status: 'Waiting', img: '/clock.svg', percent: '14.6%' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="main-content">
            <div className="content-area">
                <h1 className="page-title">Overview</h1>

                {/* First Row */}
                <div className="row align-items-stretch">
                    <div className="col-md-6 col-lg-5" id="congration">
                        <div className="card h-100">
                            <div className="congratulation-card">
                                <div className="congrats-row">
                                    <div className="congrats-info">
                                        <h4>Congratulations Lucas 🎉</h4>
                                        <p>Best seller of the month</p>
                                        <div className="amount">$48.9k</div>
                                        <button className="btn btn-view-sales">View Sales</button>
                                    </div>
                                    <div className="congrats-image-wrapper">
                                        <img src="/verify-your-email-illustration.svg" alt="Celebration" className="congrats-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7" id="congration">
                        <div className="card">
                            <div className="stats-card">
                                <h5 className="stats-title">Statistics</h5>
                                <div className="stats-container">
                                    <div className="stat-item">
                                        <img src="/Icon.svg" alt="" />
                                        <div className="stat-info">
                                            <div className="stat-value">230k</div>
                                            <div className="stat-label">Users</div>
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <img src="/Icon1.svg" alt="" />
                                        <div className="stat-info">
                                            <div className="stat-value">8.549k</div>
                                            <div className="stat-label">Total Drivers</div>
                                        </div>
                                    </div>
                                    <div className="stat-item" id="state-itemee">
                                        <img src="/Icon2.svg" alt="" />
                                        <div className="stat-info">
                                            <div className="stat-value">1.423k</div>
                                            <div className="stat-label">Total Deliveries</div>
                                        </div>
                                    </div>
                                    <div className="stat-item" id="state-iteme">
                                        <img src="/Icon4.svg" alt="" />
                                        <div className="stat-info">
                                            <div className="stat-value">$9745</div>
                                            <div className="stat-label">Revenue</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7" id="congration">
                        <div className="card">
                            <div className="earning-card">
                                <div className="card-header">
                                    <h5 className="card-title">Total Earning</h5>
                                    <div className="custom-dropdown" ref={dropdownRef}>
                                        <button className="btn dropdown-toggle" onClick={toggleDropdown}>
                                            {selectedOption}
                                            <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>▼</span>
                                        </button>
                                        {isOpen && (
                                            <ul className="dropdown-menu">
                                                {options.map((option) => (
                                                    <li
                                                        key={option}
                                                        className={`dropdown-item ${option === selectedOption ? 'active' : ''}`}
                                                        onClick={() => handleOptionSelect(option)}
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <div className="earning-info">
                                    <span className="earning-percentage">87%</span>
                                    <span className="earning-change">
                                       <img src='/public/chevron-up.svg'></img>   25.8%
                                    </span>
                                </div>
                                <div className="chart-wrapper">
                                    <div className="chart-row primary-row">
                                        {[70, 45, 100, 50, 65, 85, 75, 30].map((h, i) => (
                                            <div key={i} className="chart-bar primary" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                    <div className="chart-rows secondary-row">
                                        {[50, 40, 70, 40, 45, 65, 55, 20].map((h, i) => (
                                            <div key={i} className="chart-bar secondary" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="stat-itemss">
                                    <img src="/Iconlast.svg" alt="Icon" />
                                    <div className="stat-informationss">
                                        <div className="stat-valuess">Total Revenue</div>
                                        <div className="stat-labelss">Client Payment</div>
                                    </div>
                                    <p className="stat-amount">+$126</p>
                                </div>
                                <div className="stat-itemsss">
                                        <img src="/Iconss.svg" alt="Icon" />
                                    <div className="stat-informations">
                                        <div className="stat-valuess">Total Sales</div>
                                        <div className="stat-labelss">Refund</div>
                                    </div>
                                    <p className="stat-amount">+$98</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5" id="congration">
                        <div className="card">
                            <div className="delivery-card">
                                <div className="card-header">
                                    <h5 className="card-titles">Delivery overview</h5>
                                    <img src="/dots-vertical.svg" alt="Menu" />
                                </div>
                                <div className="delivery-options">
                                    {['On the way', 'Unloading', 'Loading', 'Waiting'].map((status) => (
                                        <div
                                            key={status}
                                            className={`delivery-option ${activeDelivery === status ? 'active' : ''}`}
                                            onClick={() => setActiveDelivery(status)}
                                        >
                                            {status}
                                        </div>
                                    ))}
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar-wrapper">
                                        <div className="progress-bar way">39.7%</div>
                                        <div className="progress-bar unloading">28.3%</div>
                                        <div className="progress-bar loading">17.4%</div>
                                        <div className="progress-bar waiting">14.6%</div>
                                    </div>
                                </div>
                                {deliveryData.map((item, index) => (
                                    <div className="delivery-detail" key={index}>
                                        <div className="delivery-flex">
                                            <img src={item.img} alt={item.status} className="delivery-icon" />
                                            <div className="delivery-titles">{item.status}</div>
                                            <div className="delivery-time">3hr 15min</div>
                                            <div className="delivery-percent">{item.percent}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
