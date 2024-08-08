import Link from "next/link";

import {FaGithub, FaLinkedinIn,FaYoutube ,FaFacebook,FaWhatsapp, FaInstagram,FaTiktok} from "react-icons/fa";

const socials=[
    {icon:<FaGithub/>,path:"https://github.com/SouroN21"},
    {icon:<FaLinkedinIn/>,path:"https://www.linkedin.com/in/naveen-dasunpriya-336159322"},
    {icon:<FaYoutube/>,path:""},
    {icon:<FaFacebook/>,path:"https://www.facebook.com/profile.php?id=100009860147015"},
    {icon:<FaInstagram/>,path:"https://www.instagram.com/_.souron.__?"},
    {icon:<FaWhatsapp/>,path:"https://wa.me/94766876368"},
    {icon:<FaTiktok/>,path:"https://www.tiktok.com/@souron21?"},
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