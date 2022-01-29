
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";

class Layout extends React.Component{

    state = {
        menuList: ['Home', 'about', 'Contact-us'],
    }

    render() {
        return (

            <div id="wrapper">

                {/*Left Menu*/}
                <LeftMenu />

                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">

                        {/*Header*/}
                        <Header />

                        <div className="container-fluid">



                        </div>
                    </div>

                    {/*/ Footer*/}
                    <Footer />
                    {/*/End  Footer*/}

                </div>

            </div>

    );
    }


}

export default Layout;