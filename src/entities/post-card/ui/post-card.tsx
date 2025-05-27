import css from './post-card.module.scss'
import { TimeAgo, TextWeigth, UserInfo } from '@/shared/ui'

export const PostCard = () => {
	return (
		<div className={css.card}>
			<div className={css.img}></div>
			<div className={css.info}>
				<TimeAgo time='2 н.' />
			</div>
			<div className={css.content}>
				<div className={css.title}><TextWeigth text='Каннабис при cиндроме ломкой Х-хромосомы' /></div>
				<div className={css.text}>Во время дежурства поступает вызов от фельдшерской бригады с поводом : женщина 20 лет, геморрагический шок. По приезду в адрес следующая картина. Обстановка в квартирке асоциальная, как говорит один мой фельфшер "афроремонт". В одной из комнат, на старом засаленном диване лежит девИца весьма вульгарного вида. Ну да мне то, как говориться, с ней детей не крестить, поэтому по сути : состояние тяжёлое, в сознании, контакт затруднён из за состояния шока, усугублённого алкогольным опьянением и общим негативным отношением ко </div>
			</div>
			<div className={css.footer}>
				<UserInfo avatar='' name='' position='' />
			</div>
		</div>
	)
}