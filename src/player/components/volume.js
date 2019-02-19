import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';

function Volume(props) {
    return(
        <button
            className="Volume"
        >
            <VolumeIcon 
                color="white"
                size={25}
            />
            <div className="Volume-range">
                <input type='range' />
            </div>
        </button>
    )
}
export default Volume;