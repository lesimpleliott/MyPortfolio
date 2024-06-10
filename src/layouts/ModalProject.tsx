import myProjects from "../assets/datas/myProjects.json";
import Modal from "../components/modal/Modal";
import ModalProjectText from "../components/modal/ModalProject-Text";
import ModalProjectBanner from "../components/modal/ModalProjectBanner";
import useStoreProject from "../stores/project.store";

const ModalProject = () => {
  const { tabIndex } = useStoreProject();
  const project = myProjects[tabIndex];

  return (
    <Modal>
      <ModalProjectBanner project={project} />
      <ModalProjectText project={project} />
    </Modal>
  );
};

export default ModalProject;
