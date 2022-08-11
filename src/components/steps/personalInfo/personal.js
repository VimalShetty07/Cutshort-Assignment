import React from 'react'
import MasterInput from '../../mainInput/masterINput'
import { useGlobalFormValues } from '../../../fromDataContext'

function Personal() {
    const {formData,setFormData} = useGlobalFormValues()
    return (
        <>
        <div className='sub-form-container'>
        <div className='perosnal-headings'>
                <h2 className='common-head'>Welcome! First things first...</h2>
                <p className='common-description'>you can always change them later</p>
            </div>

            <div className='mainForm'>
                <div className='FormParts'>
                    <label className='forLabel' htmlFor='Full Name'>Full Name</label>
                    <MasterInput name={'fullName'} styleclasses={'forInputs'} value={formData?.fullName} changeHandler={(e)=>{setFormData({...formData,fullName:e.target.value})}} />
                </div>

                <div className='FormParts'>
                    <label className='forLabel' htmlFor='Display Name'>Display Name</label>
                    <MasterInput name={'displayName'} styleclasses={'forInputs'} value={formData?.displayName} changeHandler={(e)=>{setFormData({...formData,displayName:e.target.value})}} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Personal
