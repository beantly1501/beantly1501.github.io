var newInputVisible = false;
var counter = 0;

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

function checkIfExists(inputFields)
{
    var table = document.getElementsByClassName("table-elements")[0];
    var tableElements = table.getElementsByClassName("table-el");

    for (let i = 0; i < tableElements.length; i++)
    {
        var texts = tableElements[i].getElementsByTagName("h3");
        if (texts[0].innerHTML == inputFields[0].value)
        {
            return true;
        }
    }
    return false;

}

function deleteEntry(id)
{
    var table = document.getElementsByClassName("table-elements")[0];
    var tableElement = table.getElementsByClassName("table-el")[id];
    tableElement.remove();
}

function processSubmit()
{
    var inputFields = document.getElementsByClassName("input-element");
    if (checkIfExists(inputFields) == false)
    {
        var temp = document.getElementById("template-0");
        var clone = temp.content.cloneNode(true);
        var table = document.getElementsByClassName("table-elements")[0];
        table.appendChild(clone);

        var tableElement = table.getElementsByClassName("table-el")[counter];
        var button = tableElement.getElementsByClassName("delete-entry")[0];
        button.outerHTML = `<button type="button" class="delete-entry" onclick="deleteEntry(${counter})">DELETE</button>`;
        tableElement.id = counter;
        var texts = tableElement.getElementsByTagName("h3");
        texts[0].innerHTML = inputFields[0].value;
        texts[1].innerHTML = inputFields[1].value;

        
        counter++;
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
}


