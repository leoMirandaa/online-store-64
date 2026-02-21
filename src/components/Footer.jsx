import "./Footer.css";

function Footer(){
    return(
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 my-5 border-top bg-dark" data-bs-theme="dark">

            <div class="col">
                <p class="text-body-secondary">© 2025 Online Store</p>
            </div>

            <div class="col"></div>

            <div class="col">
                <h5 className="text-white">Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a href="#" class="nav-link p-0 text-white">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link p-0 text-white">Features</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link p-0 text-white">Pricing</a>
                    </li>
                </ul>
            </div>

            <div class="col">
                <h5 className="text-white">Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a href="#" class="nav-link p-0 text-white">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link p-0 text-white">Features</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link p-0 text-white">Pricing</a>
                    </li>
                </ul>
            </div>

            <div class="col">
                <h5 className="text-white">Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a href="#" class="nav-link p-0 text-white">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link p-0 text-white">Features</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link p-0 text-white">Pricing</a>
                    </li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;