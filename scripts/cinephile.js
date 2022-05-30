var newInputVisible = false;

function newInput()
{

    if (newInputVisible == false)
    {
        var elements = document.getElementsByClassName("hidden");
        for (let i = 0; i < elements.length; i++)
        {
            elements[i].style.display = "inline";
        }
        newInputVisible = true;
    }
    else
    {
        var elements = document.getElementsByClassName("hidden");
        for (let i = 0; i < elements.length; i++)
        {
            elements[i].style.display = "none";
        }
        newInputVisible = false;       
    }
}

function processSubmit()
{
    var elements = document.getElementsByClassName("input-element");
}
