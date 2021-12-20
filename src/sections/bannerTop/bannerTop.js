/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon } from '@heroicons/react/outline'
let BannerTop = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-emerald-500 to-lime-600">
                <div className="max-w-7xl mx-auto py-1 sm:py-1">
                </div>
            </div>
            <div className="border-bottom">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 shadow-sm">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
                            <span className="flex p-2 rounded-lg bg-lime-600">
                                <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </span>
                            <p className="ml-3 font-medium text-black truncate">
                                <span className="md:hidden">Now Seeking Opportunities?  Contact me today!</span>
                                <span className="hidden md:inline">Now seeking opportunities in web & mobile application development! Interested?  Contact me today!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerTop;
