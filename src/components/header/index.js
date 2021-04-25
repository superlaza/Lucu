// import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
// import $ from 'jquery';
import Logo from '../_common/Logo';
// import Navbar from './Navbar';
// import headerLinks from '../../content/HeaderLinks';

export default function Header(props) {
//   const {
//     allContentfulProduct: { edges: products },
//   } = useStaticQuery(graphql`
//       query {
//           allContentfulProduct {
//               edges {
//                   node {
//                       slug
//                       name
//                   }
//               }
//           }
//       }
//   `);

//   const handleLeftMenuToggle = () => {
//     $('#navbarNav').animate({ height: 'toggle' }, 'fast');
//     if ($('#navbarNavRight').is(':visible')) {
//       $('#navbarNavRight').toggle();
//     }
//   };

//   const handleRightMenuToggle = () => {
//     $('#navbarNavRight').animate({ height: 'toggle' }, 'fast');
//     if ($('#navbarNav').is(':visible')) {
//       $('#navbarNav').toggle();
//     }
//   };

  return (
    <header className="container">
      <div className="logo-container">
        <Logo />
        <span>blah</span>
        {/* <span
          className="mobile-nav bell"
          onClick={handleRightMenuToggle}>
          <i className="fas fa-bell-plus" />
        </span> */}
      </div>
      {/* <div className="nav-container">
        <Navbar
          products={products}
          headerLinks={headerLinks}
        />
      </div> */}
    </header>
  );
}
