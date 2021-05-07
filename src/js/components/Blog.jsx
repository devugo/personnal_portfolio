import React, { useRef, useEffect, useState } from 'react';
import moment from 'moment';

import Card from '../ui-elements/Card';
import { sanitizeHTML } from '../helpers/functions/sanitizeHTML';
import { blogAPIHost, blogHost, dateFormat } from '../constants';

async function gql(query, variables={}) {
    const data = await fetch(blogAPIHost, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    let dataJSON = data.json();
    return dataJSON;
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "devugo") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    responseCount
                    totalReactions
                    coverImage
                    dateAdded
                }
            }
        }
    }
`;


const Blog = () => {
    let newRef = useRef(null);

    const [firstIn, setFirstIn] = useState(false);
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        gql(GET_USER_ARTICLES, { page: 0 })
        .then(result => {
            setPosts(result?.data?.user?.publication?.posts);
        })
    }

    useEffect(() => {
        const scroller = () => {
            let fromTop = window.scrollY;

            if(newRef){
                if(newRef.current.offsetTop - window.innerHeight <= fromTop){
                    setFirstIn(true);
                }else{
                    setFirstIn(false);
                }
            }
        }
        window.addEventListener('scroll', scroller);
        return () => {
            window.removeEventListener('scroll', scroller);
        }
    })

    useEffect(() => {
        getPosts();
    }, []);

    const [firstPost, secondPost, thirdPost] = posts;

    return (
        <section ref={newRef} className="blog" id="blog">
            {
                firstPost && secondPost && thirdPost &&
                <div className="blog-container wrapper">
                    <h3 className="blog-container__title short-underline section-title" id="blog-container__title">BLOG</h3>
                    <div className="blog-container__do center-content">
                        <p id="what-i-do">Recent posts</p>
                    </div>
                    <div className="blog-container__body">
                        <div className={`blog-container__content`}>
                            <Card className={`blog-card${firstIn ? ' show-content' : ''}`} id="blog-card">
                                <a href={blogHost+firstPost.slug} target="_blank" rel="noreferrer">
                                    <div className="image center-content">
                                        <img src={firstPost.coverImage} alt="mobile" />
                                    </div>
                                    <div className="blog-content">
                                        <h5 className="blog-title">{firstPost.title}</h5>
                                        <div className="date-comment">
                                            <p><b>{moment(new Date(firstPost.dateAdded)).format(dateFormat)}</b></p>
                                            <p><b>{firstPost.responseCount} <i className="fa fa-comment-o"></i></b></p>
                                        </div>
                                        <p dangerouslySetInnerHTML={{__html: `${sanitizeHTML(firstPost.brief)}`}}>
                                            
                                        </p>
                                    </div>
                                </a>
                            </Card>
                            <Card className={`blog-card${firstIn ? ' show-content' : ''}`} id="blog-card">
                                <a href={blogHost+secondPost.slug} target="_blank" rel="noreferrer">
                                    <div className="image center-content">
                                        <img src={secondPost.coverImage} alt="mobile" />
                                    </div>
                                    <div className="blog-content">
                                        <h5 className="blog-title">{secondPost.title}</h5>
                                        <div className="date-comment">
                                            <p><b>{moment(new Date(secondPost.dateAdded)).format(dateFormat)}</b></p>
                                            <p><b>{secondPost.responseCount} <i className="fa fa-comment-o"></i></b></p>
                                        </div>
                                        <p dangerouslySetInnerHTML={{__html: `${sanitizeHTML(secondPost.brief)}`}}>
                                                
                                        </p>
                                    </div>
                                </a>
                            </Card>
                            <Card className={`blog-card${firstIn ? ' show-content' : ''}`}>
                                <a href={blogHost+thirdPost.slug} target="_blank" rel="noreferrer">
                                    <div className="image center-content">
                                        <img src={thirdPost.coverImage} alt="mobile" />
                                    </div>
                                    <div className="blog-content">
                                        <h5 className="blog-title">{thirdPost.title}</h5>
                                        <div className="date-comment">
                                            <p><b>{moment(new Date(thirdPost.dateAdded)).format(dateFormat)}</b></p>
                                            <p><b>{thirdPost.responseCount} <i className="fa fa-comment-o"></i></b></p>
                                        </div>
                                        <p dangerouslySetInnerHTML={{__html: `${sanitizeHTML(thirdPost.brief)}`}}>
                                                
                                        </p>
                                    </div>
                                </a>
                            </Card>
                        </div>
                    </div>
                    <div className="blog-more">
                        <a className="btn" target="_blank" rel="noopener noreferrer" href={blogHost}>More Posts</a>
                    </div>
                </div>
            }
        </section>
    )
}

export default Blog;