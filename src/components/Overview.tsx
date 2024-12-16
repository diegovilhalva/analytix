import { motion } from "motion/react"

import * as variants from "@/lib/motionVariants"
import { overviewData } from "@/constants"
import { overviewBanner } from "@/assets"
import { Button } from "./ui/button"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { AspectRatio } from "./ui/aspect-ratio"
import ReactPlayer from "react-player/youtube"



const Overview = () => {
    return (
        <section className="section">
            <div className="contrainer">
                <div className="section-head">
                    <motion.p className="section-subtitle" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {overviewData.sectionSubtitle}
                    </motion.p>
                    <motion.h2 className="section-title" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {overviewData.sectionTitle}
                    </motion.h2>
                    <motion.p className="section-text" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {overviewData.sectionText}
                    </motion.p>
                </div>
                <div className="">
                    <motion.div variants={variants.fadeInScale} initial="start" whileInView="end" viewport={{ once: true }} className="relative max-w-4xl mx-auto shadow-xl" >
                        <figure>
                            <img src={overviewBanner} width={900} height={601} alt="" />
                        </figure>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="secondary" size="icon" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150">
                                    <div className="sr-only">Play video</div>
                                    <Play fill="#fff" size={50} />
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]">
                                <AspectRatio ratio={16 / 9}>
                                    <ReactPlayer url="https://www.youtube.com/watch?v=LsEgibaeVqg" style={{
                                        minWidth: '100%',
                                        maxWidth: '100%',
                                        minHeight: '100%',
                                        maxHeight: '100%'
                                    }} />
                                </AspectRatio>
                            </DialogContent>
                        </Dialog>
                    </motion.div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-16 xl:grid-cols-[3fr,2.5fr] xl:items-center">
                        <motion.p className="section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left" variants={variants.fadeInRight} initial="start" whileInView="end" viewport={{ once: true }}>
                            {overviewData.listTitle}
                        </motion.p>
                        <motion.div className="flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8" variants={variants.staggerContainer} initial="start" whileInView="end" viewport={{ once: true }}>
                            {overviewData.list.map(({ text, title }, index) => (
                                <motion.div key={index} className="text-center" variants={variants.fadeInLeft} initial="start" whileInView="end" viewport={{ once: true }}>
                                    <h3 className="text-3xl">{title}</h3>
                                    <p className="text-muted-foreground">{text}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview