import {type ReactNode} from 'react'

import Microlink from '@microlink/react'

export default function CharPlot({url}: {url: string}): ReactNode {
	return (
		<Microlink
			url={url}
			media='screenshot'
			size='large'
			lazy={false}
			setData={{
				title: '人物个人剧情',
				description: 'by 抖音@Rug'
			}}
		/>
	)
}
