import { h, Component } from 'preact';

export default class Carousel extends Component {
    render() {
        <div id="carousel">
            <div class="carousel-inner">
                <div class="item">
                    <img src="https://thetigerbot.com/wp-content/uploads/2016/05/Screenshot-2017-08-28-21.41.31-1.png" alt="carousel" />
                    <div class="carousel-action">
                        <h1 itemprop="headline">
                            <strong>Automated trading made easy</strong>
                        </h1>
                        <div>
                            <p>The most customizable auto-trading solution available.</p>
                        </div>
                        <div>
                            <a href="#" class="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}