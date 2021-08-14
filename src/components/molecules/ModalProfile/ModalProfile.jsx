import { Fragment } from 'react-is'
import { useSelector } from 'react-redux'
import { dateFormat } from '../../../utils/dateFormat'
import modalProfile from './ModalProfile.module.css'

const ModalProfile = () => {
  const { characterProfile, loading } = useSelector(
    (state) => state.getUserByIdReducer
  )
  return (
    <Fragment>
      {loading === 'pending' ? (
        <span> loading...</span>
      ) : (
        <Fragment>
          {characterProfile && Object.keys(characterProfile).length > 0 ? (
            <Fragment>
              <h6 className={modalProfile['c-title']}>Perfil</h6>
              <div className={modalProfile['c-cardProfile']}>
                <div className={modalProfile['c-cardprofile_image']}>
                  <img
                    src={characterProfile.picture}
                    alt="imagen perfil dedl usuario"
                  />
                </div>
                <div className={modalProfile['c-cardProfile_personal']}>
                  <p>
                    <strong>Nombre: </strong>
                    {`${characterProfile.title} ${characterProfile.firstName} ${characterProfile.lastName}`}
                  </p>
                  <p>
                    <strong>Fecha de Registro: </strong>
                    {dateFormat(characterProfile.registerDate)}
                  </p>
                  <p>
                    <strong>Fecha de nacimiento: </strong>
                    {dateFormat(characterProfile.dateOfBirth)}
                  </p>
                  <p>
                    <strong>Genero: </strong>
                    {characterProfile.gender}
                  </p>
                </div>
                <div className={modalProfile['c-cardProfile_contact']}>
                  <p>
                    <strong>Telefono: </strong>
                    {characterProfile.phone}
                  </p>
                  <p>
                    <strong>Correo: </strong>
                    {characterProfile.email}
                  </p>
                </div>
                <div className={modalProfile['c-gridProfile_location']}>
                  <h6 className={modalProfile['c-title']}>Direccion</h6>
                  <div className={modalProfile['c-cardprofile_address']}>
                    <p>
                      <strong>Ciudad: </strong>
                      {characterProfile.location.city}
                    </p>
                    <p>
                      <strong>Pais: </strong>
                      {characterProfile.location.country}
                    </p>
                    <p>
                      <strong>Estado: </strong>
                      {characterProfile.location.state}
                    </p>
                    <p>
                      <strong>Ciudad: </strong>
                      {characterProfile.location.city}
                    </p>
                    <p>
                      <strong>Calle: </strong>
                      {characterProfile.location.street}
                    </p>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <span>no hay perfil</span>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export { ModalProfile }
