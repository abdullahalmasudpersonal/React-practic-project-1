import React from 'react';
import './Founder.css';
import founder from '../../../Image/Founder/M. A. Khalak.jpg';

const Founder = () => {
    return (
        <div className='container founder'>
            <div className='d-flex justify-content-center'>
                <div className='founder-img'>
                    
                    <img width='230px' src={founder} alt='' />

                    <p className='mb-0 fw-bold text-center'>M.A. Khalak</p>
                    <p className='text-center fw-bold'>Founder</p>
                </div>


                <div className='founder-word'>
{/*                     <p>ইসলামি ও সাধারণ শিক্ষার সমন্বয়ে গড়ে ওঠা ঐতিহ্যবাহী দ্বীনি শিক্ষা প্রতিষ্ঠান “তা‘মীরুল মিল্লাত কামিল মাদ্রাসা” মহান আল্লাহর অসীম রহমাতে শিক্ষার আলো বিচ্ছুরনে সফলতার স্বাক্ষর রেখে চলছে দীর্ঘদিন ধরে। “তা’মীরুল মিল্লাত ট্রাস্ট” পরিচালিত এ মাদরাসাটি বর্তমানে ইসলাম ও সাধারণ জ্ঞানের শ্রেষ্ঠতম মারকাজ হিসেবে বিশ্বদরবারে পরিচিতি লাভ করেছে। শিক্ষার্থীর প্রতিভা বিকাশে ও মনোদৈহিক উন্নয়নে অহী জ্ঞানের বিকল্প নেই। </p> */}
                </div>
            </div>
        </div>
    );
};

export default Founder;