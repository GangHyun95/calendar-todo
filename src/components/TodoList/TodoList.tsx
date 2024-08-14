import React from 'react';
import styles from './TodoList.module.css'
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoContent from '../TodoContent/TodoContent';

export default function TodoList() {
    return (
        <div className={styles['todo-list']}>
            <TodoHeader/>
            <TodoContent/>
        </div>
    );
}

