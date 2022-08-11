import React from 'react'
import MasterInput from '../../mainInput/masterINput'
import { useGlobalFormValues } from '../../../fromDataContext'

function Workspace() {
    const { formData, setFormData } = useGlobalFormValues()
    return (
        <>
            <div className='sub-form-container'>
                <div className='perosnal-headings'>
                    <h2 className='common-head'>Let's set up a home for all your work</h2>
                    <p className='common-description'>You can always change them later.</p>
                </div>
                <div className='mainForm'>
                    <div className='FormParts' >
                        <label className='forLabel' htmlFor='Workspace Name'>Workspace Name</label>
                        <MasterInput styleclasses={'forInputs'} name={'workspaceName'} placeholder={'Eden'} value={formData?.workspaceName} changeHandler={(e) => {
                            setFormData({
                                ...formData, workspaceName: e.target.value
                            })
                        }} />
                    </div>

                    <div className='FormParts'>
                        <label className='forLabel' htmlFor='workspace url'>Workspace Url(optional)</label>
                        <div className='mix-input'>
                            <span className='mixed'>www.Eden.com/</span>
                            <MasterInput styleclasses={'forInputs mix-in'} name={'workspaceUrl'} placeholder={'Example'} value={formData?.workspaceUrl} changeHandler={(e) => {
                                setFormData({
                                    ...formData, workspaceUrl: e.target.value
                                })
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Workspace
