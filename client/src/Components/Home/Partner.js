import React from 'react'
import Aws from './aws.png'
import Bws from './Microsoft_Azure.svg.png'
import Cws from './ministryofeducation.png'

function Partner() {
  return (
    <div id='partners'>
      <div className="flex items-center justify-center">
        <div className='text-4xl font-semibold text-gray-900 title-font lg:md:-translate-y-20 lg:text-6xl'>Organizers</div>
    </div>
        <section class="text-gray-600 body-font">
  <div class="container px-5 pt-10 mx-auto">
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32  sm:mr-10 inline-flex items-center justify-center rounded-full  text-orange-600flex-shrink-0">
        <img src={Aws} alt="" className="w-20 h-20" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Amazon Web Services and EC2 cloud Compute</h2>
        <p class="leading-relaxed text-base">We are partnered with Amazon Web services to avail the structs of load balancers and auto scaling features to ensure a fast operability and an even faster interface with facilities to have a scaled operation as we proovide to you an actual product instead of a promise.</p>
        <a class="mt-3 text-orange-600 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Microsoft Azure</h2>
        <p class="leading-relaxed text-base">We are in collaboration with Microsoft Azure with regards to the Machine learning model and the Question and Answer Chatbot.</p>
        <a class="mt-3 text-orange-600 inline-flex items-center">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-orange-600 flex-shrink-0">
      <img src={Bws} alt="" className="w-16 h-16" />
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-orange-600 flex-shrink-0">
      <img src={Cws} alt="" className="h-24 w-28" />
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Ministry of Education</h2>
        <p class="leading-relaxed text-base">To make positive sustainable and holistic changes in our society by reducing the workload of the teachers and a pragmatic Learning opportunity tracker for thee students we are working under the supervision of the Mistry of Education, Government of India.</p>
        <a class="mt-3 text-orange-600 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default Partner