import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState, VFC } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { useRecoilValue } from 'recoil';
import { css, cx } from '@emotion/css';
import { useFilterProps } from '../hooks';
import { filterState } from '../store';
import { FilterProps } from '../types';

type FiltersPanelProps = {
	screenRef: React.RefObject<HTMLDivElement>
}

export const FiltersPanel: VFC<FiltersPanelProps> = ({ screenRef }) => {
	const filters = useRecoilValue(filterState)

	return (
		<>
			{filters.map(filter => (
				<FilterPlane key={filter.uid} filterId={filter.uid} screenRef={screenRef} />
			))}
		</>
	)
}

// ==============================================

type FilterPlaneProps = {
	filterId: string
	screenRef: React.RefObject<HTMLDivElement>
}

const FilterPlane: VFC<FilterPlaneProps> = ({ filterId, screenRef }) => {
	const { filterProps, setFilterProps } = useFilterProps(filterId)
	const props = filterProps!

	const { ref: resizeDetectorRef, width, height } = useResizeDetector({ skipOnMount: true })
	const [resizing, setResizing] = useState(false)
	const [hoveredHelper, setHoveredHelper] = useState(false)
	const helperMouseDownRef = useRef(false)

	const setValidatedFilterSize = useCallback(
		(width: number, height: number) => {
			const resizedWidth = Math.min(window.innerWidth, width)
			const resizedHeight = Math.min(window.innerHeight, height)
			setFilterProps({ ...props, width: resizedWidth, height: resizedHeight })
		},
		[props, setFilterProps]
	)

	useEffect(() => {
		if (width && height && helperMouseDownRef.current) {
			setResizing(true)
			setValidatedFilterSize(width, height)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [height, width])

	useEffect(() => {
		// window サイズを変更した時の処理
		const resizeHandler = () => {
			setValidatedFilterSize(props.width, props.height)
		}
		window.addEventListener('resize', resizeHandler)
		return () => window.removeEventListener('resize', resizeHandler)
	}, [props, setValidatedFilterSize])

	useEffect(() => {
		// resize helperのサイズを更新する
		resizeDetectorRef.current!.style.width = props.width + 'px'
		resizeDetectorRef.current!.style.height = props.height + 'px'
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props])

	const clickHandler = () => {
		setFilterProps({ ...props, zIndex: 1 })
	}

	const refreshResizeHelper = () => {
		resizeDetectorRef.current!.style.width = props.width + 'px'
		resizeDetectorRef.current!.style.height = props.height + 'px'
		setHoveredHelper(false)
		setResizing(false)
		helperMouseDownRef.current = false
	}

	return (
		<motion.div
			className={styles.container}
			drag={!resizing}
			dragPropagation
			dragConstraints={screenRef}
			dragMomentum={false}
			onClick={clickHandler}
			onDoubleClick={refreshResizeHelper}>
			{/* filter */}
			<div className={styles.filter(props)} />
			{/* helper */}
			<div
				ref={resizeDetectorRef}
				className={cx(styles.helper(props), { [styles.resizeGuaider]: hoveredHelper })}
				onMouseEnter={() => setHoveredHelper(true)}
				onMouseLeave={() => !resizing && setHoveredHelper(false)}
				onMouseUp={() => {
					setResizing(false)
					helperMouseDownRef.current = false
				}}
				onMouseDown={() => (helperMouseDownRef.current = true)}
			/>
		</motion.div>
	)
}

// ==============================================
// styles

const styles = {
	container: css`
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	filter: (props: FilterProps) => css`
		position: relative;
		width: ${props.width}px;
		height: ${props.height}px;
		background-color: rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a});
		backdrop-filter: blur(${props.blur}px);
		border-radius: ${props.borderRadius}%;
		z-index: ${props.zIndex};
	`,
	helper: (props: FilterProps) => css`
		position: absolute;
		width: ${props.width}px;
		height: ${props.height}px;
		z-index: ${props.zIndex};
	`,
	resizeGuaider: css`
		border: 2px solid red;
		box-sizing: content-box;
		resize: both;
		overflow: hidden;
	`
}
