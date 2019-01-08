function angle_Type(angle)
{
    if (angle < 90)
    {
        return "Acute angle"
    }
    else if (angle == 90)
    {
        return "Right Angle"
    }
    else if (angle == 180)
    {
        return "Straight angle"
    }
    else if (angle <180 && angle > 90)
    {
        return "Obtuse angle"
    }
    else 
    {
        return "Illegal angle :("
    }
}


console.log(angle_Type(47));
console.log(angle_Type(145));
console.log(angle_Type(90));
console.log(angle_Type(180));