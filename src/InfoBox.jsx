import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL = 
    "https://images.unsplash.com/photo-1722858344552-7acf888a7046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let HOT_URL = 
    "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
    let COLD_URL = 
    "https://images.unsplash.com/photo-1641672222794-536ad524a929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL = 
    "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return (<div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={ info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            >
        </CardMedia>

        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} 
        component={"span"}
        >
          <p>Temprature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Temprature = {info.temp}</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;C</p>
           <p>The weather can be described as <i>{info.weather}</i>andfeels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
   </div>
    </div>);
}