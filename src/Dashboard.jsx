import React, { useState } from 'react';
import Logo from './images/logo.png'
import Profile1 from '../src/images/profile-1.jpg';
import Profile2 from '../src/images/profile-2.jpg';
import Profile3 from '../src/images/profile-3.jpg';
import Profile4 from '../src/images/profile-4.jpg';


export const Dashboard = () => {


    const [show, setShow] = useState(false);
    const [theme, setTheme] = useState(false);

    const onShowMenu = () => {
        const toggleMenu = !show;
        setShow( toggleMenu );
    }

    const onShowTheme = () => {
        const themeToggle = !theme;
        document.body.classList.toggle('dark-theme-variables');
        setTheme( themeToggle );
    }


  return (
    <>
        <div className="container">
            {/* ------ ASIDE ----- */}
            <aside 
                className={`${ show ? 'aside-active' : 'true' }`}
            >
                <div className="top">
                    <div className="logo">
                        <img src={ Logo } alt="logo" />
                        <h2>EGA<span className='danger'>TOR</span></h2>
                    </div>
                    <div 
                        className="close" 
                        id='close-btn' 
                        onClick={ onShowMenu }
                    >
                        <span className='material-icons-sharp'>close</span>
                    </div>
                </div>

                <div className="sidebar">
                    <a href="#">
                        <span className='material-icons-sharp'>grid_view</span>
                        <h3>Dashboard</h3>
                    </a>

                    <a href="#" className='active'>
                        <span className='material-icons-sharp'>person_outline</span>
                        <h3>Customers</h3>
                    </a>

                    <a href="#">
                        <span className='material-icons-sharp'>receipt_long</span>
                        <h3>Orders</h3>
                    </a>

                    <a href="#">
                        <span className='material-icons-sharp'>insights</span>
                        <h3>Analytics</h3>
                    </a>

                    <a href="#">
                        <span className='material-icons-sharp'>mail_outline</span>
                        <h3>Messages</h3>
                        <span className="message-count">26</span>
                    </a>

                    <a href="#">
                        <span className='material-icons-sharp'>inventory</span>
                        <h3>Products</h3>
                    </a>

                    <a href="#">
                        <span className='material-icons-sharp'>report_gmailerrorred</span>
                        <h3>Reports</h3>
                    </a>

                    <a href="#">
                        <span className='material-icons-sharp'>settings</span>
                        <h3>Settings</h3>
                    </a>

                    <a href="#">
                        <span className='material-icons-sharp'>add</span>
                        <h3>Add Product</h3>
                    </a>

                    <a href="#">
                        <span className='material-icons-sharp'>logout</span>
                        <h3>Logout</h3>
                    </a>
                </div>
            </aside>

            {/* --------- MAIN -------- */}

            <main>
                <h1>Dashboard</h1>

                <div className="date">
                    <input type="date" />
                </div>

                <div className="insights">
                    <div className="sales">
                        <span className='material-icons-sharp'>analytics</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Sales</h3>
                                <h1>$25,024</h1>
                            </div>
                            <div className="progress">
                                <svg >
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <p>81%</p>
                                </div>

                            </div>
                        </div>
                        <small className='text-muted'>Last 24 Hours</small>
                    </div>

                    <div className="expenses">
                        <span className='material-icons-sharp'>bar_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Expenses</h3>
                                <h1>$14,160</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <p>62%</p>
                                </div>

                            </div>
                        </div>
                        <small className='text-muted'>Last 24 Hours</small>
                    </div>

                    <div className="income">
                        <span className='material-icons-sharp'>stacked_line_chart</span>
                        <div className="middle">
                            <div className="left">
                                <h3>Total Income</h3>
                                <h1>$10,864</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx='38' cy='38' r='36'></circle>
                                </svg>
                                <div className="number">
                                    <p>45%</p>
                                </div>

                            </div>
                        </div>
                        <small className='text-muted'>Last 24 Hours</small>
                    </div>

                </div>
                <div className="recent-orders">
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Number</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>85469</td>
                                <td>Due</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                            <tr>
                                <td>Foldable Mini Drone</td>
                                <td>85469</td>
                                <td>Due</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr><tr>
                                <td>Foldable Mini Drone</td>
                                <td>85469</td>
                                <td>Due</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr><tr>
                                <td>Foldable Mini Drone</td>
                                <td>85469</td>
                                <td>Due</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr><tr>
                                <td>Foldable Mini Drone</td>
                                <td>85469</td>
                                <td>Due</td>
                                <td className='warning'>Pending</td>
                                <td className='primary'>Details</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#">Show All</a>
                </div>
            </main>

            {/* ================= END OF MAIN ==================== */}

            <div className="right">
                <div className="top">
                    <button id='menu-btn' onClick={ onShowMenu } >
                        <span className='material-icons-sharp'>menu</span>
                    </button>
                    <div 
                        onClick={ onShowTheme }
                        className="theme-toggler"
                    >
                        <span className='material-icons-sharp active'>light_mode</span>
                        <span className='material-icons-sharp'>dark_mode</span>
                    </div>
                    <div className="profile">
                        <div className="info">
                            <p>Hey, <b>Daniel</b></p>
                            <small className='text-muted'>Admin</small>
                        </div>
                        <div className="profile-photo">
                            <img src={ Profile1 } alt="profile-picture" />
                        </div>
                    </div>
                </div>
                {/* ----- END OF TOP --------*/}
                <div className="recent-updates">
                    <h2>Recent Updates</h2>
                    <div className="updates">
                        <div className="update">
                            <div className="profile-photo">
                                <img src={ Profile2 } alt="profile-2" />
                            </div>
                            <div className="message">
                                <p><b>Mike Tark</b> received his order of high lion GPS drone. </p>
                                <small className='text-muted'>2 minutes Ago</small>
                            </div>
                        </div>

                        <div className="update">
                            <div className="profile-photo">
                                <img src={ Profile3 } alt="profile-3" />
                            </div>
                            <div className="message">
                                <p><b>Tarki Uba</b> received his order of high lion GPS drone. </p>
                                <small className='text-muted'>2 minutes Ago</small>
                            </div>
                        </div>

                        <div className="update">
                            <div className="profile-photo">
                                <img src={ Profile4 } alt="profile-4" />
                            </div>
                            <div className="message">
                                <p><b>Milail kel</b> received his order of high lion GPS drone. </p>
                                <small className='text-muted'>2 minutes Ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* ----------- END OF RECENT UPDATES ------------ */}

                    <div className="sales-analytics">
                        <h2>Sales Analytics</h2>
                        <div className="item online">
                            <div className="icon">
                                <span className='material-icons-sharp'>shopping_cart</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>ONLINE ORDERS</h3>
                                    <small className='text-muted'>Last 24 Hours</small>
                                </div>
                                <h5 className='success'>+39</h5>
                                <h3>3849</h3>
                            </div>
                        </div>
                        <div className="item offline">
                            <div className="icon">
                                <span className='material-icons-sharp'>local_mall</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>OFFLINE ORDERS</h3>
                                    <small className='text-muted'>Last 24 Hours</small>
                                </div>
                                <h5 className='danger'>17%</h5>
                                <h3>1100</h3>
                            </div>
                        </div>
                        <div className="item customers">
                            <div className="icon">
                                <span className='material-icons-sharp'>person</span>
                            </div>
                            <div className="right">
                                <div className="info">
                                    <h3>NEW CUSTOMERS</h3>
                                    <small className='text-muted'>Last 24 Hours</small>
                                </div>
                                <h5 className='success'>+25%</h5>
                                <h3>849</h3>
                            </div>
                        </div>
                        <div className="item add-product">
                            <div>
                                <span className='material-icons-sharp'>add</span>
                                <h3>Add Product</h3>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    </>
  )
}
