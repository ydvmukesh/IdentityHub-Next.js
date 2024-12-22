import React from 'react'
import Title from '../common/Title'
import Button from '../common/Button'
const CallToAction = () => {
  return (
    <section className='cta-wrapper mt-100 relative'> <div className="container text-center">
      <div className="h-[290px] md:h-[544px] lg:h-[744px] flex items-center justify-center flex-col">
        <Title
          title='<span class="block">Be part of the future of</span> <span class=" inline-block line-large">IdentityHub</span>' sectionClass="md:max-w-3xl gap-3 md:gap-4 lg:gap-6 "
          className="text-2xl md:text-4xl lg:text-6xl"
          description="Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app." classDes="max-w-lg mx-auto text-md lg:text-xl"
        />
        <Button className="btn-secondary inline-flex  mt-1 md:mt-3 lg:mt-4 " title="Start free trail" />
      </div>
    </div>
    </section>
  )
}
export default CallToAction