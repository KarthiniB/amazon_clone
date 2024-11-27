import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

export default function ElectronicsPage() {
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch((error) => console.error('Error fetching data:', error));
    },[]);
    return (
        <div style={{}}>
            <h4>Electronic Intems</h4>
            <Card
                style={{
                    width: 400,
                    backgroundColor: "grey",
                }}
            >
                <CardContent>
                    <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                    >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJc-kxhH7hFPOh4cDOLyfk9oMeGhBclA0pog&s" alt="Company Logo" class="logo"/>
                        
                    </Typography>
                    <Typography variant="h5" component="h2">
                        How are you ?
                    </Typography>
                    <Typography
                        style={{
                            marginBottom: 12,
                        }}
                        color="textSecondary"
                    >
                        Keep Motivated
                    </Typography>
                    <Typography variant="body2" component="p">
                        Stay Happy
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Stay Safe.....</Button>
                </CardActions>
            </Card>
        </div>
    );
}