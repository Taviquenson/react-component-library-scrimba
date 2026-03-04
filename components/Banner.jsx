import clsx from 'clsx';
import checkCircle from '/src/assets/check-circle.png'
import exclamation from '/src/assets/exclamation.png'
import xCircle from '/src/assets/x-circle.png'
import neutralIcon from '/src/assets/neutral-icon.png'

export default function Banner({status, title, text}) {
    const styles = clsx(
        'banner',
        status==='success' && 'success',
        status==='warning' && 'warning',
        status==='error' && 'error',
        status==='neutral' && 'neutral',
    )

    const iconSrc = clsx(
        status==='success' && checkCircle,
        status==='warning' && exclamation,
        status==='error' && xCircle,
        status==='neutral' && neutralIcon,
    )

    return (
        <div className={styles}>
            <img className='banner-icon' src={iconSrc}/>
            <div className='banner-content'>
                <span className='title'>{title}</span>
                <span className='text'>{text}</span>
            </div>
        </div>
    )
}