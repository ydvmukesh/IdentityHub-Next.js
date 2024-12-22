import React from 'react'
import SubTitle from '../common/SubTitle'
import TestimonialSlider from '../common/TestimonialSlider'
import Title from '../common/Title'
import { testimonials } from '@/utils/data' // Assuming your featureData is stored here


const Testimonial = () => {
    return (
        <>
            <section className='mt-200'>
                <div className="container">
                    <SubTitle subTitle="Testimonials" />
                    <Title
                        title='What’s our user <span class="inline-block text-gradient">says</span> about us'
                        className="text-center block sm:max-w-md xl:max-w-lg "
                    />
                    <TestimonialSlider testimonials={testimonials} />
                </div>
            </section >
        </>
    )
}

export default Testimonial
