// "use client";
// import React,{useState, useRef, useEffect} from 'react'
// import Link from 'next/link';

// import  "@/components/menu/menu.css";

// const menuLinks = [
//      {name : "Home", href: "/home"},
//     { name: "About Us", href: "/about-us" },
//     { name: "Services", href: "/services" },
//     { name: "Solutions", href: "/solutions" },
//     { name: "Contact Us", href: "/contact-us" },
//     // { name: "Order", href: "/order" },
//   ];


// export const Menu = () => {
//     const continer = useRef();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu =()=>{
//         setIsMenuOpen(!isMenuOpen);

//     };
//   return (
//     <div className="menu-continer" ref ={continer}>
//         <div className="menu-bar">
//             <div className="menu-logo">
//                 <Link href="/">Innovise</Link>
//             </div>
//             <div className="menu-open" onClick={toggleMenu}> 
//                 <p>Menu</p>
//             </div>
//         </div>
//         <div className="menu-overlay">
//         <div className="menu-overlay-bar">
//             <div className="menu-close">
//                 <Link href="/">Codegrid </Link>
//             </div>
//             <div className="menu-close" onClick={toggleMenu}>
//                 <p>close</p>
//            </div>
//         </div>
//         <div className="menu-close-icon">
//             <p>&#x2715;</p>
//         </div>
//         <div className="menu-copy">
//             <div className="menu-links">
//                 {menuLinks.map((link, index)=>(
//                     <div className="menu-link-item" key={index}>
//                         <div className="menu-link-item-holder" onClick={toggleMenu}>
//                             <Link href={link.href} className="menu-link">
//                              {link.name}
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="menu-info">
//                 <div className="menu-info-col">
//                     <a href="#">X &#8599;</a>
//                     <a href="#">Instagram &#8599;</a>
//                     <a href="#">LinkdIn &#8599;</a>
//                     <a href="#">Faacebook &#8599;</a>

//                 </div>
//                 <div className="menu-info-col">
//                     <p>@gmail.com</p>
//                     <p>+92 0000000</p>

//                 </div>
//             </div>

//         </div>


//         <div className="menu-preview">
//             <p>View Showreel</p>
//         </div>
//         </div>
//         </div>
//   );
// };


// export default Menu;