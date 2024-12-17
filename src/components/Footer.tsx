import { footerData } from "@/constants"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="section !pb-0">
        <div className="container">
            <div className="grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4">
                <Logo />
                <div className="grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3">
                    {footerData.links.map(({items,title},index) => (
                        <ul key={index}>
                            <p className="mb-4">{title}</p>
                            {items.map(({href,label},index) => (
                                <li className="text-muted-foreground" key={index}>
                                    <a href={href} className="inline-block py-1 transition-colors hover:text-primary">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>

            <div className="flex justify-between mt-12 border-t border-gray-600/10 py-6">
                <a href="https://www.github.com/diegovilhalva" target="_blank" className="">
                    {footerData.copyright}
                </a>
                <div>
                    <ul className="flex gap-5">
                        {footerData.socialLinks.map(({href,icon},index) => (
                            <li key={index}>
                                <a href={href} target="_blank">{icon}</a>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer