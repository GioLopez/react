import React from 'react';
import axios from 'axios';
import './Post.css'
import DetailedPost from '../DetailedPost/DetailedPost';


class Post extends React.Component{

    state = {
        posts: [],
        serverStatus: false,
        selectedPost: null,
        error: false
    }

    componentDidMount () {
        axios.get('/posts')
            .then( response => {
                const updatedPost = response.data.slice(0, 10).map( x => {return {...x, author:'Gio'}})
                // console.log(updatedPost);
                this.setState({posts: updatedPost, serverStatus: true, error: false})
            })
            .catch( error => {
                // console.log(error.response);
                this.setState({serverStatus: false, error: true})
            })
    }

    selectedPostHandler = (id) => {
        this.setState({selectedPost: id})
    }


    render(){
        let posts = null

        if(this.state.error){
            posts = <p>Something when wrong :(!</p>
        }

        if (this.state.serverStatus && this.state.posts && !this.state.error){
            posts = this.state.posts.map( post => {
                return (
                    <div className="postBox" key={post.id} onClick={ () => this.selectedPostHandler(post.id)}>
                        <p>{post.title}</p>
                        <p>{post.author}</p>
                    </div>
                );
            })
        }

        let detailed_post = null
        if(!this.state.error){ 
            detailed_post = <DetailedPost postID={this.state.selectedPost}/> 
        } 
        

        return (
            <div className="PostDiv">
                <h1>Posts!</h1>
                {posts}
                {detailed_post}
            </div>
        );
    }

}

export default Post;