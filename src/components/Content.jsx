import React from "react";


const Content = () => {
    return (
        <div>
            <div className='content'>
                <div>
                    <img src='https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg' />
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                </div>
                <div className='posts'>
                    <div className='item'>
                        Post 1
                    </div>
                    <div className='item'>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;