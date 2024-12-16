import { motion } from "motion/react"



import * as variants from "@/lib/motionVariants"
import { reviewData } from "@/constants"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Quote } from "lucide-react"
const Review = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section-head">
                    <motion.p className="section-subtitle" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {reviewData.sectionSubtitle}
                    </motion.p>
                    <motion.h2 className="section-title" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {reviewData.sectionTitle}
                    </motion.h2>
                </div>
                <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={variants.staggerContainer} initial="start" whileInView="end" viewport={{ once: true }}>
                    {reviewData.reviewCard.map(({date,reviewAuthor,text,title},index) => (
                        <motion.div className="" key={index} variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                            <Card className="relative">
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        {title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground line-clamp-3">{text}</p>
                                </CardContent>
                                <CardFooter className="block ">
                                    <p>{reviewAuthor}</p>
                                    <p className="text-xs text-muted-foreground">{date}</p>
                                    <div className="abolute bottom-0 right-3 opacity-[0.02]">
                                        <Quote size={80} />
                                    </div>
                                </CardFooter>
                            </Card>                            
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Review