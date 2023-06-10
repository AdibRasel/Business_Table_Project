import React from 'react';
import "./HomeCss.css"

import PostImage from "../../assets/images/PostImage.jpg"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home(props) {
    return (
        <div>
            <header>
                <Header />
            </header>

            <body>
                {/* Main Body start  */}
                <div className="MainBody">

                    {/* Left Side start  */}
                    <div className="LeftSide">
                        {/* Post Box start  */}
                        <div className="PostBox">
                            <div className="PostTitle">
                                <h1>This is Title</h1>
                            </div>
                            <div className="PostImage">
                                <img src={PostImage} alt="" />
                            </div>
                            <div className="PostDisc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta repellat ad minima esse consequatur qui eveniet, nisi iusto odio beatae! Praesentium, enim animi perferendis beatae nisi cupiditate officiis accusantium vel! Facilis, consequuntur commodi provident accusantium unde cumque eveniet modi nesciunt soluta quisquam dolor itaque aliquam quod! Sunt eos odio animi consequatur neque facilis voluptate adipisci necessitatibus omnis accusantium magnam deleniti ducimus, expedita dignissimos labore voluptatum aperiam minima. Harum maiores dolores provident ea suscipit quam facere, velit explicabo magnam exercitationem inventore tempora debitis neque enim voluptas officiis odio odit nihil iure ut perspiciatis recusandae illo? Harum dolorem velit vero sed.
                                </p>
                            </div>
                        </div>
                        <a href="ReactJs">
                            <h1>React js Tutorial</h1>
                        </a>
                        {/* Post Box end  */}
                    </div>
                    {/* Left Side end  */}


                    {/* Right Side start  */}
                    <div className="RightSide">
                        <div className="Catagory">
                            <h3>Blog Title</h3>
                            <ul>
                                <li>
                                    <a href="">
                                        Bangla Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        English Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="PostTitleShow">
                            <h3>Post Title</h3>
                            <ul>
                                <li>
                                    <a href="">
                                        This is Post Title
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Right side End  */}

                </div>
                {/* Main Body End  */}
            </body>

            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default Home;