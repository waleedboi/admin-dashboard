import React, { useState } from 'react';
import "../CSS/home.css"
const Home = () => {
    const [activeDelivery, setActiveDelivery] = useState('On the way');
    const deliveryData = [
        { status: 'On the way', img: '/public/car2.svg', percent: '39.7%' },
        { status: 'Unloading', img: '/public/arrow-down-circle.svg', percent: '29.7%' },
        { status: 'Loading', img: '/public/arrow-up-circle.svg', percent: '17.4%' },
        { status: 'Waiting', img: '/public/clock.svg', percent: '14.6%' },
    ];
    return (
        <div className="main-content">
            <div className="content-area">
                <h1 className="page-title">Overview</h1>

                <div className="row align-items-stretch">
                    <div className="col-md-6 col-lg-5 h-100" id="congration">
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
                                        <img
                                            src="/public/verify-your-email-illustration.svg"
                                            alt="Celebration"
                                            className="congrats-image"
                                        />
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
                                        <div className="stat-icon purple">
                                            <img src='/public/Icon.svg'></img>
                                        </div>
                                        <div className="stat-info">
                                            <div className="stat-value">230k</div>
                                            <div className="stat-label">Users</div>
                                        </div>
                                    </div>

                                    <div className="stat-item">
                                        <div className="stat-icon blue">
                                            <img src='/public/Icon1.svg'></img>
                                        </div>
                                        <div className="stat-info">
                                            <div className="stat-value">8.549k</div>
                                            <div className="stat-label">Total Drivers</div>
                                        </div>
                                    </div>

                                    <div className="stat-item">
                                        <div className="stat-icon red">
                                            <img src='/public/Icon2.svg'></img>
                                        </div>
                                        <div className="stat-info">
                                            <div className="stat-value">1.423k</div>
                                            <div className="stat-label">Total Deliveries</div>
                                        </div>
                                    </div>

                                    <div className="stat-item">
                                        <div className="stat-icon green">
                                            <img src='/public/Icon4.svg'></img>
                                        </div>
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
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle">Monthly</button>
                                    </div>
                                </div>
                                <div className="earning-info">
                                    <span className="earning-percentage">87%</span>
                                    <span className="earning-change">
                                        <i className="fas fa-arrow-up"></i> 25.8%
                                    </span>
                                </div>
                                <div className="chart-wrapper">
                                    <div className="chart-row primary-row">
                                        <div className="chart-bar primary" style={{ height: '70%' }}></div>
                                        <div className="chart-bar primary" style={{ height: '45%' }}></div>
                                        <div className="chart-bar primary" style={{ height: '100%' }}></div>
                                        <div className="chart-bar primary" style={{ height: '50%' }}></div>
                                        <div className="chart-bar primary" style={{ height: '65%' }}></div>
                                        <div className="chart-bar primary" style={{ height: '85%' }}></div>
                                        <div className="chart-bar primary" style={{ height: '75%' }}></div>
                                        <div className="chart-bar primary" style={{ height: '30%' }}></div>
                                    </div>

                                    <div className="chart-rows secondary-row">
                                        <div className="chart-bar secondary" style={{ height: '50%' }}></div>
                                        <div className="chart-bar secondary" style={{ height: '40%' }}></div>
                                        <div className="chart-bar secondary" style={{ height: '70%' }}></div>
                                        <div className="chart-bar secondary" style={{ height: '40%' }}></div>
                                        <div className="chart-bar secondary" style={{ height: '45%' }}></div>
                                        <div className="chart-bar secondary" style={{ height: '65%' }}></div>
                                        <div className="chart-bar secondary" style={{ height: '55%' }}></div>
                                        <div className="chart-bar secondary" style={{ height: '20%' }}></div>
                                    </div>
                                </div>


                                <div className="stat-itemss">
                                    <div className="stat-icon red">
                                        <img src="/public/Iconlast.svg" alt="Icon" />
                                    </div>

                                    <div className="stat-information">
                                        <div className="stat-values">Total Revenue</div>
                                        <div className="stat-labelss">Client Payment</div>
                                    </div>

                                    <p className="stat-amount">+$126</p>
                                </div>
                                <div className="stat-itemss">
                                    <div className="stat-icon red">
                                        <img src="/public/Iconss.svg" alt="Icon" />
                                    </div>

                                    <div className="stat-information">
                                        <div className="stat-values">Total Sales</div>
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
                                    <h5 className="card-title">Delivery overview</h5>
                                    <img src="/public/dots-vertical.svg"></img>
                                </div>
                                <div className="delivery-options">
                                    <div
                                        className={`delivery-option ${activeDelivery === 'On the way' ? 'active' : ''}`}
                                        onClick={() => setActiveDelivery('On the way')}
                                    >
                                        On the way
                                    </div>
                                    <div
                                        className={`delivery-option ${activeDelivery === 'Unloading' ? 'active' : ''}`}
                                        onClick={() => setActiveDelivery('Unloading')}
                                    >
                                        Unloading
                                    </div>
                                    <div
                                        className={`delivery-option ${activeDelivery === 'Loading' ? 'active' : ''}`}
                                        onClick={() => setActiveDelivery('Loading')}
                                    >
                                        Loading
                                    </div>
                                    <div
                                        className={`delivery-option ${activeDelivery === 'Waiting' ? 'active' : ''}`}
                                        onClick={() => setActiveDelivery('Waiting')}
                                    >
                                        Waiting
                                    </div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar-wrapper">
                                        <div className="progress-bar way">39.7%</div>
                                        <div className="progress-bar unloading">28.3%</div>
                                        <div className="progress-bar loading">17.4%</div>
                                        <div className="progress-bar waiting">14.6%</div>
                                    </div>
                                </div>

                                <div>
                                    {deliveryData.map((item, index) => (
                                        <div className="delivery-detail" key={index}>
                                            <div className="delivery-flex">
                                                <img src={item.img} alt={item.status} className="delivery-icon" />
                                                <div className="delivery-title">{item.status}</div>

                                                <div className="delivery-time">3hr 15min</div>
                                                <div className="delivery-percent">{item.percent}</div></div>
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

export default Home;