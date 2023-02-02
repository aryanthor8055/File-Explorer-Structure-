import React from 'react'

const Folder = ({ explorer }) => {

    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className='folder'>
                    <span>📁{explorer.name}</span>
                </div>
                <div>
                    {explorer.items.map((exp) => {
                        return (
                            <span>{exp.name}</span>
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