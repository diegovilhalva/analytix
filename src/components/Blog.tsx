import { motion } from "motion/react"

import * as variants from "@/lib/motionVariants"
import { blogData } from "@/constants"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"


const Blog = () => {
    return (
        <section className="section" >
            <div className="container">
                <div className="section-head">
                    <motion.p className="section-subtitle" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {blogData.sectionSubtitle}
                    </motion.p>
                    <motion.h2 className="section-title" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {blogData.sectionTitle}
                    </motion.h2>
                    <motion.p className="section-text" variants={variants.fadeInUp} initial="start" whileInView="end" viewport={{ once: true }}>
                        {blogData.sectionText}
                    </motion.p>
                </div>

                <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" 
                variants={variants.staggerContainer} initial="start" whileInView="end" viewport={{ once: true }}>
                    {blogData.blogs.map(({badge,imgSrc,title,author:{authorName,avatarSrc, publishDate,readingTime}},index) => (
                        <motion.div className="" key={index} variants={variants.fadeInUp}>
                            <Card className="group">
                                <CardHeader>
                                    <figure className="rounded-lg overflow-hidden">
                                        <img src={imgSrc} alt={title} className="img-cover group-hover:scale-105 transition-transform duration-500" />
                                    </figure>
                                </CardHeader>
                                <CardContent>
                                    <Badge className="mb-3">{badge}</Badge>
                                    <CardTitle className="leading-normal">
                                        <a href="#" className="hover:text-primary transition-colors">{title}</a>
                                    </CardTitle>
                                </CardContent>
                                <CardFooter className="gap-3">
                                    <Avatar>
                                        <AvatarImage src={avatarSrc} />
                                        <AvatarFallback>{authorName}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm mb-0.5">{authorName}</p>

                                        <div className="flex items-center gap-1.5">
                                            <time dateTime={publishDate}  className="text-xs text-muted-foreground">{publishDate}</time>
                                            <span className="w-1 h-1 bg-muted-foreground/50 rounded-full"></span>
                                            <p className="">{readingTime}</p>
                                        </div>
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

export default Blog