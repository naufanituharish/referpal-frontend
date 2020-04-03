import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { resetByCategory } from '../../store/actions';
import { useParams } from 'react-router-dom';

import PageTemplate from '../../templates/PageTemplate';
import Header from '../../components/molecules/Header';
import CategoryContainer from '../../containers/CategoryContainer';
import ItemsByCategoryContainer from '../../containers/ItemsByCategoryContainer';
import './ByCategory.css';

const ByCategory = (props) => {
    const { currentCategory } = props;
    const { id } = useParams();
    useEffect(() => {
        if(parseInt(currentCategory) !== parseInt(id)) {
            props.resetByCategory(id);
        }
    });
    return (
        <PageTemplate
            header={<Header backTo="/" />}>
            <div className="content-container">
                <CategoryContainer button />
                <ItemsByCategoryContainer catID={id}/>
            </div>
        </PageTemplate>
    )
}

const mapStateToProps = (state) => ({
    currentCategory: state.jobs.currentCategory
})

const mapDispatchToProps = {
    resetByCategory
} 

export default connect(mapStateToProps,mapDispatchToProps)(ByCategory);