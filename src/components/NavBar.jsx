

function NavBar(props){


    return  <>
                <div className="logo">
                    <img src="icon-star.svg" alt="" />
                </div>
                <div className="texte1"> {props.title} </div>
                    <div className="texte2">
                        <div>{props.description}</div>
                        <div className="t2">
                        request.All feedback is appreciated to help us
                        </div>
                    <div className="t3">improve our offering! 
                        {props.children}
                    </div>

                    <button onClick={props.handleClick}>click</button>
                </div>
            </>
}

export default NavBar;