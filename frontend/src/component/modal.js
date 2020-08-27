import React from 'react'
import '../css/modal.css'
export default class Modal extends React.Component {
    render () {
        if (!this.props.show) {
            return null
        }
        /* <div className='Modal'>
                <div>{this.props.children}</div>
                <div>
                <button onClick={this.props.onHandleonClose}>Close</button>
            </div>
            </div>
*/
        return (

            <div className='Modal shadow-lg p-3 mb-5 bg-white rounded border border-danger'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='w-50 mx-auto modal-title '>ATTENTION</h1>
                        </div>
                        <div className='modal-body'>
                            <h5 className='mx-auto'>{this.props.children}</h5>
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-outline-danger w-50' onClick={this.props.onHandleonClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
