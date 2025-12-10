import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router";

function Services(props)
{
    return(
        <div className="services">
            <div>services</div> 
            <Button className='services__button'
            variant='contained' size='large'
            component={Link} to='/map'> map 
             </Button>
            </div>
    );
}

export default Services;