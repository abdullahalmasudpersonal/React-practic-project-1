import React from 'react';
import banner1 from '../../../Image/Banner/mafsir (1).jpg';
import banner2 from '../../../Image/Banner/mafsir (2).jpg';
import banner3 from '../../../Image/Banner/mafsir (3).jpg';
import banner4 from '../../../Image/Banner/mafsir (4).jpg';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner4} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;