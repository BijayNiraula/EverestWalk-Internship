interface IProjectCard {
  img: string;
}

const ProjectCard: React.FC<IProjectCard> = ({ img }) => {
  return <img src={img} className="w-full" width="200" height="200" />;
};

export default ProjectCard;
