import { Link } from "react-router-dom";
import LearnCard from "./learncard";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


export default function Learn(props) {
    return (
        <div>
            <header>
                <h1  className="intro">Cloudinary Effects Challenge </h1>
                <div className="intro">
                    <Link to="game">Play the game!</Link>
                </div>
            </header>
            <div className="align-learn-card">


                <div className="learn-card-container">
                    <Grid2 container spacing={2}>
                        {props.data.map((item, index) => {
                            return (
                                <Grid2 xs={12} md={4} key={index}>
                                    <LearnCard image={item.image1} type={item.type} />
                                </Grid2>
                            )
                        })}
                    </Grid2>


                </div>
            </div>
            <footer>
                <div>
                    {/* <h2>Footer</h2> */}
                </div>
            </footer>
        </div>
    );
}
