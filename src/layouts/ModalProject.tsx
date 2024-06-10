import myProjects from "../assets/datas/myProjects.json";
import ModalProjectText from "../components/modal/ModalProject-Text";
import ModalProjectBanner from "../components/modal/ModalProjectBanner";
import useStoreProject from "../stores/project.store";

const ModalProject = () => {
  const { tabIndex } = useStoreProject();
  const project = myProjects[tabIndex];

  return (
    <>
      <ModalProjectBanner project={project} />
      <ModalProjectText project={project} />
    </>
  );
};

export default ModalProject;
