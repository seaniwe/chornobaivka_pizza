import { useState } from 'react'
import style from './categories.module.scss'
const data = require('./config')

function Categories() {
    const [categoryId, setActiveCategory] = useState(0)

    return (
        <div className={style.categories}>
            {
                data.map((item) => 
                    categoryId == item.id ? 
                        <div className={style.item}  style={{background: '#282828', color: '#fff'}} key={item.id}>{item.text}</div>
                            : 
                        <div className={[style.item]} onClick={() => setActiveCategory(item.id)}  key={item.id}>{item.text}</div>
                )
            }
        </div>
    )
}

export default Categories