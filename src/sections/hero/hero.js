// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react'
// import { Popover, Transition } from '@headlessui/react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline'
// import Button from '../../components/button.js'
// import Typewriter from '../../components/typewriter.js'
// import heroImage from '../../images/heroImage.jpg'
// import logo from '../../images/logo.png'

// const navigation = [
//     { name: 'About', href: '#' },
//     { name: 'Resume', href: '#' },
//     { name: 'Research', href: '#' },
//     { name: 'Portfolio', href: '#' },
//     { name: 'Contact', href: '#' }
// ]
// let Hero = () => {
//     /*     //Typewriter effect
//         var TxtType = function (el, toRotate, period) {
//             this.toRotate = toRotate;
//             this.el = el;
//             this.loopNum = 0;
//             this.period = parseInt(period, 10) || 2000;
//             this.txt = '';
//             this.tick();
//             this.isDeleting = false;
//         };

//         TxtType.prototype.tick = function () {
//             var i = this.loopNum % this.toRotate.length;
//             var fullTxt = this.toRotate[i];

//             if (this.isDeleting) {
//                 this.txt = fullTxt.substring(0, this.txt.length - 1);
//             } else {
//                 this.txt = fullTxt.substring(0, this.txt.length + 1);
//             }

//             this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

//             var that = this;
//             var delta = 200 - Math.random() * 100;

//             if (this.isDeleting) { delta /= 2; }

//             if (!this.isDeleting && this.txt === fullTxt) {
//                 delta = this.period;
//                 this.isDeleting = true;
//             } else if (this.isDeleting && this.txt === '') {
//                 this.isDeleting = false;
//                 this.loopNum++;
//                 delta = 500;
//             }

//             setTimeout(function () {
//                 that.tick();
//             }, delta);
//         };

//         window.onload = function () {
//             var elements = document.getElementsByClassName('typewrite');
//             for (var i = 0; i < elements.length; i++) {
//                 var toRotate = elements[i].getAttribute('data-type');
//                 var period = elements[i].getAttribute('data-period');
//                 if (toRotate) {
//                     new TxtType(elements[i], JSON.parse(toRotate), period);
//                 }
//             }
//             // INJECT CSS
//             var css = document.createElement("style");
//             css.type = "text/css";
//             css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//             document.body.appendChild(css);
//         }; */


//     return (
//         <div className="relative bg-white overflow-hidden">
//             <div className="max-w-7xl mx-auto">
//                 <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
//                     <svg
//                         className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
//                         fill="currentColor"
//                         viewBox="0 0 100 100"
//                         preserveAspectRatio="none"
//                         aria-hidden="true"
//                     >
//                         <polygon points="50,0 100,0 50,100 0,100" />
//                     </svg>

//                     <Popover>
//                         <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
//                             <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
//                                 <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
//                                     <div className="flex items-center justify-between w-full md:w-auto">
//                                         <a href="#">
//                                             <span className="sr-only">Workflow</span>
//                                             <img
//                                                 className="h-8 w-auto sm:h-10"
//                                                 src={logo}
//                                             />
//                                         </a>
//                                         <div className="-mr-2 flex items-center md:hidden">
//                                             <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
//                                                 <span className="sr-only">Open main menu</span>
//                                                 <MenuIcon className="h-6 w-6" aria-hidden="true" />
//                                             </Popover.Button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
//                                     {navigation.map((item) => (
//                                         <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
//                                             {item.name}
//                                         </a>
//                                     ))}
//                                 </div>
//                             </nav>
//                         </div>

//                         <Transition
//                             as={Fragment}
//                             enter="duration-150 ease-out"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="duration-100 ease-in"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <Popover.Panel
//                                 focus
//                                 className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
//                             >
//                                 <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
//                                     <div className="px-5 pt-4 flex items-center justify-between">
//                                         <div>
//                                             <img
//                                                 className="h-8 w-auto"
//                                                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//                                                 alt=""
//                                             />
//                                         </div>
//                                         <div className="-mr-2">
//                                             <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
//                                                 <span className="sr-only">Close main menu</span>
//                                                 <XIcon className="h-6 w-6" aria-hidden="true" />
//                                             </Popover.Button>
//                                         </div>
//                                     </div>
//                                     <div className="px-2 pt-2 pb-3 space-y-1">
//                                         {navigation.map((item) => (
//                                             <a
//                                                 key={item.name}
//                                                 href={item.href}
//                                                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
//                                             >
//                                                 {item.name}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </Popover.Panel>
//                         </Transition>
//                     </Popover>

//                     <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//                         <div className="sm:text-center lg:text-left">
//                             <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//                                 <span className="block">Hello, I'm Andrea.</span>
//                             </h1>
//                             <Typewriter htmlType={'h3'} leadingText={'I am '} typedText={'[ "a React Developer.", "a Front End Engineer.", "always evolving.", "many things." ]'} />
//                             {/* <h3 className="text-2xl block text-lime-600">I am <span className="typewrite" data-period="2000" data-type='[ "a React Developer.", "a Front End Engineer.", "always evolving.", "many things." ]'></span>
//                                 <span className="wrap"></span></h3> */}
//                             <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                                 Front End Engineer with entrepreneurial disposition who pairs capabilities in front end development with strong marketing, advertising, business, and client relations background. Areas of special interest and proficiency include UI/UX, usability, React, Redux, Tailwind/Bootstrap, JavaScript, e2e testing with Cypress. Perceptive and highly adaptable to new concepts and technologies in the web development ecosystem.
//                             </p>
//                             <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//                                 <div className="rounded-full shadow">
//                                     <Button href={'#'} itemLabel={'Learn more'} color={'lime'} />
//                                 </div>
//                                 <div className="mt-3 sm:mt-0 sm:ml-3">
//                                     <a
//                                         href="#"
//                                         className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-lime-700 bg-lime-100 hover:bg-lime-200 md:py-4 md:text-lg md:px-10"
//                                     >
//                                         Get in touch
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </main>
//                 </div>
//             </div>
//             <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//                 <img
//                     className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
//                     src={heroImage}
//                     alt=""
//                 />
//             </div>
//         </div>
//     )
// }



/* This example requires Tailwind CSS v2.0+ */
import heroImage from '../../images/heroImage.jpg';
import Typewriter from '../../components/typewriter.js';
import TopNavigation from '../topNavigation/topNavigation';

let Hero = () => {
    return (
        <div className="bg-white">
            <header>
                <TopNavigation />
            </header>

            <section>
                <div>
                    {/* Hero card */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={heroImage}
                                        alt="People working on laptops"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-emerald-500 to-lime-600 mix-blend-multiply" />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Hello, I'm Andrea.</span>
                                        <Typewriter htmlType={'span'} leadingText={'I am '} typedText={'[ "a React Developer.", "a Front End Engineer.", "always evolving.", "many things." ]'} />
                                    </h1>
                                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                                        amet fugiat veniam occaecat fugiat aliqua.
                                    </p>
                                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                            >
                                                Get started
                                            </a>
                                            <a
                                                href="#"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                            >
                                                Live demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Hero;