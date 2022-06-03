import React from 'react';
import './Footers.css';
import logo from '../../../Image/Logo/logo3.png';
import facebook from '../../../Image/SocialMedia/facebook.png';

const Footers = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footers-bg'>
            <div className='footers container'>
                <div className='footers-dev ps-4'>
                    <p className='fw-bold ps-4'>Importent Link</p>
                    <p><ul >
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='http://www.bmeb.gov.bd/' target='_blank' rel='noreferrer'>Bangladesh Madrasa Education Board</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='http://www.educationboardresults.gov.bd/' target='_blank' rel='noreferrer'>Board of Education Results</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='http://banbeis.gov.bd/' target='_blank' rel='noreferrer'>Banbase</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='https://bangladesh.gov.bd/index.php' target='_blank' rel='noreferrer'>Ministry of Education</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='http://www.tmed.gov.bd/' target='_blank' rel='noreferrer'>Department of Technical and Madrasa Education</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='http://www.dshe.gov.bd/' target='_blank' rel='noreferrer'>Department of Secondary and Higher Education</a></li>
                    </ul></p>
                </div>

                <div className='footers-dev ps-4'>
                    <p className='fw-bold ps-4'>Internal link</p>
                    <p>
                        <ul>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='' target='_blank' rel='noreferrer'>Notics</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='' target='_blank' rel='noreferrer'>Results</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='' target='_blank' rel='noreferrer'>Admission</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='' target='_blank' rel='noreferrer'>Connect Us</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='' target='_blank' rel='noreferrer'>Library</a></li>
                        <li><a style={{ textDecoration: 'none', color: 'rgb(255, 225, 191)' }} href='' target='_blank' rel='noreferrer'>Financial Aid</a></li>
                        </ul>
                    </p>
                </div>
                <div className='footers-dev'>
                <p className='fw-bold ps-4'>Social media</p>
                <div>
                <img className='p-0 mb-2' width='45px' src={facebook} alt='' /> <span>Facebook</span>
                <br/>
                <img className='p-0 mb-2' width='45px' src={facebook} alt='' /> <span>Twitter</span>
                <br/>
                <img className='p-0' width='45px'  src={facebook} alt='' />
                </div>
                </div>
                <div className='footers-dev ps-5'>
                    <img src={logo} alt='' />
                    <p className='m-0 d-block '>Baridhara, Radhanagor</p>
                    <p className='m-0 d-block '>Bhandaria, pirojpur</p>
                    <p className='m-0 d-block '>Phone: +880-1717420439</p>
                    <p className='m-0 d-block '>Phone: +880-1717420439</p>
                    <p className='m-0 d-block '>Email: muusm58@gmail.com</p>
                </div>
            </div>
            <div className=' footers-bottom'>
                <div className='container footers-bottom'>
                    <p>&copy; {year} Mafsar Ul Ulum Sinior Madrasah.  All Rights Reserved.  Design, Development and Maintenance by <span>Abdullah al masud</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footers;