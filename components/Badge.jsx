import clsx from 'clsx';

export default function Badge({children, color, shape}) {
    const styles = clsx('badge',
        color==="gray" && 'gray',
        color==="red" && 'red',
        color==="yellow" && 'yellow',
        color==="green" && 'green',
        color==="blue" && 'blue',
        color==="indigo" && 'indigo',
        color==="purple" && 'purple',
        color==="pink" && 'pink',
        shape==="pill" && 'badge-pill')

    return (
        <div class={styles}>{children}</div>
    )
}