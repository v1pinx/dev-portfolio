import './Project.css';
import 'remixicon/fonts/remixicon.css'

const ProjectCard = ({ image, name, description }: {
    image: string;
    name: string;
    description: string;
}) => {
    return (
        <div className='project-card'>
            <img src={image} alt='project' className='project-image' />
            <div className='project-name'>{name}</div>
            <div className='project-description'>{description}</div>
            <button className='project-btn'><i className="ri-github-fill"></i> GitHub</button>
        </div>
    )
}

const Project = () => {
    return (
        <>
            <div className='project-section'>
                <div className='project-heading'>Projects</div>
                <div className='project-cards'>
                    <ProjectCard
                        image='https://placewaifu.com/image/400'
                        name='Skyline Revamp'
                        description='An urban planning project focused on revamping the city skyline with sustainable skyscrapers and green technology.'
                    />

                    <ProjectCard
                        image='https://placewaifu.com/image/400'
                        name='EcoCycle Initiative'
                        description='A community-driven initiative aimed at promoting cycling as a sustainable mode of transportation and reducing carbon footprints.'
                    />

                    <ProjectCard
                        image='https://placewaifu.com/image/400'
                        name='Green Gardens'
                        description='A project designed to transform unused urban spaces into community gardens that promote local food production and biodiversity.'
                    />

                    <ProjectCard
                        image='https://placewaifu.com/image/400'
                        name='SolarTech Innovations'
                        description='An innovative startup focusing on affordable and efficient solar panel technology to provide clean energy solutions.'
                    />
                </div>
            </div>
        </>
    )
}

export default Project;