import React from 'react';
import Category from './category';
import './categories.css';
import SearchConatiner from '../../widgets/conatiners/search-container';
import Media from '../../playlist/components/media';

function Categories(props) {
    return(
        <div className="Categories">
            <SearchConatiner />
            {
                props.search.map((item)=> {
                return <Media {...item} key={item.id} />
                })
            }
            {
                
                props.categories.map((item) => {
                    return(
                        <Category 
                            {...item} 
                            key={item.id} 
                            handleOpenModal={props.handleOpenModal}
                        />
                    )
                })
            }
        </div>
    )
}

export default Categories;