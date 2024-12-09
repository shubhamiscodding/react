import './podbean.css'
import v1 from './assets/main.mp4'
function User (){
    return(
<>
    <div className="mainpage">
        <video className="vedio" allow="autoplay; fullscreen; encrypted-media">
            <source src={v1} type="video/mp4"  />
        </video>
        <div className="nav">
            <img src="https://pbcdn1.podbean.com/fs1/site/images/logo-img2.png" alt="logo" />
            <ul>
                <li>podcasting</li>
                <li>monitising</li>
                <li>advertiseres</li>
                <li>Enterprice</li>
                <li>pricing</li>
                <li>|</li>
                <li>discover</li>
            </ul>          
            <div className="search">
                <span>
                    <img src="https://cdn-icons-png.freepik.com/512/17867/17867802.png?ga=GA1.1.448087608.1730898650" alt="searchbutton" />
                </span>
                <input type="text" name="search" placeholder={'search'} className="text" />
            </div>
            <ul className="left-corner">
                <li>Log in</li>
                <li><button>sign up for free</button></li>
            </ul>
        </div>
        <div className="vedio-text">
                <h1 className="textcenter">Your Podcast Hosting
                    and Monetizing Platform
                </h1>
                <p className="textcenter">Podbean is an easy and powerful way to create, promote and monetize your podcast. Everything you need for a successful podcast.</p>
                <button>Get Started For Free</button>
        </div>
    </div>
    <div className="detail-option">
        <div className="detail1">
            <h1>From podcast newbie to professional podcaster</h1>
            <p>For over 10 years, more than 600,000 podcasters have launched their podcasts and achieved their goals on Podbean.</p>
        </div>
        <div className="detail2">
            <div>
                <img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/double/h-feature@2x_resize_1x.webp" alt="detail" loading='lazy' />
            </div>
            <div className="detail2-1">
                <h1>Create and publish your podcast like a pro</h1>
                <p>
                    Make compelling podcasts right from your phone with the podcast recording app or capture any moment with professional-quality Podbean live streaming. Publish your audio and video in one ultra-simple, secure platform to grow your audience quickly and easily.
                </p>
                <b>Create your podcast</b>
            </div>
        </div>
        <div className="detail3"> 
            <div className="detail3-1">
                <h1>Grow your podcast, be heard everywhere</h1>
                <p>
                    Expand your audience by boosting awareness on connected social accounts and distribute your podcast to the most popular listening apps like Spotify and Apple Podcasts with just a few clicks.
                </p>
                <b>Learn how to promote your podcast</b>
            </div>
            <div>
                <img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/double/h-feature2_resize_1x.webp" alt="detail" loading="lazy" />
            </div>
        </div>
        <div className="detail4">
            <div>
                <img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/double/second-center@2x_resize_1x.webp" alt="detail" loading="lazy" />
            </div>
            <div className="detail4-1">
                <h1>Turn your passion into a new income stream</h1>
                <p>
                    Podbean offers a variety of monetization tools, including Ads Marketplace, dynamic ad insertion technology, and Apple Podcasts Subscriptions Integration, to maximize your revenue potential. Join Ads Marketplace, and leverage Apple Podcasts Subscriptions for exclusive content. Get rewarded by fans through live shows and unlock multiple streams of income for your podcast.
                </p>
                <b>Learn more about monetization</b>
            </div>
        </div>
    </div>
    <div className="AI">
        <div className="AI1"><h1>Elevate your podcast with Podbean AI</h1></div>
        <div className="AI2"><p>Elevate your podcast to new heights with Podbean AI’s cutting-edge features such as Noise Reduction, Intelligent Leveler, Cut Filler Words and Silence, Filtering & AutoEQ, Automated Title and Show Notes, AI Enhanced Transcripts, and Precisely Crafted Chapter Markers. Streamline your post-production tasks, reducing the time and effort required.</p></div>
        <div className="AI3"><b>Learn more about Podbean AI</b></div>
        <div className="AI4"><img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/feature/home-ai-bg@2x_resize_1x.webp" alt="AI OF POADBEAn" loading="lazy" /></div>
    </div>
    <div className="podcast-website">
        <h1>Unlock a beautiful, professional,
            and customizable podcast website
        </h1>
        <p>Every Podbean podcast hosting account comes with a free podcast website. The beautifully designed, mobile responsive templates are built for podcasts. Featuring cutting-edge design and robust features so you can easily customize the perfect website to show off your podcast.</p>
        <img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/double/03_resize_1x.webp" alt="website" />
    </div>
    <div className="podcast-analytic">
        <h1>Comprehensive podcast analytics</h1>
        <p>Podbean provides IAB-certified podcast analytics and intuitive charts to help you grow your podcast. Measure your success, get insights into your audience, and continue improving with industry-leading podcast statistics, included with all Podbean hosting plans.</p>
        <b>Start your own podcast now</b>
        <img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/double/mac-stats_resize_1x.webp" alt="analytics" loading="lazy" />
    </div>
    <div className="pod-app">
        <h1>Podbean App simplifying your podcasting</h1>
        <p>Streamlining your podcasting journey from concept to broadcast. Making it easier than ever to share your voice with the world.</p>
    </div>
    <div className="podappgrid">
        <div className="podappgrid1">
            <p className="tittle">Record from Anywhere</p>
            <p>Effortlessly design high-quality podcasts with our intuitive recorder, perfect for all skill levels and seamless guest collaboration.</p>
            <p className="tittle">Edit Like Magic</p>
            <p className="dis">Transform your audio experience with powerful editing tools that allow you to effortlessly cut, split, merge, and export for a polished, professional finish.</p>
        </div>
        <div className="podappgrid2">
            <img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/start/h-iPhone-mask@2x_resize_1x.webp" alt="mobile interface of app" loading="lazy" />
        </div>
        <div className="podappgrid1">
            <p className="tittle">Record from Anywhere</p>
            <p>Effortlessly design high-quality podcasts with our intuitive recorder, perfect for all skill levels and seamless guest collaboration.</p>
            <p className="tittle">Edit Like Magic</p>
            <p className="dis">Transform your audio experience with powerful editing tools that allow you to effortlessly cut, split, merge, and export for a polished, professional finish.</p>
        </div>
    </div>
    <div className="podcast-dowload">
        <h1>Download it now.</h1>
        <div className="imgs">
            <img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/double/ios-app@2x_resize_1x.webp" alt="Download" loading="lazy" />
            <img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/double/google-play@2x_resize_1x.webp" alt="Download" loading="lazy" />
        </div>
        <p className="discription">Unleash your creativity and capture stunning audio
            effortlessly from your mobile phone!
        </p>
    </div>
    <div className="appfun">
        <div>
            <img src="https://pbcdn1.podbean.com/fs1/site/www-v2/images/double/h-live_resize_1x.webp" alt="app" loading="lazy" />
        </div>
        <div className="txt">
            <h1>Live stream simplified, engage your audience</h1>
            <p>Expand your podcast with live audio streaming and engage your audience in new and exciting ways! Take listener calls and get real-time comments. Receive virtual gifts from your audience and earn recurring income from your Fan Club membership.</p>
            <b>Learn How to Start a Live Stream</b>
        </div>
    </div>
</>
    )
}
export default User;