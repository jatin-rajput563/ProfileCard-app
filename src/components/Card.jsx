import React from 'react'
import { PROFILE_DATA } from '../utils/helper'
import CustomCard from './common/CustomCard'
const Card = () => {
    return (
        <>
            <div className="min-vh-100 justify-center d-flex items-center overflow-hidden">
                <div className="container">
                    <div className="d-flex flex-wrap gap-24 justify-center flex-row">
                        {PROFILE_DATA.map((item, index) => (
                            <div className="" key={index}>
                                <CustomCard CardImg={item.image} Name={item.name} Title={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
