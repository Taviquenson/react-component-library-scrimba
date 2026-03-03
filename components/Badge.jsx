import clsx from 'clsx';

export default function Badge({children, color, shape}) {
    const styles = clsx('badge', color==="red" && 'badge-red', shape==="pill" && 'badge-pill')

    return (
        <div class={styles}>{children}</div>
    )
}