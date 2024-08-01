import Link from "next/link";

import {FaGithub, FaLinkedinIn,FaYoutube ,FaFacebook,FaWhatsapp, FaInstagram} from "react-icons/fa";

const socials=[
    {icon:<FaGithub/>,path:"https://github.com/naveendasun321"},
    {icon:<FaLinkedinIn/>,path:""},
    {icon:<FaYoutube/>,path:""},
    {icon:<FaFacebook/>,path:""},
    {icon:<FaInstagram/>,path:""},
   /* {icon:<FaWhatsapp/>,path:""},*/
];

const Social =({containerStyles , iconStyles})=>{
    return <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>;
};

export default Social;