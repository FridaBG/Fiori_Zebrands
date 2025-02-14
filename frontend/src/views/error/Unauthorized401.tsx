import Button from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import Lottie from 'lottie-react';
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Astronaut from '../../assets/lotties/nodata.json';
import { Sidebar } from '../../components';
import { userDataContext } from '../../contexts';

interface Unauthorized401Props {}

const Unauthorized401: FC<Unauthorized401Props> = ({}) => {
  const navigate = useNavigate();
  const { user } = useContext(userDataContext);
  if (!user) {
    navigate('/404');
  }
  return (
    <div className="flex flex-col items-center justify-center text-center gap-7 w-auto h-screen mx-[9vw] ml-[9vw]">
      <Sidebar />
      <div className="flex flex-col items-center justify-center w-full h-screen gap-8">
        <div className="absolute text-[13rem] md:text-[20rem] font-bold text-information top-32 md:top-0">
          401
        </div>
        <div className="w-8/12 relative">
          <Lottie
            animationData={Astronaut}
            loop={true}
            className="w-full"
          />
        </div>
        <div className="w-full flex flex-col gap-11">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-information">
              Oops, parece que has llegado demasiado lejos en el
              espacio.
            </h2>
            <p className="text-paragraph text-base font-medium">
              Esta área es solo para usuarios autorizados. Si tienes
              problemas para acceder, ponte en contacto con el
              administrador para obtener ayuda.
            </p>
          </div>
          <div>
            <Button
              onClick={() => {
                navigate(-1);
              }}
              appearance="primary"
              iconBefore={
                <ArrowLeftIcon
                  label="volver a pagina anterior"
                  primaryColor="white"
                />
              }
            >
              Volver a la página anterior
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized401;
