import React, {useEffect, useState, lazy} from "react";
import "../../scss/core.scss";
import "../../scss/pages.scss";
import {AnimatePresence, motion} from "framer-motion";
import {Anim} from "../../Animation";
import {useTheme} from "../generic/ThemeContext";
import {useNavigate} from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";

import "../../scss/swiper.scss";

import { Navigation, Pagination, Autoplay, Keyboard } from "swiper";

const Project = lazy(() => import("../generic/Project"));

function Projects(props: {}) {
    const theme = useTheme();
    const navigate = useNavigate();

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    useEffect(() => {
        theme.setLoadState(-2);
    }, []);

    return (
        // 1100x1200 resolution for images
        <Swiper 
            pagination={pagination} 
            loop={true} 
            autoplay={{ delay: 150000, pauseOnMouseEnter: true }} 
            slidesPerView={1} 
            navigation={true} 
            keyboard={{ enabled: true }} 
            modules={[Navigation, Autoplay, Keyboard]} 
            className="mySwiper"
        >
            <SwiperSlide>
                <Project 
                    name="Storelytics" 
                    img={require("../../img/storelytics.jpg")} 
                    creator="test" 
                    points={[
                        "iOS based app built using Python and React-Native", 
                        "Uses machine learning to detect peoples' faces going in and out of a store", 
                        "Tracks how many people come in and out of a store and at what time they come in and out"
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Project 
                    name="Data Managers Inc" 
                    img={require("../../img/image1.png")} 
                    creator="test" 
                    points={[
                        "Android based app coded using Java", 
                        "Helps sales people at the register identify items", 
                        "Users are able to use their voice or text to look up their inventory"
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Project 
                    name="DMV Hours Tracker" 
                    img={require("../../img/image7.png")} 
                    creator="test" 
                    points={[
                        "iOS based app coded using React-Native and Expo", 
                        "Helps students track driving hours for their license", 
                        "Utilizes Firebase backend to authenticate users and store user data"
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Project 
                    name="Monkey Say Monkey Do" 
                    img={require("../../img/monke.webp")} 
                    creator="test" 
                    points={[
                        "iOS based app coded using Swift", 
                        "Helps children practice their pronunciation of certain word sounds through fun and interactive games", 
                        "Uses statistics to track how much they have practiced different sound groups"
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Project 
                    name="Academic Resource Center" 
                    img={require("../../img/Academic Resource Center.png")} 
                    creator="test" 
                    points={[
                        "Drshika Asher created an app to manage the tutoring space at VHHS. Students can book and chat with tutors.", 
                        "Tutors can scan into the tutoring center and see their appointment and easily match up the teachers with tutors that fit the teacher/student’s needs.", 
                        "Teachers can book tutors for their classrooms"
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Project 
                    name="Prairie City Bakery" 
                    img={require("../../img/Prairie City Bakery.png")} 
                    creator="test" 
                    points={[
                        "Harjas Monga created an easy way for customers of Prairie City Bakery to find their newest product the Ooey Gooey Butter Cake.", 
                        "Allowing PCB staff to update a google sheet quickly will populate where the closest Ooey Gooey near me!"
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Project 
                    name="American Hotel Register" 
                    img={require("../../img/American Hotel Register.png")} 
                    creator="test" 
                    points={[
                        "Sebastian Domenech, Erlk Johnson, and Nathan Jay worked on creating this video that AMR uses on the main website to promote what life is like at AMR."
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Project 
                    name="CountrySide Fire Department" 
                    img={require("../../img/CountrySide Fire Department.png")} 
                    creator="test" 
                    points={[
                        "Krish Asher worked with the CountrySide Fire Department to create a game that promotes fire safety.",
                        "This game gave young children the chance to learn about fire safety and once completed earn a prize."
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Project 
                    name="James Martin Landscaping" 
                    img={require("../../img/James Martin Landscaping.png")} 
                    creator="test" 
                    points={[
                        "Shayna Weinstein worked with a James Martin Landscaping to help create a digitized safety form smartphone app that provided their company with immediate information about accidents outside the office."
                    ]}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Project 
                    name="Baxter Credit Union" 
                    img={require("../../img/Baxter Credit Union.png")} 
                    creator="test" 
                    points={[
                        "Nic Beaumont worked with to create a solution to keep track of employee scheduling and to create a business plan that focuses on expanding membership."
                    ]}
                />
            </SwiperSlide>
        </Swiper>
    );
}

export default Projects;
