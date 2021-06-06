import React from "react";
const Social =(props)=>{
    
    const Media = props.post.map((obj)=>{
        const {
            id,
      owner,
      avatar,
      title,
      text,
      likes,
      comments,
      share,
      createdAt,
        } = obj;
        return (
            <div className="posts" key={id}>
        <h2>
          {avatar} {owner} <span>{title}</span>
          <span>{createdAt}</span>
        </h2>
        <h4>{text}</h4>
        <div>
          <span>👍🏻{likes}</span>
          <span>💬{comments}</span>
          <span>📤{share}</span>
        </div>
      </div>
        );
    });
    return(
    <div>
{Media}
    </div>
    );
};




export default Social;