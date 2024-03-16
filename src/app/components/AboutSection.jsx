'use client'
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () =>{
    return (<section className="text-black">
        <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 sm:px-16">
            <Image src = "/images/avatar.png" width={500} height={500} />
            <div>
                <h1 className="mb-4 text-4xl font-extrabold">About Me</h1>
                <p>
                As an IT student actively a pursuing a degree in Informatik at Hochschule Darmstadt, I offer robust problem-solving skills cultivated through coursework and
practical projects. With a solid academic foundation and a keen passion for staying ahead of emerging technologies, I am well-prepared to take on challenges in
the continually evolving IT landscape
                </p>
            </div>
            <div className ="flex flex-row mt-8">
                <span>Skills</span>
                <span>Skills</span>
                <span>Skills</span>
            </div>
        </div>
    </section>
    );
}

export default AboutSection;