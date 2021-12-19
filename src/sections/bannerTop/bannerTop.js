/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
let BannerTop = () => {
    return (
        <div className="bg-lime-600">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-lime-800">
                            <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                        <p className="ml-3 font-medium text-white truncate">
                            <span className="md:hidden">Now Seeking Opportunities?  Contact me today!</span>
                            <span className="hidden md:inline">Now seeking opportunities in web & mobile application development! Interested?  Contact me today!</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerTop;
