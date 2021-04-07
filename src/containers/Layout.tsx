import React, { useState } from 'react'
import { Col } from 'reactstrap';
import AppHeader from '../components/AppHeader';

function Layout() {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div>
            <AppHeader/>
            <Col lg={ 12 }>
                <input type="text" id="filter" placeholder="Search for..." onChange={ (e) => setSearchValue(e.target.value) } />
                { searchValue }
            </Col>
        </div>
    )
}

export default Layout
