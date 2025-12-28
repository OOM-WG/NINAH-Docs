import {type ReactNode} from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

export default function SignsInfo({god, bad}: {god: string; bad: string}): ReactNode {
	return (
		<Tabs groupId='human-type' queryString>
			<TabItem value='real' label='人类'>
				<img src={god} width='66%' />
			</TabItem>
			<TabItem value='not' label='伪人'>
				<img src={bad} width='66%' />
			</TabItem>
		</Tabs>
	)
}
