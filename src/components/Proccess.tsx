import { motion } from "motion/react"

import { processData } from "@/constants"

import * as variants from "@/lib/motionVariants"

import { processBanner } from "@/assets"

const Proccess = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section-head">
                    <motion.p className="section-subtitle" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {processData.sectionSubtitle}
                    </motion.p>
                    <motion.h2 className="section-title" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {processData.sectionTitle}
                    </motion.h2>
                    <motion.p className="section-text" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {processData.sectionText}
                    </motion.p>
                </div>
                <div className="grid gap-14 lg:items-center lg:grid-cols-2 ">
                    <div className="grid gap-7 lg:gap-10 ">
                        {processData.list.map(({ icon, text, title }, index) => (
                            <motion.div className="flex flex-col gap-4 md:flex-row lg:gap-7" key={index} variants={variants.staggerContainer} initial="start" whileInView="end" viewport={{ once: true }}>
                                <motion.div className="w-16 h-16 grid place-items-center rounded-full border border-foreground/5 shrink-0" 
                                variants={variants.fadeInLeft}>
                                    {icon}
                                </motion.div>
                                <div className="grid gap-2 md:gap-3">
                                    <motion.h3 className="text-xl lg:text-2xl">{title}</motion.h3>
                                    <motion.p className="text-sm text-muted-foreground md:text-base" variants={variants.fadeInLeft}>
                                        {text}
                                    </motion.p>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                    <div className="max-lg:-order-1">
                        <motion.figure className="mx-auto bg-primary rounded-3xl max-w-[580px] overflow-hidden p-8 pb-0 lg:p-12 lg:pb-0 lg:pb-0" 
                        variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{once:true}}>
                            <img src={processBanner} width={500} height={528} alt="" className="w-full h-full object-contain object-bottom" />
                        </motion.figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proccess