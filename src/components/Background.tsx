import React, { useRef, VFC } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { css } from '@emotion/css';

export const Background: VFC = () => {
	const bgRef = useRef<HTMLDivElement>(null)

	const dropEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()

		const files = e.dataTransfer.files
		if (files && files[0]) {
			const reader = new FileReader()
			reader.onloadend = () => {
				bgRef.current!.style.backgroundImage = `url(${reader.result})`
			}
			reader.readAsDataURL(files[0])
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.iconContainer}>
				<RiImageAddFill className={styles.icon} />
			</div>
			<div
				ref={bgRef}
				className={styles.img}
				draggable
				onDragOver={e => e.preventDefault()}
				onDrop={dropEnterHandler}
			/>
		</div>
	)
}

const styles = {
	container: css`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	img: css`
		position: relative;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
	`,
	iconContainer: css`
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 15vw;
		height: 15vw;
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 50%;
		backdrop-filter: blur(10px);
	`,
	icon: css`
		position: absolute;
		font-size: 10vw;
		color: #696969;
	`
}
