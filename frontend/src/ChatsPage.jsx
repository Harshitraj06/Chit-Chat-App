import {PrettyChatWindow} from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
  return <div style={{height: '100vh'}}>
    <PrettyChatWindow
    projectId='34d27ec3-b843-4080-9523-f8e7da357e2f'
    username={props.user.username}
    secret={props.user.secret}
    style={{height: '100%'}}
    />
  </div>
}

export default ChatsPage