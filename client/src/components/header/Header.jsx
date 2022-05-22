import style from './header.module.scss'
import LogoSvg from './img/logo.svg'
import BasketSvg from './img/basket.svg'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.leftContainer}>
                <img className={style.logoImg} src={LogoSvg} alt="" />
                <div className={style.wrapper}>
                    <div className={style.name}>Чорнобаївка</div>
                    <div className={style.desc}>Слава Україні. Героям Слава</div>
                </div>
            </div>
            <div className={style.rightContainer}>
                <div className={style.rectangle}>
                    <div className={style.cost}>73 ₴</div>
                    <div className={style.count}>
                        <img className={style.basketImg} src={BasketSvg} alt="" />
                        <span>3</span>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Header