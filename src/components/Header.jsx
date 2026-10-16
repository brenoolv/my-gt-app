import styles from './Header.module.css';

export function Header({brand, description, children}) {
    return(
        <header className={styles.header}>
            <div className={styles.brand}>
                <div className={styles.logo}>GT</div>
                <div>
                    <strong>{brand}</strong>
                    <span>{description}</span>
                </div>
            </div>
            <nav className={styles.navigation}
            aria-label='Navegação Principal'>
                {children}
            </nav>
        </header>
    );
}