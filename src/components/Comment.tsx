import { ThumbsUp, TrashSimple } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ptBR } from 'date-fns/locale';
import { formatDistanceToNow } from 'date-fns';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount ] = useState(0);

    function handleDeleteComment() {    
        onDeleteComment(content);
    }   

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }


    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diaspd.png" alt=""/>
        
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Dias</strong>
                            <time 
                              title="11 de Maio às 11:13" 
                              dateTime="2022-05-11 08:13:30"
                            >
                                {formatDistanceToNow(new Date() ,{
                                  locale: ptBR,
                                  addSuffix: true,
                                })}
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <TrashSimple size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={22} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        
        </div>
    )
}