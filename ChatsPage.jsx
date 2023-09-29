import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced' 

const ChatsPage = (props) =>{
    const chatProps= useMultiChatLogic(
        '8331eb88-a150-4866-9889-19ae4ea9ebd7',
        props.user.username,
         props.user.secret
         );
        return (
            <div style={{height: '100vh'}}>
                <MultiChatSocket {...chatProps} />
                <MultiChatWindow {...chatProps} style={{height: '100%'}} />
            </div>
        )
}

export default ChatsPage