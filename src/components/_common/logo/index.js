import React from 'react';
import { Link } from 'gatsby';

import './logo.scss';

import FlameIcon from '../../../images/flame.svg'

export default function Logo() {
    return (
        <div className='logo-container'>
            <Link className='logo-home' to='/'>
                    <div className='logo-image'>
                        <FlameIcon className='logo-flame'/>
                    </div>
                    <div className='logo-text'> 
                        <div className='main'>Lucu</div>
                        <div className='sub'>marketing, inc.</div>
                    </div>
            </Link>
        </div>
    );
  }