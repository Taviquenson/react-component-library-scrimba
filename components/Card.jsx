import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({
    jsxIcon=<HiOutlineCloudUpload className='card-icon' color='#FFFFFF'/>,
    iconBackgroundColor='#3F75FE',
    ...rest
}) {
    const hasIcon = Object.keys(rest).includes(jsxIcon)
    const hasBackground = Object.keys(rest).includes(iconBackgroundColor)

    console.log(rest.jsxIcon)
    return (
        <div className="card">
            <div className="card-icon-container" style={{backgroundColor: hasBackground ? 
                                                            rest.iconBackgroundColor
                                                            :
                                                            iconBackgroundColor}}>
                {hasIcon ? rest.jsxIcon : jsxIcon}
            </div>
            <div className="card-content">
                <span className="title">
                    {rest.title}
                </span>
                <span className="text">
                    {rest.text}
                </span>
            </div>
        </div>
    )
}