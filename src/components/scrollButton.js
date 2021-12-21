import React from 'react';

let ScrollButton = () => {
   
    return (
        <a
            href="#top-of-page"
            class="text-center"
            onclick="topFunction()"
            id="scrollButton"
            title="Go to top"
        >
            <div className="-mb-3">Scroll to Top</div>
            <i className="fas fa-chevron-circle-up text-primary"></i>
        </a>
    )
}

export default ScrollButton;