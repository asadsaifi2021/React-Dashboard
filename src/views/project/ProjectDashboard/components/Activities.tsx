import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Timeline from '@/components/ui/Timeline'
import Event from '@/views/account/ActivityLog/components/Event'
import TimelineAvatar from '@/views/account/ActivityLog/components/TimeLineAvatar'
import { useNavigate } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

type ActivitiesProps = {
    data?: {
        type: string
        dateTime: number
        ticket?: string
        status?: number
        userName: string
        userImg?: string
        comment?: string
        tags?: string[]
        files?: string[]
    }[]
}

const Activities = ({ data = [] }: ActivitiesProps) => {
    const navigate = useNavigate()

    const onViewAllActivity = () => {
        navigate('/app/account/activity-log')
    }

    return (
        <div/>
    )
}

export default Activities
