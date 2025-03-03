import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.6743558494127!2d67.02100381431886!3d24.806601953524826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da02d27ec71%3A0x865b33ee7efe2c8f!2sBeach%20View%20Park!5e0!3m2!1sen!2s!4v1579164297000!5m2!1sen!2s" 
                width="100%" 
                height="500px" 
                frameBorder="0"  
                allowFullScreen
                title='map'
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;