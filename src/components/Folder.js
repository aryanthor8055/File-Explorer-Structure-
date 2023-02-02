import React, { useState } from 'react'

const Folder = ({ explorer }) => {
    const [expand, setExpand] = useState(false)

    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className='folder' onClick={() => setExpand(!expand)}>
                    <span>📁{explorer.name}</span>
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {explorer.items.map((exp) => {
                        return (
                            <span><Folder explorer={exp} key={exp.id} /></span>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <span className='file'>📄{explorer.name}</span>
        )
    }
}

export default Folder;