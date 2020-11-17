import React from 'react';
import axios from 'axios';
import './DetailedPost.css'

class DetailedPost extends React.Component{
    state = {
        post: null
    }

    componentDidUpdate() {

        if(this.props.postID){

            if(!this.state.post || (this.state.post && (this.props.postID !== this.state.post.id))){
                axios.get('/posts/' + this.props.postID)
                    .then(response => {
                        const updatePost = {...response.data, author:"Gio"}
                        this.setState({post: updatePost})
                    })
            }
        }
        
    }


    render(){

        let post = null;

        if(this.props.postID && !this.state.post){
            post = <p>Loading...!</p>;
        }

        if(this.props.postID && this.state.post){
            post = (
            <div>
                <p>{this.state.post.title}</p>
                <p>{this.state.post.body}</p>
                <p>{this.state.post.author}</p>
            </div>);
        }
        

        if(!this.props.postID){
            post = <p>Select your post!</p>
        }

        return (
            <div className="DetailedPost">{post}</div>
            
        );
    }

}

export default DetailedPost;