import React from 'react'
import FeaturedGlasses from '../../components/featured-games/featured-glasses'
import FeaturedAppointments from '../../components/featured-rooms/FeaturedAppointments'
import HeroVideo from '../../components/hero-img/hero-video'
import Testimonial from './testimonial/testimonial'

function HomePage() {
    return (
        <div>
            <HeroVideo />
            <FeaturedGlasses />
            <FeaturedAppointments />
            <Testimonial />
        </div>
    )
}

export default HomePage
