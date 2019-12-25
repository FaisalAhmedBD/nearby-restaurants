import React, { useEffect, useRef } from 'react';
import Map from './map';
export default function Modal({ toogleModal, restaurant, restaurantLocation, userLocation }) {
    const { id, name, rating, user_ratings_total, vicinity, photos, opening_hours, price_level, reference } = restaurant;
    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', cursor: 'auto' }} >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{name}</h5>
                        <button type="button" className="close" aria-label="Close" onClick={() => toogleModal('hide')}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Map
                            userLocation={userLocation}
                            restaurantLocation={restaurantLocation}
                            getDirection
                        />
                        <p>{vicinity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


