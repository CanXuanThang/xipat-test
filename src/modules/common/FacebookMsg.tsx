import { CustomChat, FacebookProvider } from "react-facebook";

function FacebookMsg() {
    return ( 
        <FacebookProvider appId="3435776916557777" chatSupport>
            <CustomChat pageId="336536199553790" minimized={true}/>
        </FacebookProvider> 
     );
}

export default FacebookMsg;