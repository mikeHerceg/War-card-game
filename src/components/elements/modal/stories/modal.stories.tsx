
import React, {useState}  from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from '..';
import { Button } from '../../../buttons/button';

export default {
  title: 'Elements/Modal',
  component:Modal,
} as ComponentMeta<typeof Modal>;

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Modal> = args => <Modal  {...args}/>;

// 👇 Each story then reuses that template
export const Default = ()=>{
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return(
        <>
            <Button text="open" onClick={()=>setIsVisible(true)}/>
            <Modal isVisible={isVisible} onClose={()=>setIsVisible(false)}>
                <>
                    I'm modal content
                </>
            </Modal>
        </>

    )
}



