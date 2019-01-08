
function max(one, two, three)
{
    max_val = 0;
    if (one>two)
    {
        max_val = one;
    }
    else
    {
        max_val = two;
    }

    if (three > max_val)
    {
        max_val = three;
    }
    return max_val;
}

console.log(max (1,0,1));
console.log(max (0, -10, -20));
console.log(max (1000, 510, 440));