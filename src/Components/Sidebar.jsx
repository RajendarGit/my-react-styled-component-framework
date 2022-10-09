import { FiX } from 'react-icons/fi';
import { Card, CardContent } from '../Style/Card';
import { Modal, ModalClose } from '../Style/Modal';
import { MenuContent } from './MenuContent';

const styleCard = {
  height: '100vh',
}

export const Sidebar = ({open, setOpen}) => {
  return (
    <>
    {open &&
    <Modal aside right fixed>
      <Card style={styleCard}>
        <ModalClose onClick={(e) => setOpen(false)}><FiX/></ModalClose>
        <CardContent>
          <MenuContent open={open} setOpen={setOpen}/>
        </CardContent>
      </Card>
    </Modal>
    }
    </>
  )
}
