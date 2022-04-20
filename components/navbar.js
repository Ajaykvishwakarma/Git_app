
function navbar(){
    return `<div id="navbar">

    <div id="logo">

        <a href="gitHub.html">

            <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="">


        </a>
    </div>
    <div id="search">
      <input type="text" id="search-input" placeholder="Search Github">
    </div>

    <div id="options">

        <ul id="list">


            <li>Pull Requests</li>
            <li>Issues</li>
            <li>Marketplace</li>
            <li><a href = "explore.html" id = "explore_a">Explore</a></li>

        </ul>

    </div>

    <div id="profile">

        <img id="profile-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfb_mGGQfD8gPJdLwzVGdMH5B_WxftqIiisg&usqp=CAU" alt="">

    </div>


</div>
 `
}

export default navbar