import React from 'react'
import HeaderContainer from '../Header/Styled.ts'
import { Logo,KapoorTextLogo} from '../../assets/Image.js'
import { FaFacebookF, FaHeart, FaUser } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { GrPinterest } from "react-icons/gr";
import { MdHelp } from "react-icons/md";
import { FaMobileButton } from "react-icons/fa6";
import { BsBagFill } from "react-icons/bs";
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production.js';

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <section className='container-fluid p-0'>
                    < div className='main-header'>
                        <div className='header-1'>
                            <div className='sub-header-1 row mt-2'>
                                <div className='col-2 sub-box-1'>
                                    <ul className='nav-list d-flex flex-row '>
                                        <li><FaFacebookF /></li>
                                        <li><FaTwitter /></li>
                                        <li><ImInstagram /></li>
                                        <li><GrPinterest /></li>
                                    </ul>
                                </div>
                                <div className='col-7'>
                                    <h6>WORLD WIDE SHIPPING</h6>
                                </div>
                                <div className='col-3'>

                                    <ul className='nav-list d-flex'>
                                        <li><FaMobileButton />&nbsp;&nbsp;App download</li>
                                        <li><MdHelp />&nbsp;&nbsp;Help</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className='header-2 p-2'>
                            <div className='sub-header-2 flex-wrap'>
                                <div className='sub-box-Logo '>
                                    <img src={Logo} alt='Kapoor-logo' />
                                    <img src={KapoorTextLogo} alt='Kapoor-logo' />
                                </div>
                                <div className="search-container">
                                    <input type="text" className="search-box" placeholder="Search For Products..." />
                                </div>
                                <div className="header-icons">
                                    <HashLink to="/account" className="icon-link">
                                        <span className="icon  mr-2"><FaUser /></span>
                                        <span className="icon-name">Account</span>
                                    </HashLink>
                                    <HashLink to="/wishlist" className="icon-link">
                                        <span className="icon mr-2"><FaHeart /></span>
                                        <span className="icon-name">Wishlist</span>
                                    </HashLink>
                                    <HashLink to="/cart" className="icon-link">
                                        <span className="icon mr-2"><BsBagFill /></span>
                                        <span className="icon-name">Cart</span>
                                    </HashLink>
                                </div>
                            </div>
                            <div className='sub-header-3 d-flex flex-wrap justify-content-around mt-3'>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">SALE</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">NEW ARRIVAL</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">HALF SAREE</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">FASHION SAREE</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">LEHENGA</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">GOWN</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">WEDDING</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">CELEBRITY OUTFITS</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">OCCASIONS</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">ENGAGEMENT</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">RECEPTION</span>
                                </div>
                                <div className="hover-container mr-2 mb-2">
                                    <span className="hover-content">OTHERS</span>
                                </div>
                            </div>
                        </div>
                        </div>
                </section>
            </HeaderContainer>
        </>
    )
}

export default Header