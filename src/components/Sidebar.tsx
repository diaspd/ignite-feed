import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
              className={styles.cover}             
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
              alt="logo Rocketseat"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/diaspd.png" />

                <strong>Pedro Dias</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                  <PencilSimpleLine size={20} />
                  Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}