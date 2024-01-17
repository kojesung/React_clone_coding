import React, { useState } from "react";

function CommentInput({ onCommentSubmit }) {
    const [commentText, setCommentText] = useState("");

    const handleCommentSubmit = () => {
        if (commentText.trim() !== "") {
            onCommentSubmit(commentText);
            setCommentText("");
        }
    };

    return (
        <div>
            <textarea
                placeholder="댓글을 입력하세요..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleCommentSubmit}>등록</button>
        </div>
    );
};

function Comment({ text }) {
    return <div>
        <div>{text}</div>
    </div>;
}//Answer컴포넌트

function CommentList({ comments }) {
    return (
        <ul>
            {comments.map((comment, index) => (
                <Comment key={index} text={comment} />
            ))}
        </ul>
    );
}

function Test() {
    const [comments, setComments] = useState([]);

    // 댓글 등록 함수
    const handleCommentSubmit = (newComment) => {
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
    };

    return (
        <div>
            <h1>댓글 목록</h1>
            {/* 댓글 목록 */}
            <CommentList comments={comments} />
            {/* 댓글 입력 컴포넌트 */}
            <CommentInput onCommentSubmit={handleCommentSubmit} />
        </div>
    );
}

export default Test;
