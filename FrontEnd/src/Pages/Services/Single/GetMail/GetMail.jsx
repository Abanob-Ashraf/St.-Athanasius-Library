import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getMail } from '../../../../APIs';
import './GetMail.scss';



let GetMAil = ({ onClickForGetMail }) => {
    const [getMailFeatch , setgetMailFeatch] = useState({ email: "" });
    const [getMailSuccess , setGetMailSuccess] = useState()
    const [getMailErrors , setGetMailErrors] = useState();
    let handleChange = (e) => {
        const { name, value } = e.target
        setgetMailFeatch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const user = await getMail(getMailFeatch);
            setGetMailSuccess(user)
            return setTimeout(() => setGetMailSuccess(null), 5000);;
        }catch(err){
            setGetMailErrors(err);
            return setTimeout(() => setGetMailErrors(null), 5000);
        }
    }
    
  return (
    <div className="overlay">
        <div className="get-mail the-service">
            <div className="flex-collection">
                <div className="service-name">نسيت كلمه المرور</div>
                <Link onClick={onClickForGetMail}><FontAwesomeIcon icon={faArrowLeft} size='xl' className='back-icon'/></Link>
            </div>
            <form method='POST' onSubmit={handleSubmit} className="get-mail-form">
                <div className="collection">
                    <input 
                    type="email" 
                    name='email' 
                    onChange={handleChange} 
                    value={getMailFeatch.email}
                    placeholder='إدخل البريد الألكتروني لتصلك رساله تغير كلمه المرور' 
                    className="email" />
                </div>
                {getMailSuccess && <small className='note'>تفقد بريدك الألكتروني</small>}
                {getMailErrors && <small className='note'>
                {getMailErrors.statusText == "this email does not exiest here" ?
                 "هذا البريد الألكتروني غير موجود" :
                  null}</small>}
                <input type="submit" className="submit" value="إرسال"/>
            </form>
        </div>
    </div>
  )
}

export default GetMAil;