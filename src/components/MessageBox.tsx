import { useState } from "react"

interface Props {
    text: string,
    messageKey: number,
    time: string,
    clientSentMsg: boolean,
    name: string
}

const MessageBox = ({ text, messageKey, time, clientSentMsg, name}: Props) => {
    const [hovered, setHovered] = useState(false)

    return (
        <>
            {clientSentMsg ? (
                <div className='flex flex-row items-center'>
                    <div className='flex flex-row items-center ml-auto'
                        onMouseEnter={() => { setHovered(true) }}
                        onMouseLeave={() => { setHovered(false) }}>
                        <div
                            key={messageKey}
                            className={`bg-blue-500 p-2 flex items-center justify-between rounded-md max-w-xs md:max-w-md mb-3 ${hovered ? '' : 'mr-5'}`}>
                            <div className="text-white">{text}</div>
                        </div>
                        {hovered ? (<div className='mb-3 ml-1'>{time}</div>) : <></>}
                    </div>

                </div>

            ) : (
                <div className='flex flex-col'>
                    <div className='ml-5'>{name}</div>
                    <div className='flex flex-row items-center mr-auto'
                        onMouseEnter={() => { setHovered(true) }}
                        onMouseLeave={() => { setHovered(false) }}>
                        <div
                            key={messageKey}
                            className={`bg-gray-300 p-2 flex items-center justify-between mr-auto rounded-md max-w-xs md:max-w-md mb-3 ml-5`}>
                            <div className="text-black">{text}</div>
                        </div>
                        {hovered ? (<div className='mb-3 ml-1'>{time}</div>) : <></>}
                    </div>

                </div>
            )}

        </>

    )
}

export default MessageBox;