import { h, Component } from 'preact';
import { Layout } from 'preact-mdl';

export default class Header extends Component {
    render() {
        return (
            <Layout fixed-header>
                <Layout.Header>
                    <Layout.HeaderRow>
                        <Layout.Title>
                            <a href="#">
                                <img height="100" width="300" src="https://thetigerbot.com/wp-content/uploads/2017/08/weblogo_black.png" alt="logo" />
                            </a>
                        </Layout.Title>
                        <Layout.Spacer />
                        <div>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">How It Works</a>
                                </li>
                                <li>
                                    <a href="#">Features</a>
                                </li>
                                <li>
                                    <a href="#">Demonstration</a>
                                </li>
                                <li>
                                    <a href="#">Strategies</a>
                                </li>
                                <li>
                                    <a href="#">Packages</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </Layout.HeaderRow>
                </Layout.Header>
            </Layout>
        )
    }
}