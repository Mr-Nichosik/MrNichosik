
let Buttons = document.getElementsByClassName("Button");
let ForEach = Array.prototype.forEach;

ForEach.call(Buttons, function (b)
{
    b.addEventListener("mousedown", AddElement);
});

function AddElement(e)
{
    let AddDiv = document.createElement("div");
    let MaxValue = Math.max(this.clientWidth, this.clientHeight);
    let SDiv = AddDiv.style;
    let px = "px";
    let Rect = this.getBoundingClientRect();

    SDiv.width = SDiv.height = MaxValue + px;
    SDiv.left = e.clientX - Rect.left - (MaxValue / 2) + px;
    SDiv.top = e.clientY - Rect.top - (MaxValue / 2) + px;

    AddDiv.classList.add("Pulse");
    this.appendChild(AddDiv);

    AddDiv.addEventListener('animationend', removeDiv);
    function removeDiv()
    {
      this.remove()
    }

    console.log(AddDiv);
    console.log(MaxValue);
    console.log(Rect)
}