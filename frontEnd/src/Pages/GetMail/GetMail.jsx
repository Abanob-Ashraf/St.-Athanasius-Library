import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Form , useActionData , Link } from 'react-router-dom';
import { getMail } from '../../APIs';
import './GetMail.scss';


export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    try {
        const mail = await getMail({email});
        return <h1>hello</h1>;
    }catch(err){
        return err;
    }
}

let GetMAil = ({ onClickForGetMail }) => {
    const auth = useActionData();
  return (
    <div className="overlay">
        <div className="get-mail the-service">
            <div className="flex-collection">
                <div className="service-name">نسيت كلمه المرور</div>
                <Link onClick={onClickForGetMail} relative='path'><FontAwesomeIcon icon={faArrowLeft} size='xl' className='back-icon'/></Link>
            </div>
            <Form method='POST' replace className="get-mail-form">
                <div className="collection">
                    <input type="email" name='email' placeholder='إدخل البريد الألكتروني لتصلك رساله تغير كلمه المرور' className="email" />
                </div>
                <input type="submit" className="submit" value="إرسال"/>
            </Form>
        </div>
    </div>
  )
}

export default GetMAil;