import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'
import ListItem, { ListItemData } from '../../ProjectList/components/ListItem'

type ProjectsProps = {
    data?: ListItemData[]
}

const Projects = ({ data = [] }: ProjectsProps) => {
    const navigate = useNavigate()

    const onViewAllProjects = () => {
        navigate('/app/project/project-list')
    }

    return (
        <div/>
    )
}

export default Projects
