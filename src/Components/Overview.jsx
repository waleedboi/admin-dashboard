import React, { useState, useEffect, useRef } from 'react';
import "../CSS/home.css"; // Import the new CSS file

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
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="overview-container">
            <div className="overview-scroll-wrapper">
                <div className="overview-content-area">
                    <h1 className="overview-page-title">Overview</h1>
                    <div className="overview-custom-row">
                        <div className="overview-custom-card congratulation">
                            <div className="overview-congratulation-card">
                                <div className="overview-congrats-row">
                                    <div className="overview-congrats-info">
                                        <h4 className="overview-congrats-title">Congratulations Lucas 🎉</h4>
                                        <p className="overview-congrats-desc">Best seller of the month</p>
                                        <div className="overview-amount">$48.9k</div>
                                        <button className="overview-btn-view-sales">View Sales</button>
                                    </div>
                                    <div className="overview-congrats-image-wrapper">
                                        <img src="/verify-your-email-illustration.svg" alt="Celebration" className="overview-congrats-image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* First row, second card */}
                        <div className="overview-custom-card statistics">
                            <div className="overview-card">
                                <div className="overview-stats-card">
                                    <h5 className="overview-stats-title">Statistics</h5>
                                    <div className="overview-stats-container">
                                        <div className="overview-stat-item">
                                            <img src="/Icon.svg" alt="" />
                                            <div className="overview-stat-info">
                                                <div className="overview-stat-value">230k</div>
                                                <div className="overview-stat-label">Users</div>
                                            </div>
                                        </div>
                                        <div className="overview-stat-item">
                                            <img src="/Icon1.svg" alt="" />
                                            <div className="overview-stat-info">
                                                <div className="overview-stat-value">8.549k</div>
                                                <div className="overview-stat-label">Total Drivers</div>
                                            </div>
                                        </div>
                                        <div className="overview-stat-item">
                                            <img src="/Icon2.svg" alt="" />
                                            <div className="overview-stat-info">
                                                <div className="overview-stat-value">1.423k</div>
                                                <div className="overview-stat-label">Total Deliveries</div>
                                            </div>
                                        </div>
                                        <div className="overview-stat-item">
                                            <img src="/Icon4.svg" alt="" />
                                            <div className="overview-stat-info">
                                                <div className="overview-stat-value">$9745</div>
                                                <div className="overview-stat-label">Revenue</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overview-custom-row">
                        {/* Second row, first card */}
                        <div className="overview-custom-card earnings">
                            <div className="overview-card">
                                <div className="overview-earning-card">
                                    <div className="overview-card-header">
                                        <h5 className="overview-card-title">Total Earning</h5>
                                        <div className="overview-custom-dropdown" ref={dropdownRef}>
                                            <button
                                                className="overview-dropdown-toggle"
                                                onClick={toggleDropdown}
                                            >
                                                {selectedOption}
                                                <span className={`overview-arrow-icon ${isOpen ? 'open' : ''}`}>▼</span>
                                            </button>
                                            {isOpen && (
                                                <ul className="overview-dropdown-menu">
                                                    {options.map((option) => (
                                                        <li
                                                            key={option}
                                                            className={`overview-dropdown-item ${option === selectedOption ? 'active' : ''}`}
                                                            onClick={() => handleOptionSelect(option)}
                                                        >
                                                            {option}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>

                                    <div className="overview-earning-info">
                                        <span className="overview-earning-percentage">87%</span>
                                        <span className="overview-earning-change">
                                            <img src='/public/chevron-up.svg' alt="up" /> 25.8%
                                        </span>
                                    </div>


                                    <div className="overview-container">
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
                                            </div></div>

                                        <div className="overview-stat-items">
                                            <img src="/Iconlast.svg" alt="Icon" />
                                            <div className="overview-stat-information">
                                                <div className="overview-stat-value">Total Revenue</div>
                                                <div className="overview-stat-label">Client Payment</div>
                                            </div>
                                            <p className="overview-stat-amount">+$126</p>
                                        </div>
                                  
                                    <div className="overview-stat-items">
                                        <img src="/Iconss.svg" alt="Icon" />
                                        <div className="overview-stat-information">
                                            <div className="overview-stat-value">Total Sales</div>
                                            <div className="overview-stat-label">Refund</div>
                                        </div>
                                        <p className="overview-stat-amount">+$98</p>
                                    </div> </div>
                                </div>
                            </div>
                        </div>

                        {/* Second row, second card */}
                        <div className="overview-custom-card delivery">
                            <div className="overview-card">
                                <div className="overview-delivery-card">
                                    <div className="overview-card-header">
                                        <h5 className="overview-card-titles">Delivery overview</h5>
                                        <img src="/dots-vertical.svg" alt="Menu" />
                                    </div>

                                    <div className="overview-delivery-options">
                                        {['On the way', 'Unloading', 'Loading', 'Waiting'].map((status) => (
                                            <div
                                                key={status}
                                                className={`overview-delivery-option ${activeDelivery === status ? 'active' : ''}`}
                                                onClick={() => setActiveDelivery(status)}
                                            >
                                                {status}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="overview-progress-container">
                                        <div className="overview-progress-bar-wrapper">
                                            <div className="overview-progress-bar way">39.7%</div>
                                            <div className="overview-progress-bar unloading">28.3%</div>
                                            <div className="overview-progress-bar loading">17.4%</div>
                                            <div className="overview-progress-bar waiting">14.6%</div>
                                        </div>
                                    </div>

                                    {deliveryData.map((item, index) => (
                                        <div className="overview-delivery-detail" key={index}>
                                            <div className="overview-delivery-flex">
                                                <img src={item.img} alt={item.status} className="overview-delivery-icon" />
                                                <div className="overview-delivery-titles">{item.status}</div>
                                                <div className="overview-delivery-time">3hr 15min</div>
                                                <div className="overview-delivery-percent">{item.percent}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;