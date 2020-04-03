import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import Header from '../../components/molecules/Header';
import CategoryContainer from '../../containers/CategoryContainer';
import ItemsContainer from '../../containers/ItemsContainer';
import './Home.css';

const Home = () => {
    return (
        <PageTemplate
            header={<Header />}>
            <div className="content-container">
                <CategoryContainer/>
                <ItemsContainer/>
            </div>
        </PageTemplate>
    )
}

export default Home;