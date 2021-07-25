import React from 'react'
import Modal from './Modal';
import ClickMe from './ClickMe';
import OpenModalButton from './OpenModalButton'

const ContentPage = () => {
    return (
        <div>
            <OpenModalButton />

            <ClickMe />

            <Modal>
                <p>This is modal!</p>
            </Modal>
        </div>
    )
}

export default ContentPage
