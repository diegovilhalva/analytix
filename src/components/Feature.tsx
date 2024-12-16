import { featureData } from "@/constants"
import { motion } from "motion/react"
import FeatuteCard from "./FeatuteCard"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

import * as variants from "@/lib/motionVariants"

const Feature = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section-head">
                    <motion.p className="section-subtitle" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{once:true}}>
                        {featureData.sectionSubtitle}
                    </motion.p>
                    <motion.h2 className="section-title" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{once:true}}>
                        {featureData.sectionTitle}
                    </motion.h2>
                    <motion.p className="section-text" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{once:true}}>
                        {featureData.sectionText}
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
                    {featureData.features.map(({ icon, iconBoxColor, title, desc, imgSrc }, index) => (
                        <FeatuteCard key={index} classes={index < 2 ? 'md:col-span-2 lg:col-span-1 xl:col-span-3' : 'xl:col-span-2' }>
                            <>
                                <div className="p-8 " >
                                    <motion.div className={`w-16 h-16 grid place-items-center rounded-full flex-shrink-0 ${iconBoxColor}`} variants={variants.fadeInUp}>
                                        {icon}
                                    </motion.div>
                                    <motion.h3 className="text-foreground text-xl font-medium mt-4 mb-3" variants={variants.fadeInUp} >
                                        {title}
                                    </motion.h3>
                                    <motion.p className="text-muted-foreground line-clamp-2 " variants={variants.fadeInUp}>{desc}</motion.p>
                                    <motion.div className="" variants={variants.fadeInUp}>
                                        <Button variant='link' className="p-0 h-auto mt-3">
                                            Learn more <ArrowRight />
                                        </Button>
                                    </motion.div>
                                </div>
                                {imgSrc && (
                                    <figure className="p-6 pt-0">
                                        <img src={imgSrc} alt={title} />
                                    </figure>
                                )}
                            </>
                        </FeatuteCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feature